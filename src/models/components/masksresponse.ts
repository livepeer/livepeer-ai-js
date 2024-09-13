/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Response model for object segmentation.
 */
export type MasksResponse = {
  /**
   * The generated masks.
   */
  masks: string;
  /**
   * The model's confidence scores for each generated mask.
   */
  scores: string;
  /**
   * The raw, unnormalized predictions (logits) for the masks.
   */
  logits: string;
};

/** @internal */
export const MasksResponse$inboundSchema: z.ZodType<
  MasksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  masks: z.string(),
  scores: z.string(),
  logits: z.string(),
});

/** @internal */
export type MasksResponse$Outbound = {
  masks: string;
  scores: string;
  logits: string;
};

/** @internal */
export const MasksResponse$outboundSchema: z.ZodType<
  MasksResponse$Outbound,
  z.ZodTypeDef,
  MasksResponse
> = z.object({
  masks: z.string(),
  scores: z.string(),
  logits: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MasksResponse$ {
  /** @deprecated use `MasksResponse$inboundSchema` instead. */
  export const inboundSchema = MasksResponse$inboundSchema;
  /** @deprecated use `MasksResponse$outboundSchema` instead. */
  export const outboundSchema = MasksResponse$outboundSchema;
  /** @deprecated use `MasksResponse$Outbound` instead. */
  export type Outbound = MasksResponse$Outbound;
}