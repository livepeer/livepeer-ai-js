/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  MediaURL,
  MediaURL$inboundSchema,
  MediaURL$Outbound,
  MediaURL$outboundSchema,
} from "./mediaurl.js";

/**
 * Response model for audio generation.
 */
export type AudioResponse = {
  /**
   * The generated audio.
   */
  audio: MediaURL;
};

/** @internal */
export const AudioResponse$inboundSchema: z.ZodType<
  AudioResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  audio: MediaURL$inboundSchema,
});

/** @internal */
export type AudioResponse$Outbound = {
  audio: MediaURL$Outbound;
};

/** @internal */
export const AudioResponse$outboundSchema: z.ZodType<
  AudioResponse$Outbound,
  z.ZodTypeDef,
  AudioResponse
> = z.object({
  audio: MediaURL$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AudioResponse$ {
  /** @deprecated use `AudioResponse$inboundSchema` instead. */
  export const inboundSchema = AudioResponse$inboundSchema;
  /** @deprecated use `AudioResponse$outboundSchema` instead. */
  export const outboundSchema = AudioResponse$outboundSchema;
  /** @deprecated use `AudioResponse$Outbound` instead. */
  export type Outbound = AudioResponse$Outbound;
}

export function audioResponseToJSON(audioResponse: AudioResponse): string {
  return JSON.stringify(AudioResponse$outboundSchema.parse(audioResponse));
}

export function audioResponseFromJSON(
  jsonString: string,
): SafeParseResult<AudioResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AudioResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AudioResponse' from JSON`,
  );
}
