/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GenImageToTextResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * Successful Response
   */
  imageToTextResponse?: components.ImageToTextResponse | undefined;
};

/** @internal */
export const GenImageToTextResponse$inboundSchema: z.ZodType<
  GenImageToTextResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  ImageToTextResponse: components.ImageToTextResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "ImageToTextResponse": "imageToTextResponse",
  });
});

/** @internal */
export type GenImageToTextResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  ImageToTextResponse?: components.ImageToTextResponse$Outbound | undefined;
};

/** @internal */
export const GenImageToTextResponse$outboundSchema: z.ZodType<
  GenImageToTextResponse$Outbound,
  z.ZodTypeDef,
  GenImageToTextResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  imageToTextResponse: components.ImageToTextResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    imageToTextResponse: "ImageToTextResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenImageToTextResponse$ {
  /** @deprecated use `GenImageToTextResponse$inboundSchema` instead. */
  export const inboundSchema = GenImageToTextResponse$inboundSchema;
  /** @deprecated use `GenImageToTextResponse$outboundSchema` instead. */
  export const outboundSchema = GenImageToTextResponse$outboundSchema;
  /** @deprecated use `GenImageToTextResponse$Outbound` instead. */
  export type Outbound = GenImageToTextResponse$Outbound;
}

export function genImageToTextResponseToJSON(
  genImageToTextResponse: GenImageToTextResponse,
): string {
  return JSON.stringify(
    GenImageToTextResponse$outboundSchema.parse(genImageToTextResponse),
  );
}

export function genImageToTextResponseFromJSON(
  jsonString: string,
): SafeParseResult<GenImageToTextResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GenImageToTextResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GenImageToTextResponse' from JSON`,
  );
}
