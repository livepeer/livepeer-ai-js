/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type BodyGenLLM = {
  prompt: string;
  modelId?: string | undefined;
  systemMsg?: string | undefined;
  temperature?: number | undefined;
  maxTokens?: number | undefined;
  history?: string | undefined;
  stream?: boolean | undefined;
};

/** @internal */
export const BodyGenLLM$inboundSchema: z.ZodType<
  BodyGenLLM,
  z.ZodTypeDef,
  unknown
> = z.object({
  prompt: z.string(),
  model_id: z.string().default(""),
  system_msg: z.string().default(""),
  temperature: z.number().default(0.7),
  max_tokens: z.number().int().default(256),
  history: z.string().default("[]"),
  stream: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    "model_id": "modelId",
    "system_msg": "systemMsg",
    "max_tokens": "maxTokens",
  });
});

/** @internal */
export type BodyGenLLM$Outbound = {
  prompt: string;
  model_id: string;
  system_msg: string;
  temperature: number;
  max_tokens: number;
  history: string;
  stream: boolean;
};

/** @internal */
export const BodyGenLLM$outboundSchema: z.ZodType<
  BodyGenLLM$Outbound,
  z.ZodTypeDef,
  BodyGenLLM
> = z.object({
  prompt: z.string(),
  modelId: z.string().default(""),
  systemMsg: z.string().default(""),
  temperature: z.number().default(0.7),
  maxTokens: z.number().int().default(256),
  history: z.string().default("[]"),
  stream: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    modelId: "model_id",
    systemMsg: "system_msg",
    maxTokens: "max_tokens",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BodyGenLLM$ {
  /** @deprecated use `BodyGenLLM$inboundSchema` instead. */
  export const inboundSchema = BodyGenLLM$inboundSchema;
  /** @deprecated use `BodyGenLLM$outboundSchema` instead. */
  export const outboundSchema = BodyGenLLM$outboundSchema;
  /** @deprecated use `BodyGenLLM$Outbound` instead. */
  export type Outbound = BodyGenLLM$Outbound;
}