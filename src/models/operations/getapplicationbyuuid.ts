/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetApplicationByUuidRequest = {
  /**
   * UUID of the application.
   */
  uuid: string;
};

/** @internal */
export const GetApplicationByUuidRequest$inboundSchema: z.ZodType<
  GetApplicationByUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type GetApplicationByUuidRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const GetApplicationByUuidRequest$outboundSchema: z.ZodType<
  GetApplicationByUuidRequest$Outbound,
  z.ZodTypeDef,
  GetApplicationByUuidRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApplicationByUuidRequest$ {
  /** @deprecated use `GetApplicationByUuidRequest$inboundSchema` instead. */
  export const inboundSchema = GetApplicationByUuidRequest$inboundSchema;
  /** @deprecated use `GetApplicationByUuidRequest$outboundSchema` instead. */
  export const outboundSchema = GetApplicationByUuidRequest$outboundSchema;
  /** @deprecated use `GetApplicationByUuidRequest$Outbound` instead. */
  export type Outbound = GetApplicationByUuidRequest$Outbound;
}

export function getApplicationByUuidRequestToJSON(
  getApplicationByUuidRequest: GetApplicationByUuidRequest,
): string {
  return JSON.stringify(
    GetApplicationByUuidRequest$outboundSchema.parse(
      getApplicationByUuidRequest,
    ),
  );
}

export function getApplicationByUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetApplicationByUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetApplicationByUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetApplicationByUuidRequest' from JSON`,
  );
}
