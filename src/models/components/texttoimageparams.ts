/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type TextToImageParams = {
  /**
   * Hugging Face model ID used for image generation.
   */
  modelId?: string | undefined;
  /**
   * Text prompt(s) to guide image generation. Separate multiple prompts with '|' if supported by the model.
   */
  prompt: string;
  /**
   * The height in pixels of the generated image.
   */
  height?: number | undefined;
  /**
   * The width in pixels of the generated image.
   */
  width?: number | undefined;
  /**
   * Encourages model to generate images closely linked to the text prompt (higher values may reduce image quality).
   */
  guidanceScale?: number | undefined;
  /**
   * Text prompt(s) to guide what to exclude from image generation. Ignored if guidance_scale < 1.
   */
  negativePrompt?: string | undefined;
  /**
   * Perform a safety check to estimate if generated images could be offensive or harmful.
   */
  safetyCheck?: boolean | undefined;
  /**
   * Seed for random number generation.
   */
  seed?: number | undefined;
  /**
   * Number of denoising steps. More steps usually lead to higher quality images but slower inference. Modulated by strength.
   */
  numInferenceSteps?: number | undefined;
  /**
   * Number of images to generate per prompt.
   */
  numImagesPerPrompt?: number | undefined;
};

/** @internal */
export const TextToImageParams$inboundSchema: z.ZodType<
  TextToImageParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  model_id: z.string().default(""),
  prompt: z.string(),
  height: z.number().int().default(576),
  width: z.number().int().default(1024),
  guidance_scale: z.number().default(7.5),
  negative_prompt: z.string().default(""),
  safety_check: z.boolean().default(true),
  seed: z.number().int().optional(),
  num_inference_steps: z.number().int().default(50),
  num_images_per_prompt: z.number().int().default(1),
}).transform((v) => {
  return remap$(v, {
    "model_id": "modelId",
    "guidance_scale": "guidanceScale",
    "negative_prompt": "negativePrompt",
    "safety_check": "safetyCheck",
    "num_inference_steps": "numInferenceSteps",
    "num_images_per_prompt": "numImagesPerPrompt",
  });
});

/** @internal */
export type TextToImageParams$Outbound = {
  model_id: string;
  prompt: string;
  height: number;
  width: number;
  guidance_scale: number;
  negative_prompt: string;
  safety_check: boolean;
  seed?: number | undefined;
  num_inference_steps: number;
  num_images_per_prompt: number;
};

/** @internal */
export const TextToImageParams$outboundSchema: z.ZodType<
  TextToImageParams$Outbound,
  z.ZodTypeDef,
  TextToImageParams
> = z.object({
  modelId: z.string().default(""),
  prompt: z.string(),
  height: z.number().int().default(576),
  width: z.number().int().default(1024),
  guidanceScale: z.number().default(7.5),
  negativePrompt: z.string().default(""),
  safetyCheck: z.boolean().default(true),
  seed: z.number().int().optional(),
  numInferenceSteps: z.number().int().default(50),
  numImagesPerPrompt: z.number().int().default(1),
}).transform((v) => {
  return remap$(v, {
    modelId: "model_id",
    guidanceScale: "guidance_scale",
    negativePrompt: "negative_prompt",
    safetyCheck: "safety_check",
    numInferenceSteps: "num_inference_steps",
    numImagesPerPrompt: "num_images_per_prompt",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TextToImageParams$ {
  /** @deprecated use `TextToImageParams$inboundSchema` instead. */
  export const inboundSchema = TextToImageParams$inboundSchema;
  /** @deprecated use `TextToImageParams$outboundSchema` instead. */
  export const outboundSchema = TextToImageParams$outboundSchema;
  /** @deprecated use `TextToImageParams$Outbound` instead. */
  export type Outbound = TextToImageParams$Outbound;
}
