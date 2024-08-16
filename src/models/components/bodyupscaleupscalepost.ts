/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64.js";
import { remap as remap$ } from "../../lib/primitives.js";
import { blobLikeSchema } from "../../types/blobs.js";
import * as z from "zod";

export type BodyUpscaleUpscalePostImage = {
    fileName: string;
    content: Uint8Array | string;
};

export type BodyUpscaleUpscalePost = {
    /**
     * Uploaded image to modify with the pipeline.
     */
    image: BodyUpscaleUpscalePostImage | Blob;
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
export const BodyUpscaleUpscalePostImage$inboundSchema: z.ZodType<
    BodyUpscaleUpscalePostImage,
    z.ZodTypeDef,
    unknown
> = z.object({
    fileName: z.string(),
    content: b64$.zodInbound,
});

/** @internal */
export type BodyUpscaleUpscalePostImage$Outbound = {
    fileName: string;
    content: Uint8Array;
};

/** @internal */
export const BodyUpscaleUpscalePostImage$outboundSchema: z.ZodType<
    BodyUpscaleUpscalePostImage$Outbound,
    z.ZodTypeDef,
    BodyUpscaleUpscalePostImage
> = z.object({
    fileName: z.string(),
    content: b64$.zodOutbound,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BodyUpscaleUpscalePostImage$ {
    /** @deprecated use `BodyUpscaleUpscalePostImage$inboundSchema` instead. */
    export const inboundSchema = BodyUpscaleUpscalePostImage$inboundSchema;
    /** @deprecated use `BodyUpscaleUpscalePostImage$outboundSchema` instead. */
    export const outboundSchema = BodyUpscaleUpscalePostImage$outboundSchema;
    /** @deprecated use `BodyUpscaleUpscalePostImage$Outbound` instead. */
    export type Outbound = BodyUpscaleUpscalePostImage$Outbound;
}

/** @internal */
export const BodyUpscaleUpscalePost$inboundSchema: z.ZodType<
    BodyUpscaleUpscalePost,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        image: z.lazy(() => BodyUpscaleUpscalePostImage$inboundSchema),
        prompt: z.string(),
        model_id: z.string().default(""),
        num_inference_steps: z.number().int().default(75),
        safety_check: z.boolean().default(true),
        seed: z.number().int().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            model_id: "modelId",
            num_inference_steps: "numInferenceSteps",
            safety_check: "safetyCheck",
        });
    });

/** @internal */
export type BodyUpscaleUpscalePost$Outbound = {
    image: BodyUpscaleUpscalePostImage$Outbound | Blob;
    prompt: string;
    model_id: string;
    num_inference_steps: number;
    safety_check: boolean;
    seed?: number | undefined;
};

/** @internal */
export const BodyUpscaleUpscalePost$outboundSchema: z.ZodType<
    BodyUpscaleUpscalePost$Outbound,
    z.ZodTypeDef,
    BodyUpscaleUpscalePost
> = z
    .object({
        image: z.lazy(() => BodyUpscaleUpscalePostImage$outboundSchema).or(blobLikeSchema),
        prompt: z.string(),
        modelId: z.string().default(""),
        numInferenceSteps: z.number().int().default(75),
        safetyCheck: z.boolean().default(true),
        seed: z.number().int().optional(),
    })
    .transform((v) => {
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
export namespace BodyUpscaleUpscalePost$ {
    /** @deprecated use `BodyUpscaleUpscalePost$inboundSchema` instead. */
    export const inboundSchema = BodyUpscaleUpscalePost$inboundSchema;
    /** @deprecated use `BodyUpscaleUpscalePost$outboundSchema` instead. */
    export const outboundSchema = BodyUpscaleUpscalePost$outboundSchema;
    /** @deprecated use `BodyUpscaleUpscalePost$Outbound` instead. */
    export type Outbound = BodyUpscaleUpscalePost$Outbound;
}