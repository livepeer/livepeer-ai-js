/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Media = {
    url: string;
    seed: number;
    nsfw: boolean;
};

/** @internal */
export const Media$inboundSchema: z.ZodType<Media, z.ZodTypeDef, unknown> = z.object({
    url: z.string(),
    seed: z.number().int(),
    nsfw: z.boolean(),
});

/** @internal */
export type Media$Outbound = {
    url: string;
    seed: number;
    nsfw: boolean;
};

/** @internal */
export const Media$outboundSchema: z.ZodType<Media$Outbound, z.ZodTypeDef, Media> = z.object({
    url: z.string(),
    seed: z.number().int(),
    nsfw: z.boolean(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Media$ {
    /** @deprecated use `Media$inboundSchema` instead. */
    export const inboundSchema = Media$inboundSchema;
    /** @deprecated use `Media$outboundSchema` instead. */
    export const outboundSchema = Media$outboundSchema;
    /** @deprecated use `Media$Outbound` instead. */
    export type Outbound = Media$Outbound;
}