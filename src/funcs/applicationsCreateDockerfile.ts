/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { CoolifyCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Create (Dockerfile)
 *
 * @remarks
 * Create new application based on a simple Dockerfile.
 */
export async function applicationsCreateDockerfile(
  client: CoolifyCore,
  request: operations.CreateDockerfileApplicationRequestBody,
  options?: RequestOptions,
): Promise<
  Result<
    void,
    | errors.BadRequest
    | errors.Unauthenticated
    | errors.NotFound
    | errors.Timeout
    | errors.RateLimited
    | errors.InternalServerError
    | APIError
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
    (value) =>
      operations.CreateDockerfileApplicationRequestBody$outboundSchema.parse(
        value,
      ),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/applications/dockerfile")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.bearerAuth);
  const securityInput = secConfig == null ? {} : { bearerAuth: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "create-dockerfile-application",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.bearerAuth,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
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
    errorCodes: [
      "400",
      "401",
      "403",
      "404",
      "407",
      "408",
      "413",
      "414",
      "415",
      "422",
      "429",
      "431",
      "4XX",
      "500",
      "501",
      "502",
      "503",
      "504",
      "505",
      "506",
      "507",
      "508",
      "510",
      "511",
      "5XX",
    ],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    void,
    | errors.BadRequest
    | errors.Unauthenticated
    | errors.NotFound
    | errors.Timeout
    | errors.RateLimited
    | errors.InternalServerError
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.nil(200, z.void()),
    M.jsonErr(
      [400, 413, 414, 415, 422, 431, 510],
      errors.BadRequest$inboundSchema,
    ),
    M.jsonErr([401, 403, 407, 511], errors.Unauthenticated$inboundSchema),
    M.jsonErr([404, 501, 505], errors.NotFound$inboundSchema),
    M.jsonErr([408, 504], errors.Timeout$inboundSchema),
    M.jsonErr(429, errors.RateLimited$inboundSchema),
    M.jsonErr(
      [500, 502, 503, 506, 507, 508],
      errors.InternalServerError$inboundSchema,
    ),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}