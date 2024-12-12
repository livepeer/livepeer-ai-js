/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Response model for live video-to-video generation.
 */
export type LiveVideoToVideoResponse = {
  /**
   * Source URL of the incoming stream to subscribe to
   */
  subscribeUrl: string;
  /**
   * Destination URL of the outgoing stream to publish to
   */
  publishUrl: string;
  /**
   * URL for updating the live video-to-video generation
   */
  controlUrl?: string | undefined;
  /**
   * URL for subscribing to events for pipeline status and logs
   */
  eventsUrl?: string | undefined;
};

/** @internal */
export const LiveVideoToVideoResponse$inboundSchema: z.ZodType<
  LiveVideoToVideoResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  subscribe_url: z.string(),
  publish_url: z.string(),
  control_url: z.string().default(""),
  events_url: z.string().default(""),
}).transform((v) => {
  return remap$(v, {
    "subscribe_url": "subscribeUrl",
    "publish_url": "publishUrl",
    "control_url": "controlUrl",
    "events_url": "eventsUrl",
  });
});

/** @internal */
export type LiveVideoToVideoResponse$Outbound = {
  subscribe_url: string;
  publish_url: string;
  control_url: string;
  events_url: string;
};

/** @internal */
export const LiveVideoToVideoResponse$outboundSchema: z.ZodType<
  LiveVideoToVideoResponse$Outbound,
  z.ZodTypeDef,
  LiveVideoToVideoResponse
> = z.object({
  subscribeUrl: z.string(),
  publishUrl: z.string(),
  controlUrl: z.string().default(""),
  eventsUrl: z.string().default(""),
}).transform((v) => {
  return remap$(v, {
    subscribeUrl: "subscribe_url",
    publishUrl: "publish_url",
    controlUrl: "control_url",
    eventsUrl: "events_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LiveVideoToVideoResponse$ {
  /** @deprecated use `LiveVideoToVideoResponse$inboundSchema` instead. */
  export const inboundSchema = LiveVideoToVideoResponse$inboundSchema;
  /** @deprecated use `LiveVideoToVideoResponse$outboundSchema` instead. */
  export const outboundSchema = LiveVideoToVideoResponse$outboundSchema;
  /** @deprecated use `LiveVideoToVideoResponse$Outbound` instead. */
  export type Outbound = LiveVideoToVideoResponse$Outbound;
}

export function liveVideoToVideoResponseToJSON(
  liveVideoToVideoResponse: LiveVideoToVideoResponse,
): string {
  return JSON.stringify(
    LiveVideoToVideoResponse$outboundSchema.parse(liveVideoToVideoResponse),
  );
}

export function liveVideoToVideoResponseFromJSON(
  jsonString: string,
): SafeParseResult<LiveVideoToVideoResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LiveVideoToVideoResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LiveVideoToVideoResponse' from JSON`,
  );
}
