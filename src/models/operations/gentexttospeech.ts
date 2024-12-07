/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GenTextToSpeechResponse = {
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
  audioResponse?: components.AudioResponse | undefined;
};

/** @internal */
export const GenTextToSpeechResponse$inboundSchema: z.ZodType<
  GenTextToSpeechResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  AudioResponse: components.AudioResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "AudioResponse": "audioResponse",
  });
});

/** @internal */
export type GenTextToSpeechResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  AudioResponse?: components.AudioResponse$Outbound | undefined;
};

/** @internal */
export const GenTextToSpeechResponse$outboundSchema: z.ZodType<
  GenTextToSpeechResponse$Outbound,
  z.ZodTypeDef,
  GenTextToSpeechResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  audioResponse: components.AudioResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    audioResponse: "AudioResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenTextToSpeechResponse$ {
  /** @deprecated use `GenTextToSpeechResponse$inboundSchema` instead. */
  export const inboundSchema = GenTextToSpeechResponse$inboundSchema;
  /** @deprecated use `GenTextToSpeechResponse$outboundSchema` instead. */
  export const outboundSchema = GenTextToSpeechResponse$outboundSchema;
  /** @deprecated use `GenTextToSpeechResponse$Outbound` instead. */
  export type Outbound = GenTextToSpeechResponse$Outbound;
}
