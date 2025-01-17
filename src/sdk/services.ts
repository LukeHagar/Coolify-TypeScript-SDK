/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { servicesCreate } from "../funcs/servicesCreate.js";
import { servicesCreateEnv } from "../funcs/servicesCreateEnv.js";
import { servicesDelete } from "../funcs/servicesDelete.js";
import { servicesDeleteEnv } from "../funcs/servicesDeleteEnv.js";
import { servicesGet } from "../funcs/servicesGet.js";
import { servicesList } from "../funcs/servicesList.js";
import { servicesListEnvs } from "../funcs/servicesListEnvs.js";
import { servicesRestart } from "../funcs/servicesRestart.js";
import { servicesStart } from "../funcs/servicesStart.js";
import { servicesStop } from "../funcs/servicesStop.js";
import { servicesUpdateEnv } from "../funcs/servicesUpdateEnv.js";
import { servicesUpdateEnvsBulk } from "../funcs/servicesUpdateEnvsBulk.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Services extends ClientSDK {
  /**
   * List
   *
   * @remarks
   * List all services.
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<components.Service>> {
    return unwrapAsync(servicesList(
      this,
      options,
    ));
  }

  /**
   * Create
   *
   * @remarks
   * Create a one-click service
   */
  async create(
    request: operations.CreateServiceRequestBody,
    options?: RequestOptions,
  ): Promise<operations.CreateServiceResponseBody> {
    return unwrapAsync(servicesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get
   *
   * @remarks
   * Get service by UUID.
   */
  async get(
    request: operations.GetServiceByUuidRequest,
    options?: RequestOptions,
  ): Promise<components.Service> {
    return unwrapAsync(servicesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete
   *
   * @remarks
   * Delete service by UUID.
   */
  async delete(
    request: operations.DeleteServiceByUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteServiceByUuidResponseBody> {
    return unwrapAsync(servicesDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * List Envs
   *
   * @remarks
   * List all envs by service UUID.
   */
  async listEnvs(
    request: operations.ListEnvsByServiceUuidRequest,
    options?: RequestOptions,
  ): Promise<Array<components.EnvironmentVariable>> {
    return unwrapAsync(servicesListEnvs(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Env
   *
   * @remarks
   * Create env by service UUID.
   */
  async createEnv(
    request: operations.CreateEnvByServiceUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateEnvByServiceUuidResponseBody> {
    return unwrapAsync(servicesCreateEnv(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Env
   *
   * @remarks
   * Update env by service UUID.
   */
  async updateEnv(
    request: operations.UpdateEnvByServiceUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateEnvByServiceUuidResponseBody> {
    return unwrapAsync(servicesUpdateEnv(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Envs (Bulk)
   *
   * @remarks
   * Update multiple envs by service UUID.
   */
  async updateEnvsBulk(
    request: operations.UpdateEnvsByServiceUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateEnvsByServiceUuidResponseBody> {
    return unwrapAsync(servicesUpdateEnvsBulk(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Env
   *
   * @remarks
   * Delete env by UUID.
   */
  async deleteEnv(
    request: operations.DeleteEnvByServiceUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteEnvByServiceUuidResponseBody> {
    return unwrapAsync(servicesDeleteEnv(
      this,
      request,
      options,
    ));
  }

  /**
   * Start
   *
   * @remarks
   * Start service. `Post` request is also accepted.
   */
  async start(
    request: operations.StartServiceByUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.StartServiceByUuidResponseBody> {
    return unwrapAsync(servicesStart(
      this,
      request,
      options,
    ));
  }

  /**
   * Stop
   *
   * @remarks
   * Stop service. `Post` request is also accepted.
   */
  async stop(
    request: operations.StopServiceByUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.StopServiceByUuidResponseBody> {
    return unwrapAsync(servicesStop(
      this,
      request,
      options,
    ));
  }

  /**
   * Restart
   *
   * @remarks
   * Restart service. `Post` request is also accepted.
   */
  async restart(
    request: operations.RestartServiceByUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.RestartServiceByUuidResponseBody> {
    return unwrapAsync(servicesRestart(
      this,
      request,
      options,
    ));
  }
}
