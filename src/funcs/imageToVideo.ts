/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { LivepeerAiCore } from "../core.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { isBlobLike } from "../types/blobs.js";
import { Result } from "../types/fp.js";

/**
 * Image To Video
 */
export async function imageToVideo(
    client$: LivepeerAiCore,
    request: components.BodyImageToVideoImageToVideoPost,
    options?: RequestOptions
): Promise<
    Result<
        components.VideoResponse,
        | errors.HTTPError
        | errors.HTTPValidationError
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => components.BodyImageToVideoImageToVideoPost$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = new FormData();

    if (isBlobLike(payload$.image)) {
        body$.append("image", payload$.image);
    } else {
        body$.append(
            "image",
            new Blob([payload$.image.content], { type: "application/octet-stream" }),
            payload$.image.fileName
        );
    }
    if (payload$.fps !== undefined) {
        body$.append("fps", String(payload$.fps));
    }
    if (payload$.height !== undefined) {
        body$.append("height", String(payload$.height));
    }
    if (payload$.model_id !== undefined) {
        body$.append("model_id", payload$.model_id);
    }
    if (payload$.motion_bucket_id !== undefined) {
        body$.append("motion_bucket_id", String(payload$.motion_bucket_id));
    }
    if (payload$.noise_aug_strength !== undefined) {
        body$.append("noise_aug_strength", String(payload$.noise_aug_strength));
    }
    if (payload$.num_inference_steps !== undefined) {
        body$.append("num_inference_steps", String(payload$.num_inference_steps));
    }
    if (payload$.safety_check !== undefined) {
        body$.append("safety_check", String(payload$.safety_check));
    }
    if (payload$.seed !== undefined) {
        body$.append("seed", String(payload$.seed));
    }
    if (payload$.width !== undefined) {
        body$.append("width", String(payload$.width));
    }

    const path$ = pathToFunc("/image-to-video")();

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const httpBearer$ = await extractSecurity(client$.options$.httpBearer);
    const security$ = httpBearer$ == null ? {} : { httpBearer: httpBearer$ };
    const context = {
        operationID: "image_to_video",
        oAuth2Scopes: [],
        securitySource: client$.options$.httpBearer,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "POST",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "401", "422", "4XX", "500", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$] = await m$.match<
        components.VideoResponse,
        | errors.HTTPError
        | errors.HTTPValidationError
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, components.VideoResponse$inboundSchema),
        m$.jsonErr([400, 401, 500], errors.HTTPError$inboundSchema),
        m$.jsonErr(422, errors.HTTPValidationError$inboundSchema),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
