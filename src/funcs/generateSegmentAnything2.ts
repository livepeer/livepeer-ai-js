/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { LivepeerCore } from "../core.js";
import { readableStreamToArrayBuffer } from "../lib/files.js";
import * as M from "../lib/matchers.js";
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
 * Segment Anything 2
 *
 * @remarks
 * Segment objects in an image.
 */
export async function generateSegmentAnything2(
  client: LivepeerCore,
  request: components.BodyGenSegmentAnything2,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GenSegmentAnything2Response,
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
  const parsed = safeParse(
    request,
    (value) => components.BodyGenSegmentAnything2$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = new FormData();

  if (isBlobLike(payload.image)) {
    body.append("image", payload.image);
  } else if (isReadableStream(payload.image.content)) {
    const buffer = await readableStreamToArrayBuffer(payload.image.content);
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    body.append("image", blob);
  } else {
    body.append(
      "image",
      new Blob([payload.image.content], { type: "application/octet-stream" }),
      payload.image.fileName,
    );
  }
  if (payload.box !== undefined) {
    body.append("box", payload.box);
  }
  if (payload.mask_input !== undefined) {
    body.append("mask_input", payload.mask_input);
  }
  if (payload.model_id !== undefined) {
    body.append("model_id", payload.model_id);
  }
  if (payload.multimask_output !== undefined) {
    body.append("multimask_output", String(payload.multimask_output));
  }
  if (payload.normalize_coords !== undefined) {
    body.append("normalize_coords", String(payload.normalize_coords));
  }
  if (payload.point_coords !== undefined) {
    body.append("point_coords", payload.point_coords);
  }
  if (payload.point_labels !== undefined) {
    body.append("point_labels", payload.point_labels);
  }
  if (payload.return_logits !== undefined) {
    body.append("return_logits", String(payload.return_logits));
  }

  const path = pathToFunc("/segment-anything-2")();

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.httpBearer);
  const securityInput = secConfig == null ? {} : { httpBearer: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "genSegmentAnything2",
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
    operations.GenSegmentAnything2Response,
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
    M.json(200, operations.GenSegmentAnything2Response$inboundSchema, {
      key: "MasksResponse",
    }),
    M.jsonErr([400, 401, 500], errors.HTTPError$inboundSchema),
    M.jsonErr(422, errors.HTTPValidationError$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
