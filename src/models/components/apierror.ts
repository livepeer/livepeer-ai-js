/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * API error response model.
 */
export type APIError = {
  /**
   * The error message.
   */
  msg: string;
};

/** @internal */
export const APIError$inboundSchema: z.ZodType<
  APIError,
  z.ZodTypeDef,
  unknown
> = z.object({
  msg: z.string(),
});

/** @internal */
export type APIError$Outbound = {
  msg: string;
};

/** @internal */
export const APIError$outboundSchema: z.ZodType<
  APIError$Outbound,
  z.ZodTypeDef,
  APIError
> = z.object({
  msg: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace APIError$ {
  /** @deprecated use `APIError$inboundSchema` instead. */
  export const inboundSchema = APIError$inboundSchema;
  /** @deprecated use `APIError$outboundSchema` instead. */
  export const outboundSchema = APIError$outboundSchema;
  /** @deprecated use `APIError$Outbound` instead. */
  export type Outbound = APIError$Outbound;
}

export function apiErrorToJSON(apiError: APIError): string {
  return JSON.stringify(APIError$outboundSchema.parse(apiError));
}

export function apiErrorFromJSON(
  jsonString: string,
): SafeParseResult<APIError, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => APIError$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'APIError' from JSON`,
  );
}
