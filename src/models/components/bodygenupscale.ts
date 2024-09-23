/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { blobLikeSchema } from "../../types/blobs.js";

export type BodyGenUpscaleImage = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

export type BodyGenUpscale = {
  /**
   * Uploaded image to modify with the pipeline.
   */
  image: BodyGenUpscaleImage | Blob;
  /**
   * Text prompt(s) to guide upscaled image generation.
   */
  prompt: string;
  /**
   * Hugging Face model ID used for upscaled image generation.
   */
  modelId?: string | undefined;
  /**
   * Number of denoising steps. More steps usually lead to higher quality images but slower inference. Modulated by strength.
   */
  numInferenceSteps?: number | undefined;
  /**
   * Perform a safety check to estimate if generated images could be offensive or harmful.
   */
  safetyCheck?: boolean | undefined;
  /**
   * Seed for random number generation.
   */
  seed?: number | undefined;
};

/** @internal */
export const BodyGenUpscaleImage$inboundSchema: z.ZodType<
  BodyGenUpscaleImage,
  z.ZodTypeDef,
  unknown
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/** @internal */
export type BodyGenUpscaleImage$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const BodyGenUpscaleImage$outboundSchema: z.ZodType<
  BodyGenUpscaleImage$Outbound,
  z.ZodTypeDef,
  BodyGenUpscaleImage
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BodyGenUpscaleImage$ {
  /** @deprecated use `BodyGenUpscaleImage$inboundSchema` instead. */
  export const inboundSchema = BodyGenUpscaleImage$inboundSchema;
  /** @deprecated use `BodyGenUpscaleImage$outboundSchema` instead. */
  export const outboundSchema = BodyGenUpscaleImage$outboundSchema;
  /** @deprecated use `BodyGenUpscaleImage$Outbound` instead. */
  export type Outbound = BodyGenUpscaleImage$Outbound;
}

/** @internal */
export const BodyGenUpscale$inboundSchema: z.ZodType<
  BodyGenUpscale,
  z.ZodTypeDef,
  unknown
> = z.object({
  image: z.lazy(() => BodyGenUpscaleImage$inboundSchema),
  prompt: z.string(),
  model_id: z.string().default(""),
  num_inference_steps: z.number().int().default(75),
  safety_check: z.boolean().default(true),
  seed: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "model_id": "modelId",
    "num_inference_steps": "numInferenceSteps",
    "safety_check": "safetyCheck",
  });
});

/** @internal */
export type BodyGenUpscale$Outbound = {
  image: BodyGenUpscaleImage$Outbound | Blob;
  prompt: string;
  model_id: string;
  num_inference_steps: number;
  safety_check: boolean;
  seed?: number | undefined;
};

/** @internal */
export const BodyGenUpscale$outboundSchema: z.ZodType<
  BodyGenUpscale$Outbound,
  z.ZodTypeDef,
  BodyGenUpscale
> = z.object({
  image: z.lazy(() => BodyGenUpscaleImage$outboundSchema).or(blobLikeSchema),
  prompt: z.string(),
  modelId: z.string().default(""),
  numInferenceSteps: z.number().int().default(75),
  safetyCheck: z.boolean().default(true),
  seed: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    modelId: "model_id",
    numInferenceSteps: "num_inference_steps",
    safetyCheck: "safety_check",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BodyGenUpscale$ {
  /** @deprecated use `BodyGenUpscale$inboundSchema` instead. */
  export const inboundSchema = BodyGenUpscale$inboundSchema;
  /** @deprecated use `BodyGenUpscale$outboundSchema` instead. */
  export const outboundSchema = BodyGenUpscale$outboundSchema;
  /** @deprecated use `BodyGenUpscale$Outbound` instead. */
  export type Outbound = BodyGenUpscale$Outbound;
}
