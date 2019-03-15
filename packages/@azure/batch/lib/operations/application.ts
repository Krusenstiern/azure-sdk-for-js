/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/applicationMappers";
import * as Parameters from "../models/parameters";
import { BatchServiceClientContext } from "../batchServiceClientContext";

/** Class representing a Application. */
export class Application {
  private readonly client: BatchServiceClientContext;

  /**
   * Create a Application.
   * @param {BatchServiceClientContext} client Reference to the service client.
   */
  constructor(client: BatchServiceClientContext) {
    this.client = client;
  }

  /**
   * This operation returns only applications and versions that are available for use on compute
   * nodes; that is, that can be used in an application package reference. For administrator
   * information about applications and versions that are not yet available to compute nodes, use the
   * Azure portal or the Azure Resource Manager API.
   * @summary Lists all of the applications available in the specified account.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationListResponse>
   */
  list(options?: Models.ApplicationListOptionalParams): Promise<Models.ApplicationListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.ApplicationListOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  list(options?: Models.ApplicationListOptionalParams | msRest.ServiceCallback<Models.ApplicationListResult>, callback?: msRest.ServiceCallback<Models.ApplicationListResult>): Promise<Models.ApplicationListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ApplicationListResponse>;
  }

  /**
   * This operation returns only applications and versions that are available for use on compute
   * nodes; that is, that can be used in an application package reference. For administrator
   * information about applications and versions that are not yet available to compute nodes, use the
   * Azure portal or the Azure Resource Manager API.
   * @summary Gets information about the specified application.
   * @param applicationId The ID of the application.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationGetResponse>
   */
  get(applicationId: string, options?: Models.ApplicationGetOptionalParams): Promise<Models.ApplicationGetResponse>;
  /**
   * @param applicationId The ID of the application.
   * @param callback The callback
   */
  get(applicationId: string, callback: msRest.ServiceCallback<Models.ApplicationSummary>): void;
  /**
   * @param applicationId The ID of the application.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(applicationId: string, options: Models.ApplicationGetOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationSummary>): void;
  get(applicationId: string, options?: Models.ApplicationGetOptionalParams | msRest.ServiceCallback<Models.ApplicationSummary>, callback?: msRest.ServiceCallback<Models.ApplicationSummary>): Promise<Models.ApplicationGetResponse> {
    return this.client.sendOperationRequest(
      {
        applicationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApplicationGetResponse>;
  }

  /**
   * This operation returns only applications and versions that are available for use on compute
   * nodes; that is, that can be used in an application package reference. For administrator
   * information about applications and versions that are not yet available to compute nodes, use the
   * Azure portal or the Azure Resource Manager API.
   * @summary Lists all of the applications available in the specified account.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplicationListResponse>
   */
  listNext(nextPageLink: string, options?: Models.ApplicationListNextOptionalParams): Promise<Models.ApplicationListResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: Models.ApplicationListNextOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationListResult>): void;
  listNext(nextPageLink: string, options?: Models.ApplicationListNextOptionalParams | msRest.ServiceCallback<Models.ApplicationListResult>, callback?: msRest.ServiceCallback<Models.ApplicationListResult>): Promise<Models.ApplicationListResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ApplicationListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "applications",
  urlParameters: [
    Parameters.batchUrl
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxResults0,
    Parameters.timeout0
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId0,
    Parameters.returnClientRequestId0,
    Parameters.ocpDate0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult,
      headersMapper: Mappers.ApplicationListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "applications/{applicationId}",
  urlParameters: [
    Parameters.batchUrl,
    Parameters.applicationId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.timeout1
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId1,
    Parameters.returnClientRequestId1,
    Parameters.ocpDate1
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationSummary,
      headersMapper: Mappers.ApplicationGetHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "{batchUrl}",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId2,
    Parameters.returnClientRequestId2,
    Parameters.ocpDate2
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult,
      headersMapper: Mappers.ApplicationListHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  serializer
};
