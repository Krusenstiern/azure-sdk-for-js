import * as assert from "assert";

import {
  AccountSASPermissions,
  AccountSASResourceTypes,
  AccountSASServices,
  AnonymousCredential,
  MessagesClient,
  MessageIdClient,
  QueueSASPermissions,
  QueueClient,
  generateAccountSASQueryParameters,
  generateQueueSASQueryParameters,
  QueueServiceClient,
  SharedKeyCredential,
  StorageClient
} from "../../src";
import { SASProtocol } from "../../src/SASQueryParameters";
import { getQSU, getUniqueName, sleep } from "../utils/index";

describe("Shared Access Signature (SAS) generation Node.js only", () => {
  const queueServiceClient = getQSU();

  it("generateAccountSASQueryParameters should work", async () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - 5); // Skip clock skew with server

    const tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);

    // By default, credential is always the last element of pipeline factories
    const factories = queueServiceClient.pipeline.factories;
    const sharedKeyCredential = factories[factories.length - 1];

    const sas = generateAccountSASQueryParameters(
      {
        expiryTime: tmr,
        ipRange: { start: "0.0.0.0", end: "255.255.255.255" },
        permissions: AccountSASPermissions.parse("rwdlacup").toString(),
        protocol: SASProtocol.HTTPSandHTTP,
        resourceTypes: AccountSASResourceTypes.parse("sco").toString(),
        services: AccountSASServices.parse("btqf").toString(),
        startTime: now,
        version: "2016-05-31"
      },
      sharedKeyCredential as SharedKeyCredential
    ).toString();

    const sasURL = `${queueServiceClient.url}?${sas}`;
    const queueServiceClientwithSAS = new QueueServiceClient(
      sasURL,
      StorageClient.newPipeline(new AnonymousCredential())
    );

    await queueServiceClientwithSAS.getProperties();
  });

  it("generateAccountSASQueryParameters should not work with invalid permission", async () => {
    const tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);

    // By default, credential is always the last element of pipeline factories
    const factories = queueServiceClient.pipeline.factories;
    const sharedKeyCredential = factories[factories.length - 1];

    const sas = generateAccountSASQueryParameters(
      {
        expiryTime: tmr,
        permissions: AccountSASPermissions.parse("wdlcup").toString(),
        resourceTypes: AccountSASResourceTypes.parse("sco").toString(),
        services: AccountSASServices.parse("btqf").toString()
      },
      sharedKeyCredential as SharedKeyCredential
    ).toString();

    const sasURL = `${queueServiceClient.url}?${sas}`;
    const queueServiceClientwithSAS = new QueueServiceClient(
      sasURL,
      StorageClient.newPipeline(new AnonymousCredential())
    );

    let error;
    try {
      await queueServiceClientwithSAS.getProperties();
    } catch (err) {
      error = err;
    }

    assert.ok(error);
  });

  it("generateAccountSASQueryParameters should not work with invalid service", async () => {
    const tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);

    // By default, credential is always the last element of pipeline factories
    const factories = queueServiceClient.pipeline.factories;
    const sharedKeyCredential = factories[factories.length - 1];

    const sas = generateAccountSASQueryParameters(
      {
        expiryTime: tmr,
        permissions: AccountSASPermissions.parse("rwdlacup").toString(),
        resourceTypes: AccountSASResourceTypes.parse("sco").toString(),
        services: AccountSASServices.parse("b").toString()
      },
      sharedKeyCredential as SharedKeyCredential
    ).toString();

    const sasURL = `${queueServiceClient.url}?${sas}`;
    const queueServiceClientwithSAS = new QueueServiceClient(
      sasURL,
      StorageClient.newPipeline(new AnonymousCredential())
    );

    let error;
    try {
      await queueServiceClientwithSAS.getProperties();
    } catch (err) {
      error = err;
    }

    assert.ok(error);
  });

  it("generateAccountSASQueryParameters should not work with invalid resource type", async () => {
    const tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);

    // By default, credential is always the last element of pipeline factories
    const factories = queueServiceClient.pipeline.factories;
    const sharedKeyCredential = factories[factories.length - 1];

    const sas = generateAccountSASQueryParameters(
      {
        expiryTime: tmr,
        ipRange: { start: "0.0.0.0", end: "255.255.255.255" },
        permissions: AccountSASPermissions.parse("rwdlacup").toString(),
        protocol: SASProtocol.HTTPSandHTTP,
        resourceTypes: AccountSASResourceTypes.parse("co").toString(),
        services: AccountSASServices.parse("btqf").toString(),
        version: "2016-05-31"
      },
      sharedKeyCredential as SharedKeyCredential
    ).toString();

    const sasURL = `${queueServiceClient.url}?${sas}`;
    const queueServiceClientwithSAS = new QueueServiceClient(
      sasURL,
      StorageClient.newPipeline(new AnonymousCredential())
    );

    let error;
    try {
      await queueServiceClientwithSAS.getProperties();
    } catch (err) {
      error = err;
    }

    assert.ok(error);
  });

  it("generateQueueSASQueryParameters should work for queue", async () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - 5); // Skip clock skew with server

    const tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);

    // By default, credential is always the last element of pipeline factories
    const factories = queueServiceClient.pipeline.factories;
    const sharedKeyCredential = factories[factories.length - 1];

    const queueName = getUniqueName("queue");
    const queueClient = QueueClient.fromQueueServiceClient(queueServiceClient, queueName);
    await queueClient.create();

    const queueSAS = generateQueueSASQueryParameters(
      {
        queueName,
        expiryTime: tmr,
        ipRange: { start: "0.0.0.0", end: "255.255.255.255" },
        permissions: QueueSASPermissions.parse("raup").toString(),
        protocol: SASProtocol.HTTPSandHTTP,
        startTime: now,
        version: "2016-05-31"
      },
      sharedKeyCredential as SharedKeyCredential
    );

    const sasURL = `${queueClient.url}?${queueSAS}`;
    const queueClientwithSAS = new QueueClient(
      sasURL,
      StorageClient.newPipeline(new AnonymousCredential())
    );

    await queueClientwithSAS.getProperties();
    await queueClient.delete();
  });

  it("generateQueueSASQueryParameters should work for messages", async () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - 5); // Skip clock skew with server

    const tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);

    // By default, credential is always the last element of pipeline factories
    const factories = queueServiceClient.pipeline.factories;
    const sharedKeyCredential = factories[factories.length - 1];

    const queueName = getUniqueName("queue");
    const queueClient = QueueClient.fromQueueServiceClient(queueServiceClient, queueName);
    await queueClient.create();

    const queueSAS = generateQueueSASQueryParameters(
      {
        queueName: queueName,
        expiryTime: tmr,
        ipRange: { start: "0.0.0.0", end: "255.255.255.255" },
        permissions: QueueSASPermissions.parse("raup").toString(),
        protocol: SASProtocol.HTTPSandHTTP,
        startTime: now,
        version: "2016-05-31"
      },
      sharedKeyCredential as SharedKeyCredential
    );

    const messageContent = "Hello World!";

    const messagesClient = MessagesClient.fromQueueClient(queueClient);
    const sasURLForMessages = `${messagesClient.url}?${queueSAS}`;
    const messagesClientWithSAS = new MessagesClient(
      sasURLForMessages,
      StorageClient.newPipeline(new AnonymousCredential())
    );
    const enqueueResult = await messagesClientWithSAS.enqueue(messageContent);

    let pResult = await messagesClient.peek();
    assert.deepStrictEqual(pResult.peekedMessageItems.length, 1);

    const messageIdClient = MessageIdClient.fromMessagesClient(
      messagesClient,
      enqueueResult.messageId
    );
    const sasURLForMessageId = `${messageIdClient.url}?${queueSAS}`;
    const messageIdClientWithSAS = new MessageIdClient(
      sasURLForMessageId,
      StorageClient.newPipeline(new AnonymousCredential())
    );

    await messageIdClientWithSAS.delete(enqueueResult.popReceipt);

    pResult = await messagesClient.peek();
    assert.deepStrictEqual(pResult.peekedMessageItems.length, 0);

    await queueClient.delete();
  });

  it("generateQueueSASQueryParameters should work for queue with access policy", async () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() - 5); // Skip clock skew with server

    const tmr = new Date();
    tmr.setDate(tmr.getDate() + 1);

    // By default, credential is always the last element of pipeline factories
    const factories = queueServiceClient.pipeline.factories;
    const sharedKeyCredential = factories[factories.length - 1];

    const queueName = getUniqueName("queue");
    const queueClient = QueueClient.fromQueueServiceClient(queueServiceClient, queueName);
    await queueClient.create();

    const id = "unique-id";
    await queueClient.setAccessPolicy([
      {
        accessPolicy: {
          expiry: tmr,
          permission: QueueSASPermissions.parse("raup").toString(),
          start: now
        },
        id
      }
    ]);

    const queueSAS = generateQueueSASQueryParameters(
      {
        queueName,
        identifier: id
      },
      sharedKeyCredential as SharedKeyCredential
    );

    const messagesClient = MessagesClient.fromQueueClient(queueClient);

    const sasURL = `${messagesClient.url}?${queueSAS}`;
    const messagesClientwithSAS = new MessagesClient(
      sasURL,
      StorageClient.newPipeline(new AnonymousCredential())
    );

    const messageContent = "hello";

    const eResult = await messagesClientwithSAS.enqueue(messageContent);
    assert.ok(eResult.messageId);
    const pResult = await messagesClientwithSAS.peek();
    assert.deepStrictEqual(pResult.peekedMessageItems[0].messageText, messageContent);
    const dResult = await messagesClientwithSAS.dequeue({
      visibilitytimeout: 1
    });
    assert.deepStrictEqual(dResult.dequeuedMessageItems[0].messageText, messageContent);

    await sleep(2 * 1000);

    const messageIdClient = MessageIdClient.fromMessagesClient(
      messagesClient,
      dResult.dequeuedMessageItems[0].messageId
    );

    const sasURLForMessage = `${messageIdClient.url}?${queueSAS}`;
    const messageIdClientwithSAS = new MessageIdClient(
      sasURLForMessage,
      StorageClient.newPipeline(new AnonymousCredential())
    );
    const deleteResult = await messageIdClientwithSAS.delete(
      dResult.dequeuedMessageItems[0].popReceipt
    );
    assert.ok(deleteResult.requestId);

    //const cResult = await messagesClientwithSAS.clear(); //This request is not authorized to perform this operation. As testing, this is service's current behavior.
  });
});