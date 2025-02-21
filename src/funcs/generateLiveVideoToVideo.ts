/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { LivepeerCore } from "../core.js";
import { encodeJSON, encodeSimple } from "../lib/encodings.js";
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
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Live Video To Video
 *
 * @remarks
 * Apply transformations to a live video streamed to the returned endpoints.
 */
export function generateLiveVideoToVideo(
  client: LivepeerCore,
  liveVideoToVideoParams: components.LiveVideoToVideoParams,
  requestID?: string | undefined,
  streamID?: string | undefined,
  options?: RequestOptions,
): APIPromise<
  Result<
    operations.GenLiveVideoToVideoResponse,
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
  return new APIPromise($do(
    client,
    liveVideoToVideoParams,
    requestID,
    streamID,
    options,
  ));
}

async function $do(
  client: LivepeerCore,
  liveVideoToVideoParams: components.LiveVideoToVideoParams,
  requestID?: string | undefined,
  streamID?: string | undefined,
  options?: RequestOptions,
): Promise<
  [
    Result<
      operations.GenLiveVideoToVideoResponse,
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
    >,
    APICall,
  ]
> {
  const input: operations.GenLiveVideoToVideoRequest = {
    liveVideoToVideoParams: liveVideoToVideoParams,
    requestID: requestID,
    streamID: streamID,
  };

  const parsed = safeParse(
    input,
    (value) =>
      operations.GenLiveVideoToVideoRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload.LiveVideoToVideoParams, {
    explode: true,
  });

  const path = pathToFunc("/live-video-to-video")();

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
    "requestID": encodeSimple("requestID", payload.requestID, {
      explode: false,
      charEncoding: "none",
    }),
    "streamID": encodeSimple("streamID", payload.streamID, {
      explode: false,
      charEncoding: "none",
    }),
  }));

  const secConfig = await extractSecurity(client._options.httpBearer);
  const securityInput = secConfig == null ? {} : { httpBearer: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "genLiveVideoToVideo",
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
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "422", "4XX", "500", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
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
    operations.GenLiveVideoToVideoResponse,
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
    M.json(200, operations.GenLiveVideoToVideoResponse$inboundSchema, {
      key: "LiveVideoToVideoResponse",
    }),
    M.jsonErr([400, 401], errors.HTTPError$inboundSchema),
    M.jsonErr(422, errors.HTTPValidationError$inboundSchema),
    M.jsonErr(500, errors.HTTPError$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
