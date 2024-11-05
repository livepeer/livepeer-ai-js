/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type TextToSpeechParams = {
  /**
   * Hugging Face model ID used for text to speech generation.
   */
  modelId?: string | undefined;
  /**
   * Text input for speech generation.
   */
  text?: string | undefined;
  /**
   * Description of speaker to steer text to speech generation.
   */
  description?: string | undefined;
};

/** @internal */
export const TextToSpeechParams$inboundSchema: z.ZodType<
  TextToSpeechParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  model_id: z.string().default(""),
  text: z.string().default(""),
  description: z.string().default(
    "A male speaker delivers a slightly expressive and animated speech with a moderate speed and pitch.",
  ),
}).transform((v) => {
  return remap$(v, {
    "model_id": "modelId",
  });
});

/** @internal */
export type TextToSpeechParams$Outbound = {
  model_id: string;
  text: string;
  description: string;
};

/** @internal */
export const TextToSpeechParams$outboundSchema: z.ZodType<
  TextToSpeechParams$Outbound,
  z.ZodTypeDef,
  TextToSpeechParams
> = z.object({
  modelId: z.string().default(""),
  text: z.string().default(""),
  description: z.string().default(
    "A male speaker delivers a slightly expressive and animated speech with a moderate speed and pitch.",
  ),
}).transform((v) => {
  return remap$(v, {
    modelId: "model_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TextToSpeechParams$ {
  /** @deprecated use `TextToSpeechParams$inboundSchema` instead. */
  export const inboundSchema = TextToSpeechParams$inboundSchema;
  /** @deprecated use `TextToSpeechParams$outboundSchema` instead. */
  export const outboundSchema = TextToSpeechParams$outboundSchema;
  /** @deprecated use `TextToSpeechParams$Outbound` instead. */
  export type Outbound = TextToSpeechParams$Outbound;
}