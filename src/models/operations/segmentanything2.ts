/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type SegmentAnything2Response = {
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
  masksResponse?: components.MasksResponse | undefined;
};

/** @internal */
export const SegmentAnything2Response$inboundSchema: z.ZodType<
  SegmentAnything2Response,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  MasksResponse: components.MasksResponse$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "MasksResponse": "masksResponse",
  });
});

/** @internal */
export type SegmentAnything2Response$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  MasksResponse?: components.MasksResponse$Outbound | undefined;
};

/** @internal */
export const SegmentAnything2Response$outboundSchema: z.ZodType<
  SegmentAnything2Response$Outbound,
  z.ZodTypeDef,
  SegmentAnything2Response
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  masksResponse: components.MasksResponse$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    masksResponse: "MasksResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SegmentAnything2Response$ {
  /** @deprecated use `SegmentAnything2Response$inboundSchema` instead. */
  export const inboundSchema = SegmentAnything2Response$inboundSchema;
  /** @deprecated use `SegmentAnything2Response$outboundSchema` instead. */
  export const outboundSchema = SegmentAnything2Response$outboundSchema;
  /** @deprecated use `SegmentAnything2Response$Outbound` instead. */
  export type Outbound = SegmentAnything2Response$Outbound;
}