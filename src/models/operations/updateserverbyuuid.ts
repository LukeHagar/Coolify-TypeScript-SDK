/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The proxy type.
 */
export const UpdateServerByUuidProxyType = {
  Traefik: "traefik",
  Caddy: "caddy",
  None: "none",
} as const;
/**
 * The proxy type.
 */
export type UpdateServerByUuidProxyType = ClosedEnum<
  typeof UpdateServerByUuidProxyType
>;

/**
 * Server updated.
 */
export type UpdateServerByUuidRequestBody = {
  /**
   * The name of the server.
   */
  name?: string | undefined;
  /**
   * The description of the server.
   */
  description?: string | undefined;
  /**
   * The IP of the server.
   */
  ip?: string | undefined;
  /**
   * The port of the server.
   */
  port?: number | undefined;
  /**
   * The user of the server.
   */
  user?: string | undefined;
  /**
   * The UUID of the private key.
   */
  privateKeyUuid?: string | undefined;
  /**
   * Is build server.
   */
  isBuildServer?: boolean | undefined;
  /**
   * Instant validate.
   */
  instantValidate?: boolean | undefined;
  /**
   * The proxy type.
   */
  proxyType?: UpdateServerByUuidProxyType | undefined;
};

export type UpdateServerByUuidRequest = {
  /**
   * Server's UUID
   */
  uuid: string;
  /**
   * Server updated.
   */
  requestBody: UpdateServerByUuidRequestBody;
};

/** @internal */
export const UpdateServerByUuidProxyType$inboundSchema: z.ZodNativeEnum<
  typeof UpdateServerByUuidProxyType
> = z.nativeEnum(UpdateServerByUuidProxyType);

/** @internal */
export const UpdateServerByUuidProxyType$outboundSchema: z.ZodNativeEnum<
  typeof UpdateServerByUuidProxyType
> = UpdateServerByUuidProxyType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateServerByUuidProxyType$ {
  /** @deprecated use `UpdateServerByUuidProxyType$inboundSchema` instead. */
  export const inboundSchema = UpdateServerByUuidProxyType$inboundSchema;
  /** @deprecated use `UpdateServerByUuidProxyType$outboundSchema` instead. */
  export const outboundSchema = UpdateServerByUuidProxyType$outboundSchema;
}

/** @internal */
export const UpdateServerByUuidRequestBody$inboundSchema: z.ZodType<
  UpdateServerByUuidRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  ip: z.string().optional(),
  port: z.number().int().optional(),
  user: z.string().optional(),
  private_key_uuid: z.string().optional(),
  is_build_server: z.boolean().optional(),
  instant_validate: z.boolean().optional(),
  proxy_type: UpdateServerByUuidProxyType$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "private_key_uuid": "privateKeyUuid",
    "is_build_server": "isBuildServer",
    "instant_validate": "instantValidate",
    "proxy_type": "proxyType",
  });
});

/** @internal */
export type UpdateServerByUuidRequestBody$Outbound = {
  name?: string | undefined;
  description?: string | undefined;
  ip?: string | undefined;
  port?: number | undefined;
  user?: string | undefined;
  private_key_uuid?: string | undefined;
  is_build_server?: boolean | undefined;
  instant_validate?: boolean | undefined;
  proxy_type?: string | undefined;
};

/** @internal */
export const UpdateServerByUuidRequestBody$outboundSchema: z.ZodType<
  UpdateServerByUuidRequestBody$Outbound,
  z.ZodTypeDef,
  UpdateServerByUuidRequestBody
> = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  ip: z.string().optional(),
  port: z.number().int().optional(),
  user: z.string().optional(),
  privateKeyUuid: z.string().optional(),
  isBuildServer: z.boolean().optional(),
  instantValidate: z.boolean().optional(),
  proxyType: UpdateServerByUuidProxyType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    privateKeyUuid: "private_key_uuid",
    isBuildServer: "is_build_server",
    instantValidate: "instant_validate",
    proxyType: "proxy_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateServerByUuidRequestBody$ {
  /** @deprecated use `UpdateServerByUuidRequestBody$inboundSchema` instead. */
  export const inboundSchema = UpdateServerByUuidRequestBody$inboundSchema;
  /** @deprecated use `UpdateServerByUuidRequestBody$outboundSchema` instead. */
  export const outboundSchema = UpdateServerByUuidRequestBody$outboundSchema;
  /** @deprecated use `UpdateServerByUuidRequestBody$Outbound` instead. */
  export type Outbound = UpdateServerByUuidRequestBody$Outbound;
}

export function updateServerByUuidRequestBodyToJSON(
  updateServerByUuidRequestBody: UpdateServerByUuidRequestBody,
): string {
  return JSON.stringify(
    UpdateServerByUuidRequestBody$outboundSchema.parse(
      updateServerByUuidRequestBody,
    ),
  );
}

export function updateServerByUuidRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<UpdateServerByUuidRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateServerByUuidRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateServerByUuidRequestBody' from JSON`,
  );
}

/** @internal */
export const UpdateServerByUuidRequest$inboundSchema: z.ZodType<
  UpdateServerByUuidRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  uuid: z.string(),
  RequestBody: z.lazy(() => UpdateServerByUuidRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type UpdateServerByUuidRequest$Outbound = {
  uuid: string;
  RequestBody: UpdateServerByUuidRequestBody$Outbound;
};

/** @internal */
export const UpdateServerByUuidRequest$outboundSchema: z.ZodType<
  UpdateServerByUuidRequest$Outbound,
  z.ZodTypeDef,
  UpdateServerByUuidRequest
> = z.object({
  uuid: z.string(),
  requestBody: z.lazy(() => UpdateServerByUuidRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateServerByUuidRequest$ {
  /** @deprecated use `UpdateServerByUuidRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateServerByUuidRequest$inboundSchema;
  /** @deprecated use `UpdateServerByUuidRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateServerByUuidRequest$outboundSchema;
  /** @deprecated use `UpdateServerByUuidRequest$Outbound` instead. */
  export type Outbound = UpdateServerByUuidRequest$Outbound;
}

export function updateServerByUuidRequestToJSON(
  updateServerByUuidRequest: UpdateServerByUuidRequest,
): string {
  return JSON.stringify(
    UpdateServerByUuidRequest$outboundSchema.parse(updateServerByUuidRequest),
  );
}

export function updateServerByUuidRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateServerByUuidRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateServerByUuidRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateServerByUuidRequest' from JSON`,
  );
}
