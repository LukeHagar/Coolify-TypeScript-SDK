/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Unauthenticated.
 */
export type UnauthenticatedData = {
  message?: string | undefined;
};

/**
 * Unauthenticated.
 */
export class Unauthenticated extends Error {
  /** The original data that was passed to this error instance. */
  data$: UnauthenticatedData;

  constructor(err: UnauthenticatedData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.name = "Unauthenticated";
  }
}

/** @internal */
export const Unauthenticated$inboundSchema: z.ZodType<
  Unauthenticated,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string().optional(),
})
  .transform((v) => {
    return new Unauthenticated(v);
  });

/** @internal */
export type Unauthenticated$Outbound = {
  message?: string | undefined;
};

/** @internal */
export const Unauthenticated$outboundSchema: z.ZodType<
  Unauthenticated$Outbound,
  z.ZodTypeDef,
  Unauthenticated
> = z.instanceof(Unauthenticated)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string().optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Unauthenticated$ {
  /** @deprecated use `Unauthenticated$inboundSchema` instead. */
  export const inboundSchema = Unauthenticated$inboundSchema;
  /** @deprecated use `Unauthenticated$outboundSchema` instead. */
  export const outboundSchema = Unauthenticated$outboundSchema;
  /** @deprecated use `Unauthenticated$Outbound` instead. */
  export type Outbound = Unauthenticated$Outbound;
}