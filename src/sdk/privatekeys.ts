/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { privateKeysCreate } from "../funcs/privateKeysCreate.js";
import { privateKeysDelete } from "../funcs/privateKeysDelete.js";
import { privateKeysGet } from "../funcs/privateKeysGet.js";
import { privateKeysList } from "../funcs/privateKeysList.js";
import { privateKeysUpdate } from "../funcs/privateKeysUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class PrivateKeys extends ClientSDK {
  /**
   * List
   *
   * @remarks
   * List all private keys.
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<components.PrivateKey>> {
    return unwrapAsync(privateKeysList(
      this,
      options,
    ));
  }

  /**
   * Create
   *
   * @remarks
   * Create a new private key.
   */
  async create(
    request: operations.CreatePrivateKeyRequestBody,
    options?: RequestOptions,
  ): Promise<operations.CreatePrivateKeyResponseBody> {
    return unwrapAsync(privateKeysCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update
   *
   * @remarks
   * Update a private key.
   */
  async update(
    request: operations.UpdatePrivateKeyRequestBody,
    options?: RequestOptions,
  ): Promise<operations.UpdatePrivateKeyResponseBody> {
    return unwrapAsync(privateKeysUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get
   *
   * @remarks
   * Get key by UUID.
   */
  async get(
    request: operations.GetPrivateKeyByUuidRequest,
    options?: RequestOptions,
  ): Promise<components.PrivateKey> {
    return unwrapAsync(privateKeysGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete
   *
   * @remarks
   * Delete a private key.
   */
  async delete(
    request: operations.DeletePrivateKeyByUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.DeletePrivateKeyByUuidResponseBody> {
    return unwrapAsync(privateKeysDelete(
      this,
      request,
      options,
    ));
  }
}
