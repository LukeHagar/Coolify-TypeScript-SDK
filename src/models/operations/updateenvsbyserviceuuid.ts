/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateEnvsByServiceUuidData = {
  /**
   * The key of the environment variable.
   */
  key?: string | undefined;
  /**
   * The value of the environment variable.
   */
  value?: string | undefined;
  /**
   * The flag to indicate if the environment variable is used in preview deployments.
   */
  isPreview?: boolean | undefined;
  /**
   * The flag to indicate if the environment variable is used in build time.
   */
  isBuildTime?: boolean | undefined;
  /**
   * The flag to indicate if the environment variable is a literal, nothing espaced.
   */
  isLiteral?: boolean | undefined;
  /**
   * The flag to indicate if the environment variable is multiline.
   */
  isMultiline?: boolean | undefined;
  /**
   * The flag to indicate if the environment variable's value is shown on the UI.
   */
  isShownOnce?: boolean | undefined;
};

/**
 * Bulk envs updated.
 */
export type UpdateEnvsByServiceUuidRequestBody = {
  data: Array<UpdateEnvsByServiceUuidData>;
};

export type UpdateEnvsByServiceUuidRequest = {
  /**
   * UUID of the service.
   */
  uuid: string;
  /**
   * Bulk envs updated.
   */
  requestBody: UpdateEnvsByServiceUuidRequestBody;
};

/**
 * Environment variables updated.
 */
export type UpdateEnvsByServiceUuidResponseBody = {
  message?: string | undefined;
};

/** @internal */
export const UpdateEnvsByServiceUuidData$inboundSchema: z.ZodType<
  UpdateEnvsByServiceUuidData,
  z.ZodTypeDef,
  unknown
> = z.object({
  key: z.string().optional(),
  value: z.string().optional(),
  is_preview: z.boolean().optional(),
  is_build_time: z.boolean().optional(),
  is_literal: z.boolean().optional(),
  is_multiline: z.boolean().optional(),
  is_shown_once: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "is_preview": "isPreview",
    "is_build_time": "isBuildTime",
    "is_literal": "isLiteral",
    "is_multiline": "isMultiline",
    "is_shown_once": "isShownOnce",
  });
});

/** @internal */
export type UpdateEnvsByServiceUuidData$Outbound = {
  key?: string | undefined;
  value?: string | undefined;
  is_preview?: boolean | undefined;
  is_build_time?: boolean | undefined;
  is_literal?: boolean | undefined;
  is_multiline?: boolean | undefined;
  is_shown_once?: boolean | undefined;
};

/** @internal */
export const UpdateEnvsByServiceUuidData$outboundSchema: z.ZodType<
  UpdateEnvsByServiceUuidData$Outbound,
  z.ZodTypeDef,
  UpdateEnvsByServiceUuidData
> = z.object({
  key: z.string().optional(),
  value: z.string().optional(),
  isPreview: z.boolean().optional(),
  isBuildTime: z.boolean().optional(),
  isLiteral: z.boolean().optional(),
  isMultiline: z.boolean().optional(),
  isShownOnce: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    isPreview: "is_preview",
    isBuildTime: "is_build_time",
    isLiteral: "is_literal",
    isMultiline: "is_multiline",
    isShownOnce: "is_shown_once",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEnvsByServiceUuidData$ {
  /** @deprecated use `UpdateEnvsByServiceUuidData$inboundSchema` instead. */
  export const inboundSchema = UpdateEnvsByServiceUuidData$inboundSchema;
  /** @deprecated use `UpdateEnvsByServiceUuidData$outboundSchema` instead. */
  export const outboundSchema = UpdateEnvsByServiceUuidData$outboundSchema;
  /** @deprecated use `UpdateEnvsByServiceUuidData$Outbound` instead. */
  export type Outbound = UpdateEnvsByServiceUuidData$Outbound;
}

export function updateEnvsByServiceUuidDataToJSON(
  updateEnvsByServiceUuidData: UpdateEnvsByServiceUuidData,
): string {
  return JSON.stringify(
    UpdateEnvsByServiceUuidData$outboundSchema.parse(
      updateEnvsByServiceUuidData,
    ),
  );
}

export function updateEnvsByServiceUuidDataFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEnvsByServiceUuidData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateEnvsByServiceUuidData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEnvsByServiceUuidData' from JSON`,
  );
}

/** @internal */
export const UpdateEnvsByServiceUuidRequestBody$inboundSchema: z.ZodType<
  UpdateEnvsByServiceUuidRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(z.lazy(() => UpdateEnvsByServiceUuidData$inboundSchema)),
});

/** @internal */
export type UpdateEnvsByServiceUuidRequestBody$Outbound = {
  data: Array<UpdateEnvsByServiceUuidData$Outbound>;
};

/** @internal */
export const UpdateEnvsByServiceUuidRequestBody$outboundSchema: z.ZodType<
  UpdateEnvsByServiceUuidRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateEnvsByServiceUuidRequestBody
> = z.object({
  data: z.array(z.lazy(() => UpdateEnvsByServiceUuidData$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEnvsByServiceUuidRequestBody$ {
  /** @deprecated use `UpdateEnvsByServiceUuidRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateEnvsByServiceUuidRequestBody$inboundSchema;
  /** @deprecated use `UpdateEnvsByServiceUuidRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    UpdateEnvsByServiceUuidRequestBody$outboundSchema;
  /** @deprecated use `UpdateEnvsByServiceUuidRequestBody$Outbound` instead. */
  export type Outbound = UpdateEnvsByServiceUuidRequestBody$Outbound;
}

export function updateEnvsByServiceUuidRequestBodyToJSON(
  updateEnvsByServiceUuidRequestBody: UpdateEnvsByServiceUuidRequestBody,
): string {
  return JSON.stringify(
    UpdateEnvsByServiceUuidRequestBody$outboundSchema.parse(
      updateEnvsByServiceUuidRequestBody,
    ),
  );
}

export function updateEnvsByServiceUuidRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEnvsByServiceUuidRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateEnvsByServiceUuidRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEnvsByServiceUuidRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateEnvsByServiceUuidRequest$inboundSchema: z.ZodType<
  UpdateEnvsByServiceUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  RequestBody: z.lazy(() => UpdateEnvsByServiceUuidRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateEnvsByServiceUuidRequest$Outbound = {
  uuid: string;
  RequestBody: UpdateEnvsByServiceUuidRequestBody$Outbound;
};

/** @internal */
export const UpdateEnvsByServiceUuidRequest$outboundSchema: z.ZodType<
  UpdateEnvsByServiceUuidRequest$Outbound,
  z.ZodTypeDef,
  UpdateEnvsByServiceUuidRequest
> = z.object({
  uuid: z.string(),
  requestBody: z.lazy(() => UpdateEnvsByServiceUuidRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEnvsByServiceUuidRequest$ {
  /** @deprecated use `UpdateEnvsByServiceUuidRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateEnvsByServiceUuidRequest$inboundSchema;
  /** @deprecated use `UpdateEnvsByServiceUuidRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateEnvsByServiceUuidRequest$outboundSchema;
  /** @deprecated use `UpdateEnvsByServiceUuidRequest$Outbound` instead. */
  export type Outbound = UpdateEnvsByServiceUuidRequest$Outbound;
}

export function updateEnvsByServiceUuidRequestToJSON(
  updateEnvsByServiceUuidRequest: UpdateEnvsByServiceUuidRequest,
): string {
  return JSON.stringify(
    UpdateEnvsByServiceUuidRequest$outboundSchema.parse(
      updateEnvsByServiceUuidRequest,
    ),
  );
}

export function updateEnvsByServiceUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEnvsByServiceUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateEnvsByServiceUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEnvsByServiceUuidRequest' from JSON`,
  );
}

/** @internal */
export const UpdateEnvsByServiceUuidResponseBody$inboundSchema: z.ZodType<
  UpdateEnvsByServiceUuidResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string().optional(),
});

/** @internal */
export type UpdateEnvsByServiceUuidResponseBody$Outbound = {
  message?: string | undefined;
};

/** @internal */
export const UpdateEnvsByServiceUuidResponseBody$outboundSchema: z.ZodType<
  UpdateEnvsByServiceUuidResponseBody$Outbound,
  z.ZodTypeDef,
  UpdateEnvsByServiceUuidResponseBody
> = z.object({
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateEnvsByServiceUuidResponseBody$ {
  /** @deprecated use `UpdateEnvsByServiceUuidResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    UpdateEnvsByServiceUuidResponseBody$inboundSchema;
  /** @deprecated use `UpdateEnvsByServiceUuidResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    UpdateEnvsByServiceUuidResponseBody$outboundSchema;
  /** @deprecated use `UpdateEnvsByServiceUuidResponseBody$Outbound` instead. */
  export type Outbound = UpdateEnvsByServiceUuidResponseBody$Outbound;
}

export function updateEnvsByServiceUuidResponseBodyToJSON(
  updateEnvsByServiceUuidResponseBody: UpdateEnvsByServiceUuidResponseBody,
): string {
  return JSON.stringify(
    UpdateEnvsByServiceUuidResponseBody$outboundSchema.parse(
      updateEnvsByServiceUuidResponseBody,
    ),
  );
}

export function updateEnvsByServiceUuidResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateEnvsByServiceUuidResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      UpdateEnvsByServiceUuidResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateEnvsByServiceUuidResponseBody' from JSON`,
  );
}
