/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RestartServiceByUuidRequest = {
  /**
   * UUID of the service.
   */
  uuid: string;
};

/**
 * Restart service.
 */
export type RestartServiceByUuidResponseBody = {
  message?: string | undefined;
};

/** @internal */
export const RestartServiceByUuidRequest$inboundSchema: z.ZodType<
  RestartServiceByUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type RestartServiceByUuidRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const RestartServiceByUuidRequest$outboundSchema: z.ZodType<
  RestartServiceByUuidRequest$Outbound,
  z.ZodTypeDef,
  RestartServiceByUuidRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RestartServiceByUuidRequest$ {
  /** @deprecated use `RestartServiceByUuidRequest$inboundSchema` instead. */
  export const inboundSchema = RestartServiceByUuidRequest$inboundSchema;
  /** @deprecated use `RestartServiceByUuidRequest$outboundSchema` instead. */
  export const outboundSchema = RestartServiceByUuidRequest$outboundSchema;
  /** @deprecated use `RestartServiceByUuidRequest$Outbound` instead. */
  export type Outbound = RestartServiceByUuidRequest$Outbound;
}

export function restartServiceByUuidRequestToJSON(
  restartServiceByUuidRequest: RestartServiceByUuidRequest,
): string {
  return JSON.stringify(
    RestartServiceByUuidRequest$outboundSchema.parse(
      restartServiceByUuidRequest,
    ),
  );
}

export function restartServiceByUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<RestartServiceByUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RestartServiceByUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RestartServiceByUuidRequest' from JSON`,
  );
}

/** @internal */
export const RestartServiceByUuidResponseBody$inboundSchema: z.ZodType<
  RestartServiceByUuidResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string().optional(),
});

/** @internal */
export type RestartServiceByUuidResponseBody$Outbound = {
  message?: string | undefined;
};

/** @internal */
export const RestartServiceByUuidResponseBody$outboundSchema: z.ZodType<
  RestartServiceByUuidResponseBody$Outbound,
  z.ZodTypeDef,
  RestartServiceByUuidResponseBody
> = z.object({
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RestartServiceByUuidResponseBody$ {
  /** @deprecated use `RestartServiceByUuidResponseBody$inboundSchema` instead. */
  export const inboundSchema = RestartServiceByUuidResponseBody$inboundSchema;
  /** @deprecated use `RestartServiceByUuidResponseBody$outboundSchema` instead. */
  export const outboundSchema = RestartServiceByUuidResponseBody$outboundSchema;
  /** @deprecated use `RestartServiceByUuidResponseBody$Outbound` instead. */
  export type Outbound = RestartServiceByUuidResponseBody$Outbound;
}

export function restartServiceByUuidResponseBodyToJSON(
  restartServiceByUuidResponseBody: RestartServiceByUuidResponseBody,
): string {
  return JSON.stringify(
    RestartServiceByUuidResponseBody$outboundSchema.parse(
      restartServiceByUuidResponseBody,
    ),
  );
}

export function restartServiceByUuidResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<RestartServiceByUuidResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RestartServiceByUuidResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RestartServiceByUuidResponseBody' from JSON`,
  );
}