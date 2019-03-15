/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing CheckNameAvailabilityRequest.
 * Check Name Availability Request
 *
 */
export interface CheckNameAvailabilityRequest {
  /**
   * @member {string} name Resource Name To Verify
   */
  name: string;
  /**
   * @member {string} type Fully qualified resource type which includes
   * provider namespace
   */
  type: string;
}

/**
 * @interface
 * An interface representing CheckNameAvailabilityResponse.
 * Check Name Availability Response
 *
 */
export interface CheckNameAvailabilityResponse {
  /**
   * @member {NameAvailability} nameAvailable if name Available. Possible
   * values include: 'true', 'false'
   */
  nameAvailable: NameAvailability;
  /**
   * @member {NameUnavailableReason} [reason] Resource Name To Verify. Possible
   * values include: 'Invalid', 'AlreadyExists'
   */
  reason?: NameUnavailableReason;
  /**
   * @member {string} [message] detail message
   */
  message?: string;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * Response on Error
 *
 */
export interface ErrorResponse {
  /**
   * @member {string} message Describes the error in detail and provides
   * debugging information
   */
  message: string;
  /**
   * @member {string} code String that can be used to programmatically identify
   * the error.
   */
  code: string;
  /**
   * @member {string} [target] The target of the particular error
   */
  target?: string;
  /**
   * @member {string} [details] An array of JSON objects that MUST contain
   * name/value pairs for code and message, and MAY contain a name/value pair
   * for target, as described above.The contents of this section are
   * service-defined but must adhere to the aforementioned schema.
   */
  details?: string;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * The object that represents the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} provider Service provider: Microsoft.ResourceProvider
   */
  provider: string;
  /**
   * @member {string} resource Resource on which the operation is performed:
   * Profile, endpoint, etc.
   */
  resource: string;
  /**
   * @member {string} operation Operation type: Read, write, delete, etc.
   */
  operation: string;
  /**
   * @member {string} description Description of operation
   */
  description: string;
}

/**
 * @interface
 * An interface representing Operation.
 * REST API operation
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display] The object that represents the
   * operation.
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing Resource.
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Fully qualified resource Id for the resource. Ex -
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] The name of the resource
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] The type of the resource. Ex-
   * Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
}

/**
 * @interface
 * An interface representing TrackedResource.
 * The resource model definition for a ARM tracked top level resource
 *
 * @extends Resource
 */
export interface TrackedResource extends Resource {
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {string} location The geo-location where the resource lives
   */
  location: string;
}

/**
 * @interface
 * An interface representing SpatialAnchorsAccount.
 * SpatialAnchorsAccount Response.
 *
 * @extends TrackedResource
 */
export interface SpatialAnchorsAccount extends TrackedResource {
  /**
   * @member {string} [accountId] unique id of certain Spatial Anchors Account
   * data contract.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly accountId?: string;
  /**
   * @member {string} [accountDomain] Correspond domain name of certain Spatial
   * Anchors Account
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly accountDomain?: string;
}

/**
 * @interface
 * An interface representing SpatialAnchorsAccountKeys.
 * Spatial Anchors Account Keys
 *
 */
export interface SpatialAnchorsAccountKeys {
  /**
   * @member {string} [primaryKey] value of primary key.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly primaryKey?: string;
  /**
   * @member {string} [secondaryKey] value of secondary key.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly secondaryKey?: string;
}

/**
 * @interface
 * An interface representing SpatialAnchorsAccountKeyRegenerateRequest.
 * Spatial Anchors Account Regenerate Key
 *
 */
export interface SpatialAnchorsAccountKeyRegenerateRequest {
  /**
   * @member {number} [serial] serial of key to be regenerated. Default value:
   * 1 .
   */
  serial?: number;
}

/**
 * @interface
 * An interface representing ProxyResource.
 * The resource model definition for a ARM proxy resource. It will have
 * everything other than required location and tags
 *
 * @extends Resource
 */
export interface ProxyResource extends Resource {
}

/**
 * @interface
 * An interface representing AzureEntityResource.
 * The resource model definition for a Azure Resource Manager resource with an
 * etag.
 *
 * @extends Resource
 */
export interface AzureEntityResource extends Resource {
  /**
   * @member {string} [etag] Resource Etag.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly etag?: string;
}

/**
 * @interface
 * An interface representing MixedRealityClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface MixedRealityClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationList.
 * Result of the request to list Resource Provider operations. It contains a
 * list of operations and a URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationList extends Array<Operation> {
  /**
   * @member {string} [nextLink] URL to get the next set of operation list
   * results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the SpatialAnchorsAccountList.
 * Result of the request to get resource collection. It contains a list of
 * resources and a URL link to get the next set of results.
 *
 * @extends Array<SpatialAnchorsAccount>
 */
export interface SpatialAnchorsAccountList extends Array<SpatialAnchorsAccount> {
  /**
   * @member {string} [nextLink] URL to get the next set of resource list
   * results if there are any.
   */
  nextLink?: string;
}

/**
 * Defines values for NameAvailability.
 * Possible values include: 'true', 'false'
 * @readonly
 * @enum {string}
 */
export type NameAvailability = 'true' | 'false';

/**
 * Defines values for NameUnavailableReason.
 * Possible values include: 'Invalid', 'AlreadyExists'
 * @readonly
 * @enum {string}
 */
export type NameUnavailableReason = 'Invalid' | 'AlreadyExists';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the checkNameAvailabilityLocal operation.
 */
export type CheckNameAvailabilityLocalResponse = CheckNameAvailabilityResponse & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CheckNameAvailabilityResponse;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type SpatialAnchorsAccountsListBySubscriptionResponse = SpatialAnchorsAccountList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SpatialAnchorsAccountList;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type SpatialAnchorsAccountsListByResourceGroupResponse = SpatialAnchorsAccountList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SpatialAnchorsAccountList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type SpatialAnchorsAccountsGetResponse = SpatialAnchorsAccount & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SpatialAnchorsAccount;
    };
};

/**
 * Contains response data for the update operation.
 */
export type SpatialAnchorsAccountsUpdateResponse = SpatialAnchorsAccount & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SpatialAnchorsAccount;
    };
};

/**
 * Contains response data for the create operation.
 */
export type SpatialAnchorsAccountsCreateResponse = SpatialAnchorsAccount & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SpatialAnchorsAccount;
    };
};

/**
 * Contains response data for the getKeys operation.
 */
export type SpatialAnchorsAccountsGetKeysResponse = SpatialAnchorsAccountKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SpatialAnchorsAccountKeys;
    };
};

/**
 * Contains response data for the regenerateKeys operation.
 */
export type SpatialAnchorsAccountsRegenerateKeysResponse = SpatialAnchorsAccountKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SpatialAnchorsAccountKeys;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type SpatialAnchorsAccountsListBySubscriptionNextResponse = SpatialAnchorsAccountList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SpatialAnchorsAccountList;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type SpatialAnchorsAccountsListByResourceGroupNextResponse = SpatialAnchorsAccountList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SpatialAnchorsAccountList;
    };
};
