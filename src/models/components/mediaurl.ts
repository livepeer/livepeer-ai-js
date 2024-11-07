/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A URL from which media can be accessed.
 */
export type MediaURL = {
  /**
   * The URL where the media can be accessed.
   */
  url: string;
};

/** @internal */
export const MediaURL$inboundSchema: z.ZodType<
  MediaURL,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
});

/** @internal */
export type MediaURL$Outbound = {
  url: string;
};

/** @internal */
export const MediaURL$outboundSchema: z.ZodType<
  MediaURL$Outbound,
  z.ZodTypeDef,
  MediaURL
> = z.object({
  url: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MediaURL$ {
  /** @deprecated use `MediaURL$inboundSchema` instead. */
  export const inboundSchema = MediaURL$inboundSchema;
  /** @deprecated use `MediaURL$outboundSchema` instead. */
  export const outboundSchema = MediaURL$outboundSchema;
  /** @deprecated use `MediaURL$Outbound` instead. */
  export type Outbound = MediaURL$Outbound;
}
