/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { serversCreate } from "../funcs/serversCreate.js";
import { serversDelete } from "../funcs/serversDelete.js";
import { serversGet } from "../funcs/serversGet.js";
import { serversGetDomains } from "../funcs/serversGetDomains.js";
import { serversGetResources } from "../funcs/serversGetResources.js";
import { serversList } from "../funcs/serversList.js";
import { serversUpdate } from "../funcs/serversUpdate.js";
import { serversValidate } from "../funcs/serversValidate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Servers extends ClientSDK {
  /**
   * List
   *
   * @remarks
   * List all servers.
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<components.Server>> {
    return unwrapAsync(serversList(
      this,
      options,
    ));
  }

  /**
   * Create
   *
   * @remarks
   * Create Server.
   */
  async create(
    request: operations.CreateServerRequestBody,
    options?: RequestOptions,
  ): Promise<operations.CreateServerResponseBody> {
    return unwrapAsync(serversCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get
   *
   * @remarks
   * Get server by UUID.
   */
  async get(
    request: operations.GetServerByUuidRequest,
    options?: RequestOptions,
  ): Promise<components.Server> {
    return unwrapAsync(serversGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete
   *
   * @remarks
   * Delete server by UUID.
   */
  async delete(
    request: operations.DeleteServerByUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteServerByUuidResponseBody> {
    return unwrapAsync(serversDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Update
   *
   * @remarks
   * Update Server.
   */
  async update(
    request: operations.UpdateServerByUuidRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Server>> {
    return unwrapAsync(serversUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Resources
   *
   * @remarks
   * Get resources by server.
   */
  async getResources(
    request: operations.GetResourcesByServerUuidRequest,
    options?: RequestOptions,
  ): Promise<Array<operations.ResponseBody>> {
    return unwrapAsync(serversGetResources(
      this,
      request,
      options,
    ));
  }

  /**
   * Domains
   *
   * @remarks
   * Get domains by server.
   */
  async getDomains(
    request: operations.GetDomainsByServerUuidRequest,
    options?: RequestOptions,
  ): Promise<Array<operations.GetDomainsByServerUuidResponseBody>> {
    return unwrapAsync(serversGetDomains(
      this,
      request,
      options,
    ));
  }

  /**
   * Validate
   *
   * @remarks
   * Validate server by UUID.
   */
  async validate(
    request: operations.ValidateServerByUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.ValidateServerByUuidResponseBody> {
    return unwrapAsync(serversValidate(
      this,
      request,
      options,
    ));
  }
}