/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { LivepeerAICore } from "../core.js";
import { readableStreamToArrayBuffer } from "../lib/files.js";
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
import * as operations from "../models/operations/index.js";
import { isBlobLike } from "../types/blobs.js";
import { Result } from "../types/fp.js";
import { isReadableStream } from "../types/streams.js";

/**
 * Image To Image
 *
 * @remarks
 * Apply image transformations to a provided image.
 */
export async function generateImageToImage(
  client$: LivepeerAICore,
  request: components.BodyGenImageToImage,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GenImageToImageResponse,
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
    (value$) => components.BodyGenImageToImage$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = new FormData();

  if (isBlobLike(payload$.image)) {
    body$.append("image", payload$.image);
  } else if (isReadableStream(payload$.image.content)) {
    const buffer = await readableStreamToArrayBuffer(payload$.image.content);
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    body$.append("image", blob);
  } else {
    body$.append(
      "image",
      new Blob([payload$.image.content], { type: "application/octet-stream" }),
      payload$.image.fileName,
    );
  }
  body$.append("prompt", payload$.prompt);
  if (payload$.guidance_scale !== undefined) {
    body$.append("guidance_scale", String(payload$.guidance_scale));
  }
  if (payload$.image_guidance_scale !== undefined) {
    body$.append("image_guidance_scale", String(payload$.image_guidance_scale));
  }
  if (payload$.model_id !== undefined) {
    body$.append("model_id", payload$.model_id);
  }
  if (payload$.negative_prompt !== undefined) {
    body$.append("negative_prompt", payload$.negative_prompt);
  }
  if (payload$.num_images_per_prompt !== undefined) {
    body$.append(
      "num_images_per_prompt",
      String(payload$.num_images_per_prompt),
    );
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
  if (payload$.strength !== undefined) {
    body$.append("strength", String(payload$.strength));
  }

  const path$ = pathToFunc("/image-to-image")();

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const httpBearer$ = await extractSecurity(client$.options$.httpBearer);
  const security$ = httpBearer$ == null ? {} : { httpBearer: httpBearer$ };
  const context = {
    operationID: "genImageToImage",
    oAuth2Scopes: [],
    securitySource: client$.options$.httpBearer,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "POST",
    path: path$,
    headers: headers$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["400", "401", "422", "4XX", "500", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result$] = await m$.match<
    operations.GenImageToImageResponse,
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
    m$.json(200, operations.GenImageToImageResponse$inboundSchema, {
      key: "ImageResponse",
    }),
    m$.jsonErr([400, 401, 500], errors.HTTPError$inboundSchema),
    m$.jsonErr(422, errors.HTTPValidationError$inboundSchema),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}