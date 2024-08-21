/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { audioToText } from "../funcs/audioToText.js";
import { imageToImage } from "../funcs/imageToImage.js";
import { imageToVideo } from "../funcs/imageToVideo.js";
import { textToImage } from "../funcs/textToImage.js";
import { upscale } from "../funcs/upscale.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class LivepeerAI extends ClientSDK {
    /**
     * Text To Image
     */
    async textToImage(
        request: components.TextToImageParams,
        options?: RequestOptions
    ): Promise<operations.TextToImageResponse> {
        return unwrapAsync(textToImage(this, request, options));
    }

    /**
     * Image To Image
     */
    async imageToImage(
        request: components.BodyImageToImageImageToImagePost,
        options?: RequestOptions
    ): Promise<operations.ImageToImageResponse> {
        return unwrapAsync(imageToImage(this, request, options));
    }

    /**
     * Image To Video
     */
    async imageToVideo(
        request: components.BodyImageToVideoImageToVideoPost,
        options?: RequestOptions
    ): Promise<operations.ImageToVideoResponse> {
        return unwrapAsync(imageToVideo(this, request, options));
    }

    /**
     * Upscale
     */
    async upscale(
        request: components.BodyUpscaleUpscalePost,
        options?: RequestOptions
    ): Promise<operations.UpscaleResponse> {
        return unwrapAsync(upscale(this, request, options));
    }

    /**
     * Audio To Text
     */
    async audioToText(
        request: components.BodyAudioToTextAudioToTextPost,
        options?: RequestOptions
    ): Promise<operations.AudioToTextResponse> {
        return unwrapAsync(audioToText(this, request, options));
    }
}
