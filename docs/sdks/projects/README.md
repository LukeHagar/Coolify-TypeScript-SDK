# Projects
(*projects*)

## Overview

Projects

### Available Operations

* [list](#list) - List
* [create](#create) - Create
* [get](#get) - Get
* [delete](#delete) - Delete
* [update](#update) - Update
* [getEnvironment](#getenvironment) - Environment

## list

List projects.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.projects.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { projectsList } from "coolify/funcs/projectsList.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await projectsList(coolify);

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

**Promise\<[components.Project[]](../../models/.md)\>**

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

Create Project.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.projects.create({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { projectsCreate } from "coolify/funcs/projectsCreate.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await projectsCreate(coolify, {});

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
| `request`                                                                                                                                                                      | [operations.CreateProjectRequestBody](../../models/operations/createprojectrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateProjectResponseBody](../../models/operations/createprojectresponsebody.md)\>**

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

Get project by UUID.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.projects.get({
    uuid: "8ee4c350-f599-4db3-ad60-4e858f981b76",
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
import { projectsGet } from "coolify/funcs/projectsGet.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await projectsGet(coolify, {
    uuid: "8ee4c350-f599-4db3-ad60-4e858f981b76",
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
| `request`                                                                                                                                                                      | [operations.GetProjectByUuidRequest](../../models/operations/getprojectbyuuidrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Project](../../models/components/project.md)\>**

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

Delete project by UUID.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.projects.delete({
    uuid: "9e5be611-8766-4db1-9ad7-f03e9284084f",
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
import { projectsDelete } from "coolify/funcs/projectsDelete.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await projectsDelete(coolify, {
    uuid: "9e5be611-8766-4db1-9ad7-f03e9284084f",
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
| `request`                                                                                                                                                                      | [operations.DeleteProjectByUuidRequest](../../models/operations/deleteprojectbyuuidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteProjectByUuidResponseBody](../../models/operations/deleteprojectbyuuidresponsebody.md)\>**

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

Update Project.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.projects.update({
    uuid: "d493415b-6548-4c8b-8e4a-d0ae131f3835",
    requestBody: {},
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
import { projectsUpdate } from "coolify/funcs/projectsUpdate.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await projectsUpdate(coolify, {
    uuid: "d493415b-6548-4c8b-8e4a-d0ae131f3835",
    requestBody: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateProjectByUuidRequest](../../models/operations/updateprojectbyuuidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateProjectByUuidResponseBody](../../models/operations/updateprojectbyuuidresponsebody.md)\>**

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

## getEnvironment

Get environment by name.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.projects.getEnvironment({
    uuid: "d9b108d3-6f92-44fb-9c22-b9c31c745f88",
    environmentName: "<value>",
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
import { projectsGetEnvironment } from "coolify/funcs/projectsGetEnvironment.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await projectsGetEnvironment(coolify, {
    uuid: "d9b108d3-6f92-44fb-9c22-b9c31c745f88",
    environmentName: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetEnvironmentByNameRequest](../../models/operations/getenvironmentbynamerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Environment](../../models/components/environment.md)\>**

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