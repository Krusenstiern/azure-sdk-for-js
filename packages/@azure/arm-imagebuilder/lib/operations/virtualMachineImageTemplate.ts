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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualMachineImageTemplateMappers";
import * as Parameters from "../models/parameters";
import { ImageBuilderClientContext } from "../imageBuilderClientContext";

/** Class representing a VirtualMachineImageTemplate. */
export class VirtualMachineImageTemplate {
  private readonly client: ImageBuilderClientContext;

  /**
   * Create a VirtualMachineImageTemplate.
   * @param {ImageBuilderClientContext} client Reference to the service client.
   */
  constructor(client: ImageBuilderClientContext) {
    this.client = client;
  }

  /**
   * Gets information about the VM image templates associated with the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineImageTemplateListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageTemplateListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ImageTemplateListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageTemplateListResult>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ImageTemplateListResult>, callback?: msRest.ServiceCallback<Models.ImageTemplateListResult>): Promise<Models.VirtualMachineImageTemplateListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualMachineImageTemplateListResponse>;
  }

  /**
   * Gets information about the VM image templates associated with the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineImageTemplateListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageTemplateListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ImageTemplateListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageTemplateListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ImageTemplateListResult>, callback?: msRest.ServiceCallback<Models.ImageTemplateListResult>): Promise<Models.VirtualMachineImageTemplateListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.VirtualMachineImageTemplateListByResourceGroupResponse>;
  }

  /**
   * Create or Update a Virtual Machine Image Template
   * @param parameters Parameters supplied to the Create Image Template
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineImageTemplateCreateOrUpdateResponse>
   */
  createOrUpdate(parameters: Models.ImageTemplate, resourceGroupName: string, imageTemplateName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageTemplateCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(parameters,resourceGroupName,imageTemplateName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.VirtualMachineImageTemplateCreateOrUpdateResponse>;
  }

  /**
   * Update the tags for this Virtual Machine Image Template
   * @param parameters Additional parameters for Image Template update.
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineImageTemplateUpdateResponse>
   */
  update(parameters: Models.ImageTemplateUpdateParameters, resourceGroupName: string, imageTemplateName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageTemplateUpdateResponse>;
  /**
   * @param parameters Additional parameters for Image Template update.
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param callback The callback
   */
  update(parameters: Models.ImageTemplateUpdateParameters, resourceGroupName: string, imageTemplateName: string, callback: msRest.ServiceCallback<Models.ImageTemplate>): void;
  /**
   * @param parameters Additional parameters for Image Template update.
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param options The optional parameters
   * @param callback The callback
   */
  update(parameters: Models.ImageTemplateUpdateParameters, resourceGroupName: string, imageTemplateName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageTemplate>): void;
  update(parameters: Models.ImageTemplateUpdateParameters, resourceGroupName: string, imageTemplateName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ImageTemplate>, callback?: msRest.ServiceCallback<Models.ImageTemplate>): Promise<Models.VirtualMachineImageTemplateUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        parameters,
        resourceGroupName,
        imageTemplateName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.VirtualMachineImageTemplateUpdateResponse>;
  }

  /**
   * Get Information about Virtual Machine Image Template
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineImageTemplateGetResponse>
   */
  get(resourceGroupName: string, imageTemplateName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageTemplateGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param callback The callback
   */
  get(resourceGroupName: string, imageTemplateName: string, callback: msRest.ServiceCallback<Models.ImageTemplate>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, imageTemplateName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageTemplate>): void;
  get(resourceGroupName: string, imageTemplateName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ImageTemplate>, callback?: msRest.ServiceCallback<Models.ImageTemplate>): Promise<Models.VirtualMachineImageTemplateGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        imageTemplateName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualMachineImageTemplateGetResponse>;
  }

  /**
   * Delete Virtual Machine Image Template
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, imageTemplateName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,imageTemplateName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Create artifacts from a existing Image Template
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  run(resourceGroupName: string, imageTemplateName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginRun(resourceGroupName,imageTemplateName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * List all run outputs for the specified Image Template resource
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineImageTemplateListRunOutputsResponse>
   */
  listRunOutputs(resourceGroupName: string, imageTemplateName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageTemplateListRunOutputsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param callback The callback
   */
  listRunOutputs(resourceGroupName: string, imageTemplateName: string, callback: msRest.ServiceCallback<Models.RunOutputCollection>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param options The optional parameters
   * @param callback The callback
   */
  listRunOutputs(resourceGroupName: string, imageTemplateName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunOutputCollection>): void;
  listRunOutputs(resourceGroupName: string, imageTemplateName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RunOutputCollection>, callback?: msRest.ServiceCallback<Models.RunOutputCollection>): Promise<Models.VirtualMachineImageTemplateListRunOutputsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        imageTemplateName,
        options
      },
      listRunOutputsOperationSpec,
      callback) as Promise<Models.VirtualMachineImageTemplateListRunOutputsResponse>;
  }

  /**
   * Get the specified run output for the specified Template resource
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param runOutputName The name of the run output
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineImageTemplateGetRunOutputResponse>
   */
  getRunOutput(resourceGroupName: string, imageTemplateName: string, runOutputName: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageTemplateGetRunOutputResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param runOutputName The name of the run output
   * @param callback The callback
   */
  getRunOutput(resourceGroupName: string, imageTemplateName: string, runOutputName: string, callback: msRest.ServiceCallback<Models.RunOutput>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param runOutputName The name of the run output
   * @param options The optional parameters
   * @param callback The callback
   */
  getRunOutput(resourceGroupName: string, imageTemplateName: string, runOutputName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunOutput>): void;
  getRunOutput(resourceGroupName: string, imageTemplateName: string, runOutputName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RunOutput>, callback?: msRest.ServiceCallback<Models.RunOutput>): Promise<Models.VirtualMachineImageTemplateGetRunOutputResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        imageTemplateName,
        runOutputName,
        options
      },
      getRunOutputOperationSpec,
      callback) as Promise<Models.VirtualMachineImageTemplateGetRunOutputResponse>;
  }

  /**
   * Create or Update a Virtual Machine Image Template
   * @param parameters Parameters supplied to the Create Image Template
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(parameters: Models.ImageTemplate, resourceGroupName: string, imageTemplateName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        parameters,
        resourceGroupName,
        imageTemplateName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete Virtual Machine Image Template
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, imageTemplateName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        imageTemplateName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Create artifacts from a existing Image Template
   * @param resourceGroupName The name of the resource group.
   * @param imageTemplateName The name of the image Template
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginRun(resourceGroupName: string, imageTemplateName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        imageTemplateName,
        options
      },
      beginRunOperationSpec,
      options);
  }

  /**
   * Gets information about the VM image templates associated with the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineImageTemplateListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageTemplateListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ImageTemplateListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageTemplateListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ImageTemplateListResult>, callback?: msRest.ServiceCallback<Models.ImageTemplateListResult>): Promise<Models.VirtualMachineImageTemplateListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualMachineImageTemplateListNextResponse>;
  }

  /**
   * Gets information about the VM image templates associated with the specified resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineImageTemplateListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageTemplateListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ImageTemplateListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ImageTemplateListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ImageTemplateListResult>, callback?: msRest.ServiceCallback<Models.ImageTemplateListResult>): Promise<Models.VirtualMachineImageTemplateListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.VirtualMachineImageTemplateListByResourceGroupNextResponse>;
  }

  /**
   * List all run outputs for the specified Image Template resource
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineImageTemplateListRunOutputsNextResponse>
   */
  listRunOutputsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineImageTemplateListRunOutputsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listRunOutputsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RunOutputCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listRunOutputsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RunOutputCollection>): void;
  listRunOutputsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RunOutputCollection>, callback?: msRest.ServiceCallback<Models.RunOutputCollection>): Promise<Models.VirtualMachineImageTemplateListRunOutputsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listRunOutputsNextOperationSpec,
      callback) as Promise<Models.VirtualMachineImageTemplateListRunOutputsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.VirtualMachineImages/imageTemplates",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ImageTemplateListResult
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ImageTemplateListResult
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.imageTemplateName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ImageTemplateUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ImageTemplate
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.imageTemplateName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ImageTemplate
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const listRunOutputsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/runOutputs",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.imageTemplateName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RunOutputCollection
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const getRunOutputOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/runOutputs/{runOutputName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.imageTemplateName,
    Parameters.runOutputName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RunOutput
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.imageTemplateName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ImageTemplate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ImageTemplate
    },
    201: {
      bodyMapper: Mappers.ImageTemplate
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.imageTemplateName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const beginRunOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VirtualMachineImages/imageTemplates/{imageTemplateName}/run",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.imageTemplateName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ImageTemplateListResult
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ImageTemplateListResult
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};

const listRunOutputsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RunOutputCollection
    },
    default: {
      bodyMapper: Mappers.ApiError
    }
  },
  serializer
};
