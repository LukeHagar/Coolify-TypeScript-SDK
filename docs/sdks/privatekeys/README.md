# PrivateKeys
(*privateKeys*)

## Overview

### Available Operations

* [list](#list) - List
* [create](#create) - Create
* [update](#update) - Update
* [get](#get) - Get
* [delete](#delete) - Delete

## list

List all private keys.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.privateKeys.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { privateKeysList } from "coolify/funcs/privateKeysList.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await privateKeysList(coolify);

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

**Promise\<[components.PrivateKey[]](../../models/.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthenticated            | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## create

Create a new private key.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.privateKeys.create({
    privateKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { privateKeysCreate } from "coolify/funcs/privateKeysCreate.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await privateKeysCreate(coolify, {
    privateKey: "<value>",
  });

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
| `request`                                                                                                                                                                      | [operations.CreatePrivateKeyRequestBody](../../models/operations/createprivatekeyrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreatePrivateKeyResponseBody](../../models/operations/createprivatekeyresponsebody.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthenticated            | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## update

Update a private key.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.privateKeys.update({
    privateKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { privateKeysUpdate } from "coolify/funcs/privateKeysUpdate.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await privateKeysUpdate(coolify, {
    privateKey: "<value>",
  });

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
| `request`                                                                                                                                                                      | [operations.UpdatePrivateKeyRequestBody](../../models/operations/updateprivatekeyrequestbody.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdatePrivateKeyResponseBody](../../models/operations/updateprivatekeyresponsebody.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthenticated            | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## get

Get key by UUID.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.privateKeys.get({
    uuid: "de612435-5d53-45e6-bbe3-7f2c13a14f66",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { privateKeysGet } from "coolify/funcs/privateKeysGet.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await privateKeysGet(coolify, {
    uuid: "de612435-5d53-45e6-bbe3-7f2c13a14f66",
  });

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
| `request`                                                                                                                                                                      | [operations.GetPrivateKeyByUuidRequest](../../models/operations/getprivatekeybyuuidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.PrivateKey](../../models/components/privatekey.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthenticated            | 401, 403, 407, 511                | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.NotFound                   | 501, 505                          | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |

## delete

Delete a private key.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.privateKeys.delete({
    uuid: "d12ec548-7853-4eb5-ad51-3372962d2e05",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { privateKeysDelete } from "coolify/funcs/privateKeysDelete.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await privateKeysDelete(coolify, {
    uuid: "d12ec548-7853-4eb5-ad51-3372962d2e05",
  });

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
| `request`                                                                                                                                                                      | [operations.DeletePrivateKeyByUuidRequest](../../models/operations/deleteprivatekeybyuuidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeletePrivateKeyByUuidResponseBody](../../models/operations/deleteprivatekeybyuuidresponsebody.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthenticated            | 401, 403, 407, 511                | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.NotFound                   | 501, 505                          | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |