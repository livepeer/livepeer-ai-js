/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type TextToImageResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successful Response
     */
    imageResponse?: components.ImageResponse | undefined;
};

/** @internal */
export const TextToImageResponse$inboundSchema: z.ZodType<
    TextToImageResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        ImageResponse: components.ImageResponse$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            ImageResponse: "imageResponse",
        });
    });

/** @internal */
export type TextToImageResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ImageResponse?: components.ImageResponse$Outbound | undefined;
};

/** @internal */
export const TextToImageResponse$outboundSchema: z.ZodType<
    TextToImageResponse$Outbound,
    z.ZodTypeDef,
    TextToImageResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        imageResponse: components.ImageResponse$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            imageResponse: "ImageResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TextToImageResponse$ {
    /** @deprecated use `TextToImageResponse$inboundSchema` instead. */
    export const inboundSchema = TextToImageResponse$inboundSchema;
    /** @deprecated use `TextToImageResponse$outboundSchema` instead. */
    export const outboundSchema = TextToImageResponse$outboundSchema;
    /** @deprecated use `TextToImageResponse$Outbound` instead. */
    export type Outbound = TextToImageResponse$Outbound;
}
