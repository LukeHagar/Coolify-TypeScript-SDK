/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Project model
 */
export type ApplicationDeploymentQueue = {
  id?: number | undefined;
  applicationId?: string | undefined;
  deploymentUuid?: string | undefined;
  pullRequestId?: number | undefined;
  forceRebuild?: boolean | undefined;
  commit?: string | undefined;
  status?: string | undefined;
  isWebhook?: boolean | undefined;
  isApi?: boolean | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  logs?: string | undefined;
  currentProcessId?: string | undefined;
  restartOnly?: boolean | undefined;
  gitType?: string | undefined;
  serverId?: number | undefined;
  applicationName?: string | undefined;
  serverName?: string | undefined;
  deploymentUrl?: string | undefined;
  destinationId?: string | undefined;
  onlyThisServer?: boolean | undefined;
  rollback?: boolean | undefined;
  commitMessage?: string | undefined;
};

/** @internal */
export const ApplicationDeploymentQueue$inboundSchema: z.ZodType<
  ApplicationDeploymentQueue,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.number().int().optional(),
  application_id: z.string().optional(),
  deployment_uuid: z.string().optional(),
  pull_request_id: z.number().int().optional(),
  force_rebuild: z.boolean().optional(),
  commit: z.string().optional(),
  status: z.string().optional(),
  is_webhook: z.boolean().optional(),
  is_api: z.boolean().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  logs: z.string().optional(),
  current_process_id: z.string().optional(),
  restart_only: z.boolean().optional(),
  git_type: z.string().optional(),
  server_id: z.number().int().optional(),
  application_name: z.string().optional(),
  server_name: z.string().optional(),
  deployment_url: z.string().optional(),
  destination_id: z.string().optional(),
  only_this_server: z.boolean().optional(),
  rollback: z.boolean().optional(),
  commit_message: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "application_id": "applicationId",
    "deployment_uuid": "deploymentUuid",
    "pull_request_id": "pullRequestId",
    "force_rebuild": "forceRebuild",
    "is_webhook": "isWebhook",
    "is_api": "isApi",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "current_process_id": "currentProcessId",
    "restart_only": "restartOnly",
    "git_type": "gitType",
    "server_id": "serverId",
    "application_name": "applicationName",
    "server_name": "serverName",
    "deployment_url": "deploymentUrl",
    "destination_id": "destinationId",
    "only_this_server": "onlyThisServer",
    "commit_message": "commitMessage",
  });
});

/** @internal */
export type ApplicationDeploymentQueue$Outbound = {
  id?: number | undefined;
  application_id?: string | undefined;
  deployment_uuid?: string | undefined;
  pull_request_id?: number | undefined;
  force_rebuild?: boolean | undefined;
  commit?: string | undefined;
  status?: string | undefined;
  is_webhook?: boolean | undefined;
  is_api?: boolean | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  logs?: string | undefined;
  current_process_id?: string | undefined;
  restart_only?: boolean | undefined;
  git_type?: string | undefined;
  server_id?: number | undefined;
  application_name?: string | undefined;
  server_name?: string | undefined;
  deployment_url?: string | undefined;
  destination_id?: string | undefined;
  only_this_server?: boolean | undefined;
  rollback?: boolean | undefined;
  commit_message?: string | undefined;
};

/** @internal */
export const ApplicationDeploymentQueue$outboundSchema: z.ZodType<
  ApplicationDeploymentQueue$Outbound,
  z.ZodTypeDef,
  ApplicationDeploymentQueue
> = z.object({
  id: z.number().int().optional(),
  applicationId: z.string().optional(),
  deploymentUuid: z.string().optional(),
  pullRequestId: z.number().int().optional(),
  forceRebuild: z.boolean().optional(),
  commit: z.string().optional(),
  status: z.string().optional(),
  isWebhook: z.boolean().optional(),
  isApi: z.boolean().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  logs: z.string().optional(),
  currentProcessId: z.string().optional(),
  restartOnly: z.boolean().optional(),
  gitType: z.string().optional(),
  serverId: z.number().int().optional(),
  applicationName: z.string().optional(),
  serverName: z.string().optional(),
  deploymentUrl: z.string().optional(),
  destinationId: z.string().optional(),
  onlyThisServer: z.boolean().optional(),
  rollback: z.boolean().optional(),
  commitMessage: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    applicationId: "application_id",
    deploymentUuid: "deployment_uuid",
    pullRequestId: "pull_request_id",
    forceRebuild: "force_rebuild",
    isWebhook: "is_webhook",
    isApi: "is_api",
    createdAt: "created_at",
    updatedAt: "updated_at",
    currentProcessId: "current_process_id",
    restartOnly: "restart_only",
    gitType: "git_type",
    serverId: "server_id",
    applicationName: "application_name",
    serverName: "server_name",
    deploymentUrl: "deployment_url",
    destinationId: "destination_id",
    onlyThisServer: "only_this_server",
    commitMessage: "commit_message",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicationDeploymentQueue$ {
  /** @deprecated use `ApplicationDeploymentQueue$inboundSchema` instead. */
  export const inboundSchema = ApplicationDeploymentQueue$inboundSchema;
  /** @deprecated use `ApplicationDeploymentQueue$outboundSchema` instead. */
  export const outboundSchema = ApplicationDeploymentQueue$outboundSchema;
  /** @deprecated use `ApplicationDeploymentQueue$Outbound` instead. */
  export type Outbound = ApplicationDeploymentQueue$Outbound;
}

export function applicationDeploymentQueueToJSON(
  applicationDeploymentQueue: ApplicationDeploymentQueue,
): string {
  return JSON.stringify(
    ApplicationDeploymentQueue$outboundSchema.parse(applicationDeploymentQueue),
  );
}

export function applicationDeploymentQueueFromJSON(
  jsonString: string,
): SafeParseResult<ApplicationDeploymentQueue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApplicationDeploymentQueue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApplicationDeploymentQueue' from JSON`,
  );
}