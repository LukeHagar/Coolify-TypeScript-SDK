/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { databasesCreateClickhouse } from "../funcs/databasesCreateClickhouse.js";
import { databasesCreateDragonfly } from "../funcs/databasesCreateDragonfly.js";
import { databasesCreateKeydb } from "../funcs/databasesCreateKeydb.js";
import { databasesCreateMariadb } from "../funcs/databasesCreateMariadb.js";
import { databasesCreateMongodb } from "../funcs/databasesCreateMongodb.js";
import { databasesCreateMysql } from "../funcs/databasesCreateMysql.js";
import { databasesCreatePostgresql } from "../funcs/databasesCreatePostgresql.js";
import { databasesCreateRedis } from "../funcs/databasesCreateRedis.js";
import { databasesDelete } from "../funcs/databasesDelete.js";
import { databasesGet } from "../funcs/databasesGet.js";
import { databasesList } from "../funcs/databasesList.js";
import { databasesRestart } from "../funcs/databasesRestart.js";
import { databasesStart } from "../funcs/databasesStart.js";
import { databasesStop } from "../funcs/databasesStop.js";
import { databasesUpdate } from "../funcs/databasesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Databases extends ClientSDK {
  /**
   * List
   *
   * @remarks
   * List all databases.
   */
  async list(
    options?: RequestOptions,
  ): Promise<string> {
    return unwrapAsync(databasesList(
      this,
      options,
    ));
  }

  /**
   * Get
   *
   * @remarks
   * Get database by UUID.
   */
  async get(
    request: operations.GetDatabaseByUuidRequest,
    options?: RequestOptions,
  ): Promise<string> {
    return unwrapAsync(databasesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete
   *
   * @remarks
   * Delete database by UUID.
   */
  async delete(
    request: operations.DeleteDatabaseByUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteDatabaseByUuidResponseBody> {
    return unwrapAsync(databasesDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Update
   *
   * @remarks
   * Update database by UUID.
   */
  async update(
    request: operations.UpdateDatabaseByUuidRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(databasesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Create (PostgreSQL)
   *
   * @remarks
   * Create a new PostgreSQL database.
   */
  async createPostgresql(
    request: operations.CreateDatabasePostgresqlRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(databasesCreatePostgresql(
      this,
      request,
      options,
    ));
  }

  /**
   * Create (Clickhouse)
   *
   * @remarks
   * Create a new Clickhouse database.
   */
  async createClickhouse(
    request: operations.CreateDatabaseClickhouseRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(databasesCreateClickhouse(
      this,
      request,
      options,
    ));
  }

  /**
   * Create (DragonFly)
   *
   * @remarks
   * Create a new DragonFly database.
   */
  async createDragonfly(
    request: operations.CreateDatabaseDragonflyRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(databasesCreateDragonfly(
      this,
      request,
      options,
    ));
  }

  /**
   * Create (Redis)
   *
   * @remarks
   * Create a new Redis database.
   */
  async createRedis(
    request: operations.CreateDatabaseRedisRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(databasesCreateRedis(
      this,
      request,
      options,
    ));
  }

  /**
   * Create (KeyDB)
   *
   * @remarks
   * Create a new KeyDB database.
   */
  async createKeydb(
    request: operations.CreateDatabaseKeydbRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(databasesCreateKeydb(
      this,
      request,
      options,
    ));
  }

  /**
   * Create (MariaDB)
   *
   * @remarks
   * Create a new MariaDB database.
   */
  async createMariadb(
    request: operations.CreateDatabaseMariadbRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(databasesCreateMariadb(
      this,
      request,
      options,
    ));
  }

  /**
   * Create (MySQL)
   *
   * @remarks
   * Create a new MySQL database.
   */
  async createMysql(
    request: operations.CreateDatabaseMysqlRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(databasesCreateMysql(
      this,
      request,
      options,
    ));
  }

  /**
   * Create (MongoDB)
   *
   * @remarks
   * Create a new MongoDB database.
   */
  async createMongodb(
    request: operations.CreateDatabaseMongodbRequestBody,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(databasesCreateMongodb(
      this,
      request,
      options,
    ));
  }

  /**
   * Start
   *
   * @remarks
   * Start database. `Post` request is also accepted.
   */
  async start(
    request: operations.StartDatabaseByUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.StartDatabaseByUuidResponseBody> {
    return unwrapAsync(databasesStart(
      this,
      request,
      options,
    ));
  }

  /**
   * Stop
   *
   * @remarks
   * Stop database. `Post` request is also accepted.
   */
  async stop(
    request: operations.StopDatabaseByUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.StopDatabaseByUuidResponseBody> {
    return unwrapAsync(databasesStop(
      this,
      request,
      options,
    ));
  }

  /**
   * Restart
   *
   * @remarks
   * Restart database. `Post` request is also accepted.
   */
  async restart(
    request: operations.RestartDatabaseByUuidRequest,
    options?: RequestOptions,
  ): Promise<operations.RestartDatabaseByUuidResponseBody> {
    return unwrapAsync(databasesRestart(
      this,
      request,
      options,
    ));
  }
}