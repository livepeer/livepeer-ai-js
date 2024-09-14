/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { blobLikeSchema } from "../../types/blobs.js";

export type BodyGenImageToVideoImage = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer;
};

export type BodyGenImageToVideo = {
  /**
   * Uploaded image to generate a video from.
   */
  image: BodyGenImageToVideoImage | Blob;
  /**
   * The frames per second of the generated video.
   */
  fps?: number | undefined;
  /**
   * The height in pixels of the generated video.
   */
  height?: number | undefined;
  /**
   * Hugging Face model ID used for video generation.
   */
  modelId?: string | undefined;
  /**
   * Used for conditioning the amount of motion for the generation. The higher the number the more motion will be in the video.
   */
  motionBucketId?: number | undefined;
  /**
   * Amount of noise added to the conditioning image. Higher values reduce resemblance to the conditioning image and increase motion.
   */
  noiseAugStrength?: number | undefined;
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
  /**
   * The width in pixels of the generated video.
   */
  width?: number | undefined;
};

/** @internal */
export const BodyGenImageToVideoImage$inboundSchema: z.ZodType<
  BodyGenImageToVideoImage,
  z.ZodTypeDef,
  unknown
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
  ]),
});

/** @internal */
export type BodyGenImageToVideoImage$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer;
};

/** @internal */
export const BodyGenImageToVideoImage$outboundSchema: z.ZodType<
  BodyGenImageToVideoImage$Outbound,
  z.ZodTypeDef,
  BodyGenImageToVideoImage
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BodyGenImageToVideoImage$ {
  /** @deprecated use `BodyGenImageToVideoImage$inboundSchema` instead. */
  export const inboundSchema = BodyGenImageToVideoImage$inboundSchema;
  /** @deprecated use `BodyGenImageToVideoImage$outboundSchema` instead. */
  export const outboundSchema = BodyGenImageToVideoImage$outboundSchema;
  /** @deprecated use `BodyGenImageToVideoImage$Outbound` instead. */
  export type Outbound = BodyGenImageToVideoImage$Outbound;
}

/** @internal */
export const BodyGenImageToVideo$inboundSchema: z.ZodType<
  BodyGenImageToVideo,
  z.ZodTypeDef,
  unknown
> = z.object({
  image: z.lazy(() => BodyGenImageToVideoImage$inboundSchema),
  fps: z.number().int().default(6),
  height: z.number().int().default(576),
  model_id: z.string().default(""),
  motion_bucket_id: z.number().int().default(127),
  noise_aug_strength: z.number().default(0.02),
  num_inference_steps: z.number().int().default(25),
  safety_check: z.boolean().default(true),
  seed: z.number().int().optional(),
  width: z.number().int().default(1024),
}).transform((v) => {
  return remap$(v, {
    "model_id": "modelId",
    "motion_bucket_id": "motionBucketId",
    "noise_aug_strength": "noiseAugStrength",
    "num_inference_steps": "numInferenceSteps",
    "safety_check": "safetyCheck",
  });
});

/** @internal */
export type BodyGenImageToVideo$Outbound = {
  image: BodyGenImageToVideoImage$Outbound | Blob;
  fps: number;
  height: number;
  model_id: string;
  motion_bucket_id: number;
  noise_aug_strength: number;
  num_inference_steps: number;
  safety_check: boolean;
  seed?: number | undefined;
  width: number;
};

/** @internal */
export const BodyGenImageToVideo$outboundSchema: z.ZodType<
  BodyGenImageToVideo$Outbound,
  z.ZodTypeDef,
  BodyGenImageToVideo
> = z.object({
  image: z.lazy(() => BodyGenImageToVideoImage$outboundSchema).or(
    blobLikeSchema,
  ),
  fps: z.number().int().default(6),
  height: z.number().int().default(576),
  modelId: z.string().default(""),
  motionBucketId: z.number().int().default(127),
  noiseAugStrength: z.number().default(0.02),
  numInferenceSteps: z.number().int().default(25),
  safetyCheck: z.boolean().default(true),
  seed: z.number().int().optional(),
  width: z.number().int().default(1024),
}).transform((v) => {
  return remap$(v, {
    modelId: "model_id",
    motionBucketId: "motion_bucket_id",
    noiseAugStrength: "noise_aug_strength",
    numInferenceSteps: "num_inference_steps",
    safetyCheck: "safety_check",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BodyGenImageToVideo$ {
  /** @deprecated use `BodyGenImageToVideo$inboundSchema` instead. */
  export const inboundSchema = BodyGenImageToVideo$inboundSchema;
  /** @deprecated use `BodyGenImageToVideo$outboundSchema` instead. */
  export const outboundSchema = BodyGenImageToVideo$outboundSchema;
  /** @deprecated use `BodyGenImageToVideo$Outbound` instead. */
  export type Outbound = BodyGenImageToVideo$Outbound;
}