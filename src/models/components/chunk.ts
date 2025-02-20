/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * A chunk of text with a timestamp.
 */
export type Chunk = {
  /**
   * The timestamp of the chunk.
   */
  timestamp: Array<any>;
  /**
   * The text of the chunk.
   */
  text: string;
};

/** @internal */
export const Chunk$inboundSchema: z.ZodType<Chunk, z.ZodTypeDef, unknown> = z
  .object({
    timestamp: z.array(z.any()),
    text: z.string(),
  });

/** @internal */
export type Chunk$Outbound = {
  timestamp: Array<any>;
  text: string;
};

/** @internal */
export const Chunk$outboundSchema: z.ZodType<
  Chunk$Outbound,
  z.ZodTypeDef,
  Chunk
> = z.object({
  timestamp: z.array(z.any()),
  text: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Chunk$ {
  /** @deprecated use `Chunk$inboundSchema` instead. */
  export const inboundSchema = Chunk$inboundSchema;
  /** @deprecated use `Chunk$outboundSchema` instead. */
  export const outboundSchema = Chunk$outboundSchema;
  /** @deprecated use `Chunk$Outbound` instead. */
  export type Outbound = Chunk$Outbound;
}

export function chunkToJSON(chunk: Chunk): string {
  return JSON.stringify(Chunk$outboundSchema.parse(chunk));
}

export function chunkFromJSON(
  jsonString: string,
): SafeParseResult<Chunk, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Chunk$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Chunk' from JSON`,
  );
}
