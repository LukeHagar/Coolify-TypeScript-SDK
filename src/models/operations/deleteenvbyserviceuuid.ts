/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteEnvByServiceUuidRequest = {
  /**
   * UUID of the service.
   */
  uuid: string;
  /**
   * UUID of the environment variable.
   */
  envUuid: string;
};

/**
 * Environment variable deleted.
 */
export type DeleteEnvByServiceUuidResponseBody = {
  message?: string | undefined;
};

/** @internal */
export const DeleteEnvByServiceUuidRequest$inboundSchema: z.ZodType<
  DeleteEnvByServiceUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  env_uuid: z.string(),
}).transform((v) => {
  return remap$(v, {
    "env_uuid": "envUuid",
  });
});

/** @internal */
export type DeleteEnvByServiceUuidRequest$Outbound = {
  uuid: string;
  env_uuid: string;
};

/** @internal */
export const DeleteEnvByServiceUuidRequest$outboundSchema: z.ZodType<
  DeleteEnvByServiceUuidRequest$Outbound,
  z.ZodTypeDef,
  DeleteEnvByServiceUuidRequest
> = z.object({
  uuid: z.string(),
  envUuid: z.string(),
}).transform((v) => {
  return remap$(v, {
    envUuid: "env_uuid",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteEnvByServiceUuidRequest$ {
  /** @deprecated use `DeleteEnvByServiceUuidRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteEnvByServiceUuidRequest$inboundSchema;
  /** @deprecated use `DeleteEnvByServiceUuidRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteEnvByServiceUuidRequest$outboundSchema;
  /** @deprecated use `DeleteEnvByServiceUuidRequest$Outbound` instead. */
  export type Outbound = DeleteEnvByServiceUuidRequest$Outbound;
}

export function deleteEnvByServiceUuidRequestToJSON(
  deleteEnvByServiceUuidRequest: DeleteEnvByServiceUuidRequest,
): string {
  return JSON.stringify(
    DeleteEnvByServiceUuidRequest$outboundSchema.parse(
      deleteEnvByServiceUuidRequest,
    ),
  );
}

export function deleteEnvByServiceUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteEnvByServiceUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteEnvByServiceUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteEnvByServiceUuidRequest' from JSON`,
  );
}

/** @internal */
export const DeleteEnvByServiceUuidResponseBody$inboundSchema: z.ZodType<
  DeleteEnvByServiceUuidResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string().optional(),
});

/** @internal */
export type DeleteEnvByServiceUuidResponseBody$Outbound = {
  message?: string | undefined;
};

/** @internal */
export const DeleteEnvByServiceUuidResponseBody$outboundSchema: z.ZodType<
  DeleteEnvByServiceUuidResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteEnvByServiceUuidResponseBody
> = z.object({
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteEnvByServiceUuidResponseBody$ {
  /** @deprecated use `DeleteEnvByServiceUuidResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteEnvByServiceUuidResponseBody$inboundSchema;
  /** @deprecated use `DeleteEnvByServiceUuidResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    DeleteEnvByServiceUuidResponseBody$outboundSchema;
  /** @deprecated use `DeleteEnvByServiceUuidResponseBody$Outbound` instead. */
  export type Outbound = DeleteEnvByServiceUuidResponseBody$Outbound;
}

export function deleteEnvByServiceUuidResponseBodyToJSON(
  deleteEnvByServiceUuidResponseBody: DeleteEnvByServiceUuidResponseBody,
): string {
  return JSON.stringify(
    DeleteEnvByServiceUuidResponseBody$outboundSchema.parse(
      deleteEnvByServiceUuidResponseBody,
    ),
  );
}

export function deleteEnvByServiceUuidResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteEnvByServiceUuidResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteEnvByServiceUuidResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteEnvByServiceUuidResponseBody' from JSON`,
  );
}