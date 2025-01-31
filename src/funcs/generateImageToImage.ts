/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { LivepeerCore } from "../core.js";
import { appendForm } from "../lib/encodings.js";
import { readableStreamToArrayBuffer } from "../lib/files.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
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
  client: LivepeerCore,
  request: components.BodyGenImageToImage,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GenImageToImageResponse,
    | errors.HTTPError
    | errors.HTTPValidationError
    | errors.HTTPError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) => components.BodyGenImageToImage$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = new FormData();

  if (isBlobLike(payload.image)) {
    appendForm(body, "image", payload.image);
  } else if (isReadableStream(payload.image.content)) {
    const buffer = await readableStreamToArrayBuffer(payload.image.content);
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    appendForm(body, "image", blob);
  } else {
    appendForm(
      body,
      "image",
      new Blob([payload.image.content], { type: "application/octet-stream" }),
      payload.image.fileName,
    );
  }
  appendForm(body, "prompt", payload.prompt);
  if (payload.guidance_scale !== undefined) {
    appendForm(body, "guidance_scale", payload.guidance_scale);
  }
  if (payload.image_guidance_scale !== undefined) {
    appendForm(body, "image_guidance_scale", payload.image_guidance_scale);
  }
  if (payload.loras !== undefined) {
    appendForm(body, "loras", payload.loras);
  }
  if (payload.model_id !== undefined) {
    appendForm(body, "model_id", payload.model_id);
  }
  if (payload.negative_prompt !== undefined) {
    appendForm(body, "negative_prompt", payload.negative_prompt);
  }
  if (payload.num_images_per_prompt !== undefined) {
    appendForm(body, "num_images_per_prompt", payload.num_images_per_prompt);
  }
  if (payload.num_inference_steps !== undefined) {
    appendForm(body, "num_inference_steps", payload.num_inference_steps);
  }
  if (payload.safety_check !== undefined) {
    appendForm(body, "safety_check", payload.safety_check);
  }
  if (payload.seed !== undefined) {
    appendForm(body, "seed", payload.seed);
  }
  if (payload.strength !== undefined) {
    appendForm(body, "strength", payload.strength);
  }

  const path = pathToFunc("/image-to-image")();

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.httpBearer);
  const securityInput = secConfig == null ? {} : { httpBearer: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "genImageToImage",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.httpBearer,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "422", "4XX", "500", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result] = await M.match<
    operations.GenImageToImageResponse,
    | errors.HTTPError
    | errors.HTTPValidationError
    | errors.HTTPError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.GenImageToImageResponse$inboundSchema, {
      key: "ImageResponse",
    }),
    M.jsonErr([400, 401], errors.HTTPError$inboundSchema),
    M.jsonErr(422, errors.HTTPValidationError$inboundSchema),
    M.jsonErr(500, errors.HTTPError$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
