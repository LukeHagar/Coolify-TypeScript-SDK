# Api
(*api*)

## Overview

### Available Operations

* [enable](#enable) - Enable API
* [disable](#disable) - Disable API

## enable

Enable API (only with root permissions).

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.api.enable();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { apiEnable } from "coolify/funcs/apiEnable.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiEnable(coolify);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.EnableApiResponseBody](../../models/operations/enableapiresponsebody.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthenticated            | 401, 407, 511                     | application/json                  |
| errors.EnableApiResponseBody      | 403                               | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## disable

Disable API (only with root permissions).

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.api.disable();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { apiDisable } from "coolify/funcs/apiDisable.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await apiDisable(coolify);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DisableApiResponseBody](../../models/operations/disableapiresponsebody.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthenticated            | 401, 407, 511                     | application/json                  |
| errors.DisableApiResponseBody     | 403                               | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |