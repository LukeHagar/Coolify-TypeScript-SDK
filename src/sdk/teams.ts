/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { teamsGet } from "../funcs/teamsGet.js";
import { teamsGetCurrent } from "../funcs/teamsGetCurrent.js";
import { teamsGetCurrentMembers } from "../funcs/teamsGetCurrentMembers.js";
import { teamsGetMembers } from "../funcs/teamsGetMembers.js";
import { teamsList } from "../funcs/teamsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Teams extends ClientSDK {
  /**
   * List
   *
   * @remarks
   * Get all teams.
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<components.Team>> {
    return unwrapAsync(teamsList(
      this,
      options,
    ));
  }

  /**
   * Get
   *
   * @remarks
   * Get team by TeamId.
   */
  async get(
    request: operations.GetTeamByIdRequest,
    options?: RequestOptions,
  ): Promise<components.Team> {
    return unwrapAsync(teamsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Members
   *
   * @remarks
   * Get members by TeamId.
   */
  async getMembers(
    request: operations.GetMembersByTeamIdRequest,
    options?: RequestOptions,
  ): Promise<Array<components.User>> {
    return unwrapAsync(teamsGetMembers(
      this,
      request,
      options,
    ));
  }

  /**
   * Authenticated Team
   *
   * @remarks
   * Get currently authenticated team.
   */
  async getCurrent(
    options?: RequestOptions,
  ): Promise<components.Team> {
    return unwrapAsync(teamsGetCurrent(
      this,
      options,
    ));
  }

  /**
   * Authenticated Team Members
   *
   * @remarks
   * Get currently authenticated team members.
   */
  async getCurrentMembers(
    options?: RequestOptions,
  ): Promise<Array<components.User>> {
    return unwrapAsync(teamsGetCurrentMembers(
      this,
      options,
    ));
  }
}