/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Invalid token.
 */
export type BadRequestData = {
  message?: string | undefined;
};

/**
 * Invalid token.
 */
export class BadRequest extends Error {
  /** The original data that was passed to this error instance. */
  data$: BadRequestData;

  constructor(err: BadRequestData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.name = "BadRequest";
  }
}

/** @internal */
export const BadRequest$inboundSchema: z.ZodType<
  BadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string().optional(),
})
  .transform((v) => {
    return new BadRequest(v);
  });

/** @internal */
export type BadRequest$Outbound = {
  message?: string | undefined;
};

/** @internal */
export const BadRequest$outboundSchema: z.ZodType<
  BadRequest$Outbound,
  z.ZodTypeDef,
  BadRequest
> = z.instanceof(BadRequest)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BadRequest$ {
  /** @deprecated use `BadRequest$inboundSchema` instead. */
  export const inboundSchema = BadRequest$inboundSchema;
  /** @deprecated use `BadRequest$outboundSchema` instead. */
  export const outboundSchema = BadRequest$outboundSchema;
  /** @deprecated use `BadRequest$Outbound` instead. */
  export type Outbound = BadRequest$Outbound;
}