/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteProjectByUuidRequest = {
  /**
   * UUID of the application.
   */
  uuid: string;
};

/**
 * Project deleted.
 */
export type DeleteProjectByUuidResponseBody = {
  message?: string | undefined;
};

/** @internal */
export const DeleteProjectByUuidRequest$inboundSchema: z.ZodType<
  DeleteProjectByUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
});

/** @internal */
export type DeleteProjectByUuidRequest$Outbound = {
  uuid: string;
};

/** @internal */
export const DeleteProjectByUuidRequest$outboundSchema: z.ZodType<
  DeleteProjectByUuidRequest$Outbound,
  z.ZodTypeDef,
  DeleteProjectByUuidRequest
> = z.object({
  uuid: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteProjectByUuidRequest$ {
  /** @deprecated use `DeleteProjectByUuidRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteProjectByUuidRequest$inboundSchema;
  /** @deprecated use `DeleteProjectByUuidRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteProjectByUuidRequest$outboundSchema;
  /** @deprecated use `DeleteProjectByUuidRequest$Outbound` instead. */
  export type Outbound = DeleteProjectByUuidRequest$Outbound;
}

export function deleteProjectByUuidRequestToJSON(
  deleteProjectByUuidRequest: DeleteProjectByUuidRequest,
): string {
  return JSON.stringify(
    DeleteProjectByUuidRequest$outboundSchema.parse(deleteProjectByUuidRequest),
  );
}

export function deleteProjectByUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteProjectByUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteProjectByUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteProjectByUuidRequest' from JSON`,
  );
}

/** @internal */
export const DeleteProjectByUuidResponseBody$inboundSchema: z.ZodType<
  DeleteProjectByUuidResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string().optional(),
});

/** @internal */
export type DeleteProjectByUuidResponseBody$Outbound = {
  message?: string | undefined;
};

/** @internal */
export const DeleteProjectByUuidResponseBody$outboundSchema: z.ZodType<
  DeleteProjectByUuidResponseBody$Outbound,
  z.ZodTypeDef,
  DeleteProjectByUuidResponseBody
> = z.object({
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteProjectByUuidResponseBody$ {
  /** @deprecated use `DeleteProjectByUuidResponseBody$inboundSchema` instead. */
  export const inboundSchema = DeleteProjectByUuidResponseBody$inboundSchema;
  /** @deprecated use `DeleteProjectByUuidResponseBody$outboundSchema` instead. */
  export const outboundSchema = DeleteProjectByUuidResponseBody$outboundSchema;
  /** @deprecated use `DeleteProjectByUuidResponseBody$Outbound` instead. */
  export type Outbound = DeleteProjectByUuidResponseBody$Outbound;
}

export function deleteProjectByUuidResponseBodyToJSON(
  deleteProjectByUuidResponseBody: DeleteProjectByUuidResponseBody,
): string {
  return JSON.stringify(
    DeleteProjectByUuidResponseBody$outboundSchema.parse(
      deleteProjectByUuidResponseBody,
    ),
  );
}

export function deleteProjectByUuidResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DeleteProjectByUuidResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteProjectByUuidResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteProjectByUuidResponseBody' from JSON`,
  );
}