/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LLMTokenUsage = {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
};

/** @internal */
export const LLMTokenUsage$inboundSchema: z.ZodType<
  LLMTokenUsage,
  z.ZodTypeDef,
  unknown
> = z.object({
  prompt_tokens: z.number().int(),
  completion_tokens: z.number().int(),
  total_tokens: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "prompt_tokens": "promptTokens",
    "completion_tokens": "completionTokens",
    "total_tokens": "totalTokens",
  });
});

/** @internal */
export type LLMTokenUsage$Outbound = {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
};

/** @internal */
export const LLMTokenUsage$outboundSchema: z.ZodType<
  LLMTokenUsage$Outbound,
  z.ZodTypeDef,
  LLMTokenUsage
> = z.object({
  promptTokens: z.number().int(),
  completionTokens: z.number().int(),
  totalTokens: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    promptTokens: "prompt_tokens",
    completionTokens: "completion_tokens",
    totalTokens: "total_tokens",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LLMTokenUsage$ {
  /** @deprecated use `LLMTokenUsage$inboundSchema` instead. */
  export const inboundSchema = LLMTokenUsage$inboundSchema;
  /** @deprecated use `LLMTokenUsage$outboundSchema` instead. */
  export const outboundSchema = LLMTokenUsage$outboundSchema;
  /** @deprecated use `LLMTokenUsage$Outbound` instead. */
  export type Outbound = LLMTokenUsage$Outbound;
}

export function llmTokenUsageToJSON(llmTokenUsage: LLMTokenUsage): string {
  return JSON.stringify(LLMTokenUsage$outboundSchema.parse(llmTokenUsage));
}

export function llmTokenUsageFromJSON(
  jsonString: string,
): SafeParseResult<LLMTokenUsage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LLMTokenUsage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LLMTokenUsage' from JSON`,
  );
}
