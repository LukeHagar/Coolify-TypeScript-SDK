/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Database data
 */
export type CreateDatabaseRedisRequestBody = {
  /**
   * UUID of the server
   */
  serverUuid: string;
  /**
   * UUID of the project
   */
  projectUuid: string;
  /**
   * Name of the environment
   */
  environmentName: string;
  /**
   * UUID of the destination if the server has multiple destinations
   */
  destinationUuid?: string | undefined;
  /**
   * Redis password
   */
  redisPassword?: string | undefined;
  /**
   * Redis conf
   */
  redisConf?: string | undefined;
  /**
   * Name of the database
   */
  name?: string | undefined;
  /**
   * Description of the database
   */
  description?: string | undefined;
  /**
   * Docker Image of the database
   */
  image?: string | undefined;
  /**
   * Is the database public?
   */
  isPublic?: boolean | undefined;
  /**
   * Public port of the database
   */
  publicPort?: number | undefined;
  /**
   * Memory limit of the database
   */
  limitsMemory?: string | undefined;
  /**
   * Memory swap limit of the database
   */
  limitsMemorySwap?: string | undefined;
  /**
   * Memory swappiness of the database
   */
  limitsMemorySwappiness?: number | undefined;
  /**
   * Memory reservation of the database
   */
  limitsMemoryReservation?: string | undefined;
  /**
   * CPU limit of the database
   */
  limitsCpus?: string | undefined;
  /**
   * CPU set of the database
   */
  limitsCpuset?: string | undefined;
  /**
   * CPU shares of the database
   */
  limitsCpuShares?: number | undefined;
  /**
   * Instant deploy the database
   */
  instantDeploy?: boolean | undefined;
};

/** @internal */
export const CreateDatabaseRedisRequestBody$inboundSchema: z.ZodType<
  CreateDatabaseRedisRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  server_uuid: z.string(),
  project_uuid: z.string(),
  environment_name: z.string(),
  destination_uuid: z.string().optional(),
  redis_password: z.string().optional(),
  redis_conf: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  is_public: z.boolean().optional(),
  public_port: z.number().int().optional(),
  limits_memory: z.string().optional(),
  limits_memory_swap: z.string().optional(),
  limits_memory_swappiness: z.number().int().optional(),
  limits_memory_reservation: z.string().optional(),
  limits_cpus: z.string().optional(),
  limits_cpuset: z.string().optional(),
  limits_cpu_shares: z.number().int().optional(),
  instant_deploy: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "server_uuid": "serverUuid",
    "project_uuid": "projectUuid",
    "environment_name": "environmentName",
    "destination_uuid": "destinationUuid",
    "redis_password": "redisPassword",
    "redis_conf": "redisConf",
    "is_public": "isPublic",
    "public_port": "publicPort",
    "limits_memory": "limitsMemory",
    "limits_memory_swap": "limitsMemorySwap",
    "limits_memory_swappiness": "limitsMemorySwappiness",
    "limits_memory_reservation": "limitsMemoryReservation",
    "limits_cpus": "limitsCpus",
    "limits_cpuset": "limitsCpuset",
    "limits_cpu_shares": "limitsCpuShares",
    "instant_deploy": "instantDeploy",
  });
});

/** @internal */
export type CreateDatabaseRedisRequestBody$Outbound = {
  server_uuid: string;
  project_uuid: string;
  environment_name: string;
  destination_uuid?: string | undefined;
  redis_password?: string | undefined;
  redis_conf?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  image?: string | undefined;
  is_public?: boolean | undefined;
  public_port?: number | undefined;
  limits_memory?: string | undefined;
  limits_memory_swap?: string | undefined;
  limits_memory_swappiness?: number | undefined;
  limits_memory_reservation?: string | undefined;
  limits_cpus?: string | undefined;
  limits_cpuset?: string | undefined;
  limits_cpu_shares?: number | undefined;
  instant_deploy?: boolean | undefined;
};

/** @internal */
export const CreateDatabaseRedisRequestBody$outboundSchema: z.ZodType<
  CreateDatabaseRedisRequestBody$Outbound,
  z.ZodTypeDef,
  CreateDatabaseRedisRequestBody
> = z.object({
  serverUuid: z.string(),
  projectUuid: z.string(),
  environmentName: z.string(),
  destinationUuid: z.string().optional(),
  redisPassword: z.string().optional(),
  redisConf: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  isPublic: z.boolean().optional(),
  publicPort: z.number().int().optional(),
  limitsMemory: z.string().optional(),
  limitsMemorySwap: z.string().optional(),
  limitsMemorySwappiness: z.number().int().optional(),
  limitsMemoryReservation: z.string().optional(),
  limitsCpus: z.string().optional(),
  limitsCpuset: z.string().optional(),
  limitsCpuShares: z.number().int().optional(),
  instantDeploy: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    serverUuid: "server_uuid",
    projectUuid: "project_uuid",
    environmentName: "environment_name",
    destinationUuid: "destination_uuid",
    redisPassword: "redis_password",
    redisConf: "redis_conf",
    isPublic: "is_public",
    publicPort: "public_port",
    limitsMemory: "limits_memory",
    limitsMemorySwap: "limits_memory_swap",
    limitsMemorySwappiness: "limits_memory_swappiness",
    limitsMemoryReservation: "limits_memory_reservation",
    limitsCpus: "limits_cpus",
    limitsCpuset: "limits_cpuset",
    limitsCpuShares: "limits_cpu_shares",
    instantDeploy: "instant_deploy",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateDatabaseRedisRequestBody$ {
  /** @deprecated use `CreateDatabaseRedisRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateDatabaseRedisRequestBody$inboundSchema;
  /** @deprecated use `CreateDatabaseRedisRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateDatabaseRedisRequestBody$outboundSchema;
  /** @deprecated use `CreateDatabaseRedisRequestBody$Outbound` instead. */
  export type Outbound = CreateDatabaseRedisRequestBody$Outbound;
}

export function createDatabaseRedisRequestBodyToJSON(
  createDatabaseRedisRequestBody: CreateDatabaseRedisRequestBody,
): string {
  return JSON.stringify(
    CreateDatabaseRedisRequestBody$outboundSchema.parse(
      createDatabaseRedisRequestBody,
    ),
  );
}

export function createDatabaseRedisRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateDatabaseRedisRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDatabaseRedisRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDatabaseRedisRequestBody' from JSON`,
  );
}