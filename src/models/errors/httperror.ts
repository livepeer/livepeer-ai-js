/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

/**
 * HTTP error response model.
 */
export type HTTPErrorData = {
  /**
   * Detailed error information.
   */
  detail: components.APIError;
};

/**
 * HTTP error response model.
 */
export class HTTPError extends Error {
  /**
   * Detailed error information.
   */
  detail: components.APIError;

  /** The original data that was passed to this error instance. */
  data$: HTTPErrorData;

  constructor(err: HTTPErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.detail = err.detail;

    this.name = "HTTPError";
  }
}

/** @internal */
export const HTTPError$inboundSchema: z.ZodType<
  HTTPError,
  z.ZodTypeDef,
  unknown
> = z.object({
  detail: components.APIError$inboundSchema,
})
  .transform((v) => {
    return new HTTPError(v);
  });

/** @internal */
export type HTTPError$Outbound = {
  detail: components.APIError$Outbound;
};

/** @internal */
export const HTTPError$outboundSchema: z.ZodType<
  HTTPError$Outbound,
  z.ZodTypeDef,
  HTTPError
> = z.instanceof(HTTPError)
  .transform(v => v.data$)
  .pipe(z.object({
    detail: components.APIError$outboundSchema,
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HTTPError$ {
  /** @deprecated use `HTTPError$inboundSchema` instead. */
  export const inboundSchema = HTTPError$inboundSchema;
  /** @deprecated use `HTTPError$outboundSchema` instead. */
  export const outboundSchema = HTTPError$outboundSchema;
  /** @deprecated use `HTTPError$Outbound` instead. */
  export type Outbound = HTTPError$Outbound;
}
