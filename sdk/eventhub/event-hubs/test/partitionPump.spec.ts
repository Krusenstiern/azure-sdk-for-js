// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { createProcessingSpan, trace } from "../src/partitionPump";
import { NoOpSpan, TestTracer, setTracer, TestSpan } from "@azure/core-tracing";
import { CanonicalCode, SpanOptions, SpanKind } from "@opentelemetry/types";
import chai from "chai";
import { ReceivedEventData } from "../src/eventData";
import { instrumentEventData } from "../src/diagnostics/instrumentEventData";

const should = chai.should();

describe("PartitionPump", () => {
  describe("telemetry", () => {
    const eventHubProperties = {
      endpoint: "theendpoint",
      eventHubName: "theeventhubname"
    };

    class TestTracer2 extends TestTracer {
      public spanOptions: SpanOptions | undefined;
      public spanName: string | undefined;

      constructor() {
        super();
      }

      startSpan(nameArg: string, optionsArg?: SpanOptions): TestSpan {
        this.spanName = nameArg;
        this.spanOptions = optionsArg;
        return super.startSpan(nameArg, optionsArg);
      }
    }

    it("basic span properties are set", async () => {
      const fakeParentSpan = new NoOpSpan();
      const tracer = new TestTracer2();
      setTracer(tracer);

      await createProcessingSpan([], eventHubProperties, {
        tracingOptions: {
          spanOptions: {
            parent: fakeParentSpan
          }
        }
      });

      should.equal(tracer.spanName, "Azure.EventHubs.process");

      should.exist(tracer.spanOptions);
      tracer.spanOptions!.kind!.should.equal(SpanKind.CONSUMER);
      tracer.spanOptions!.parent!.should.equal(fakeParentSpan);

      // TODO: re-enable the following verification after moving to @azure/core-tracing 1.0.0-preview.8
      //       attributes is added after preview.7.
      // const attributes = tracer.getRootSpans()[0].attributes;

      // attributes!.should.deep.equal({
      //   component: "eventhubs",
      //   "message_bus.destination": "theeventhubname",
      //   "peer.address": "theendpoint"
      // });
    });

    it("received events are linked to this span using Diagnostic-Id", async () => {
      const requiredEventProperties = {
        body: "",
        enqueuedTimeUtc: new Date(),
        offset: 0,
        partitionKey: null,
        sequenceNumber: 0
      };

      const tracer = new TestTracer2();
      setTracer(tracer);

      const firstEvent = tracer.startSpan("a");
      const thirdEvent = tracer.startSpan("c");

      const receivedEvents: ReceivedEventData[] = [
        instrumentEventData({ ...requiredEventProperties }, firstEvent) as ReceivedEventData,
        { properties: {}, ...requiredEventProperties }, // no diagnostic ID means it gets skipped
        instrumentEventData({ ...requiredEventProperties }, thirdEvent) as ReceivedEventData
      ];

      await createProcessingSpan(receivedEvents, eventHubProperties, {});

      // middle event, since it has no trace information, doesn't get included
      // in the telemetry
      tracer.spanOptions!.links!.length.should.equal(3 - 1);
      // the test tracer just hands out a string integer that just gets
      // incremented
      tracer.spanOptions!.links![0]!.spanContext.traceId.should.equal(firstEvent.context().traceId);
      tracer.spanOptions!.links![1]!.spanContext.traceId.should.equal(thirdEvent.context().traceId);
    });

    it("trace - normal", async () => {
      const tracer = new TestTracer();
      const span = tracer.startSpan("whatever");

      await trace(async () => {}, span);

      span.status!.code.should.equal(CanonicalCode.OK);
      span.endCalled.should.be.ok;
    });

    it("trace - throws", async () => {
      const tracer = new TestTracer();
      const span = tracer.startSpan("whatever");

      await trace(async () => {
        throw new Error("error thrown from fn");
      }, span).should.be.rejectedWith(/error thrown from fn/);

      span.status!.code.should.equal(CanonicalCode.UNKNOWN);
      span.status!.message!.should.equal("error thrown from fn");
      span.endCalled.should.be.ok;
    });
  });
});
