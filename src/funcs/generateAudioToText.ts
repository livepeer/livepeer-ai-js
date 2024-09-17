/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKCore } from "../core.js";
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
import { isBlobLike } from "../types/blobs.js";
import { Result } from "../types/fp.js";
import { isReadableStream } from "../types/streams.js";

/**
 * Audio To Text
 *
 * @remarks
 * Transcribe audio files to text.
 */
export async function generateAudioToText(
  client$: SDKCore,
  request: components.BodyGenAudioToText,
  options?: RequestOptions,
): Promise<
  Result<
    components.TextResponse,
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
    (value$) => components.BodyGenAudioToText$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = new FormData();

  if (isBlobLike(payload$.audio)) {
    body$.append("audio", payload$.audio);
  } else if (isReadableStream(payload$.audio.content)) {
    const buffer = await readableStreamToArrayBuffer(payload$.audio.content);
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    body$.append("audio", blob);
  } else {
    body$.append(
      "audio",
      new Blob([payload$.audio.content], { type: "application/octet-stream" }),
      payload$.audio.fileName,
    );
  }
  if (payload$.model_id !== undefined) {
    body$.append("model_id", payload$.model_id);
  }

  const path$ = pathToFunc("/audio-to-text")();

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const httpBearer$ = await extractSecurity(client$.options$.httpBearer);
  const security$ = httpBearer$ == null ? {} : { httpBearer: httpBearer$ };
  const context = {
    operationID: "genAudioToText",
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
    errorCodes: ["400", "401", "413", "422", "4XX", "500", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
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
    components.TextResponse,
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
    m$.json(200, components.TextResponse$inboundSchema),
    m$.jsonErr([400, 401, 413, 500], errors.HTTPError$inboundSchema),
    m$.jsonErr(422, errors.HTTPValidationError$inboundSchema),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
