/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LLMMessage,
  LLMMessage$inboundSchema,
  LLMMessage$Outbound,
  LLMMessage$outboundSchema,
} from "./llmmessage.js";

export type LLMRequest = {
  messages: Array<LLMMessage>;
  model?: string | undefined;
  temperature?: number | undefined;
  maxTokens?: number | undefined;
  topP?: number | undefined;
  topK?: number | undefined;
  stream?: boolean | undefined;
};

/** @internal */
export const LLMRequest$inboundSchema: z.ZodType<
  LLMRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  messages: z.array(LLMMessage$inboundSchema),
  model: z.string().default(""),
  temperature: z.number().default(0.7),
  max_tokens: z.number().int().default(256),
  top_p: z.number().default(1),
  top_k: z.number().int().default(-1),
  stream: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    "max_tokens": "maxTokens",
    "top_p": "topP",
    "top_k": "topK",
  });
});

/** @internal */
export type LLMRequest$Outbound = {
  messages: Array<LLMMessage$Outbound>;
  model: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  top_k: number;
  stream: boolean;
};

/** @internal */
export const LLMRequest$outboundSchema: z.ZodType<
  LLMRequest$Outbound,
  z.ZodTypeDef,
  LLMRequest
> = z.object({
  messages: z.array(LLMMessage$outboundSchema),
  model: z.string().default(""),
  temperature: z.number().default(0.7),
  maxTokens: z.number().int().default(256),
  topP: z.number().default(1),
  topK: z.number().int().default(-1),
  stream: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    maxTokens: "max_tokens",
    topP: "top_p",
    topK: "top_k",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LLMRequest$ {
  /** @deprecated use `LLMRequest$inboundSchema` instead. */
  export const inboundSchema = LLMRequest$inboundSchema;
  /** @deprecated use `LLMRequest$outboundSchema` instead. */
  export const outboundSchema = LLMRequest$outboundSchema;
  /** @deprecated use `LLMRequest$Outbound` instead. */
  export type Outbound = LLMRequest$Outbound;
}

export function llmRequestToJSON(llmRequest: LLMRequest): string {
  return JSON.stringify(LLMRequest$outboundSchema.parse(llmRequest));
}

export function llmRequestFromJSON(
  jsonString: string,
): SafeParseResult<LLMRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LLMRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LLMRequest' from JSON`,
  );
}