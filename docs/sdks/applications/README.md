# Applications
(*applications*)

## Overview

Applications

### Available Operations

* [list](#list) - List
* [createPublic](#createpublic) - Create (Public)
* [createPrivateGithubApp](#createprivategithubapp) - Create (Private - GH App)
* [createPrivateDeployKey](#createprivatedeploykey) - Create (Private - Deploy Key)
* [createDockerfile](#createdockerfile) - Create (Dockerfile)
* [createDockerImage](#createdockerimage) - Create (Docker Image)
* [createDockerCompose](#createdockercompose) - Create (Docker Compose)
* [get](#get) - Get
* [delete](#delete) - Delete
* [update](#update) - Update
* [listEnvs](#listenvs) - List Envs
* [createEnv](#createenv) - Create Env
* [updateEnv](#updateenv) - Update Env
* [updateEnvsBulk](#updateenvsbulk) - Update Envs (Bulk)
* [deleteEnv](#deleteenv) - Delete Env
* [start](#start) - Start
* [stop](#stop) - Stop
* [restart](#restart) - Restart
* [executeCommand](#executecommand) - Execute Command

## list

List all applications.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { applicationsList } from "coolify/funcs/applicationsList.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsList(coolify);

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

**Promise\<[components.Application[]](../../models/.md)\>**

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

## createPublic

Create new application based on a public git repository.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  await coolify.applications.createPublic({
    projectUuid: "<id>",
    serverUuid: "<id>",
    environmentName: "<value>",
    gitRepository: "<value>",
    gitBranch: "<value>",
    buildPack: "nixpacks",
    portsExposes: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { applicationsCreatePublic } from "coolify/funcs/applicationsCreatePublic.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsCreatePublic(coolify, {
    projectUuid: "<id>",
    serverUuid: "<id>",
    environmentName: "<value>",
    gitRepository: "<value>",
    gitBranch: "<value>",
    buildPack: "nixpacks",
    portsExposes: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePublicApplicationRequestBody](../../models/operations/createpublicapplicationrequestbody.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

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

## createPrivateGithubApp

Create new application based on a private repository through a Github App.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  await coolify.applications.createPrivateGithubApp({
    projectUuid: "<id>",
    serverUuid: "<id>",
    environmentName: "<value>",
    githubAppUuid: "<id>",
    gitRepository: "<value>",
    gitBranch: "<value>",
    portsExposes: "<value>",
    buildPack: "dockerfile",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { applicationsCreatePrivateGithubApp } from "coolify/funcs/applicationsCreatePrivateGithubApp.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsCreatePrivateGithubApp(coolify, {
    projectUuid: "<id>",
    serverUuid: "<id>",
    environmentName: "<value>",
    githubAppUuid: "<id>",
    gitRepository: "<value>",
    gitBranch: "<value>",
    portsExposes: "<value>",
    buildPack: "dockerfile",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePrivateGithubAppApplicationRequestBody](../../models/operations/createprivategithubappapplicationrequestbody.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

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

## createPrivateDeployKey

Create new application based on a private repository through a Deploy Key.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  await coolify.applications.createPrivateDeployKey({
    projectUuid: "<id>",
    serverUuid: "<id>",
    environmentName: "<value>",
    privateKeyUuid: "<id>",
    gitRepository: "<value>",
    gitBranch: "<value>",
    portsExposes: "<value>",
    buildPack: "static",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { applicationsCreatePrivateDeployKey } from "coolify/funcs/applicationsCreatePrivateDeployKey.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsCreatePrivateDeployKey(coolify, {
    projectUuid: "<id>",
    serverUuid: "<id>",
    environmentName: "<value>",
    privateKeyUuid: "<id>",
    gitRepository: "<value>",
    gitBranch: "<value>",
    portsExposes: "<value>",
    buildPack: "static",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePrivateDeployKeyApplicationRequestBody](../../models/operations/createprivatedeploykeyapplicationrequestbody.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

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

## createDockerfile

Create new application based on a simple Dockerfile.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  await coolify.applications.createDockerfile({
    projectUuid: "<id>",
    serverUuid: "<id>",
    environmentName: "<value>",
    dockerfile: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { applicationsCreateDockerfile } from "coolify/funcs/applicationsCreateDockerfile.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsCreateDockerfile(coolify, {
    projectUuid: "<id>",
    serverUuid: "<id>",
    environmentName: "<value>",
    dockerfile: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDockerfileApplicationRequestBody](../../models/operations/createdockerfileapplicationrequestbody.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

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

## createDockerImage

Create new application based on a prebuilt docker image

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  await coolify.applications.createDockerImage({
    projectUuid: "<id>",
    serverUuid: "<id>",
    environmentName: "<value>",
    dockerRegistryImageName: "<value>",
    portsExposes: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { applicationsCreateDockerImage } from "coolify/funcs/applicationsCreateDockerImage.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsCreateDockerImage(coolify, {
    projectUuid: "<id>",
    serverUuid: "<id>",
    environmentName: "<value>",
    dockerRegistryImageName: "<value>",
    portsExposes: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDockerimageApplicationRequestBody](../../models/operations/createdockerimageapplicationrequestbody.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

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

## createDockerCompose

Create new application based on a docker-compose file.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  await coolify.applications.createDockerCompose({
    projectUuid: "<id>",
    serverUuid: "<id>",
    environmentName: "<value>",
    dockerComposeRaw: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CoolifyCore } from "coolify/core.js";
import { applicationsCreateDockerCompose } from "coolify/funcs/applicationsCreateDockerCompose.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsCreateDockerCompose(coolify, {
    projectUuid: "<id>",
    serverUuid: "<id>",
    environmentName: "<value>",
    dockerComposeRaw: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDockercomposeApplicationRequestBody](../../models/operations/createdockercomposeapplicationrequestbody.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

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

Get application by UUID.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.get({
    uuid: "61f687df-a2c6-49ae-927c-701e1869129c",
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
import { applicationsGet } from "coolify/funcs/applicationsGet.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsGet(coolify, {
    uuid: "61f687df-a2c6-49ae-927c-701e1869129c",
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
| `request`                                                                                                                                                                      | [operations.GetApplicationByUuidRequest](../../models/operations/getapplicationbyuuidrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Application](../../models/components/application.md)\>**

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

## delete

Delete application by UUID.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.delete({
    uuid: "b7774d3f-40ad-4c95-8c81-888632bd34e1",
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
import { applicationsDelete } from "coolify/funcs/applicationsDelete.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsDelete(coolify, {
    uuid: "b7774d3f-40ad-4c95-8c81-888632bd34e1",
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
| `request`                                                                                                                                                                      | [operations.DeleteApplicationByUuidRequest](../../models/operations/deleteapplicationbyuuidrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteApplicationByUuidResponseBody](../../models/operations/deleteapplicationbyuuidresponsebody.md)\>**

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

Update application by UUID.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.update({
    uuid: "2dd6d1b1-2896-4369-b2ed-d1789d4abe06",
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
import { applicationsUpdate } from "coolify/funcs/applicationsUpdate.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsUpdate(coolify, {
    uuid: "2dd6d1b1-2896-4369-b2ed-d1789d4abe06",
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
| `request`                                                                                                                                                                      | [operations.UpdateApplicationByUuidRequest](../../models/operations/updateapplicationbyuuidrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateApplicationByUuidResponseBody](../../models/operations/updateapplicationbyuuidresponsebody.md)\>**

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

## listEnvs

List all envs by application UUID.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.listEnvs({
    uuid: "c1cca4f0-5746-4721-9989-b05fee4a02e4",
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
import { applicationsListEnvs } from "coolify/funcs/applicationsListEnvs.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsListEnvs(coolify, {
    uuid: "c1cca4f0-5746-4721-9989-b05fee4a02e4",
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
| `request`                                                                                                                                                                      | [operations.ListEnvsByApplicationUuidRequest](../../models/operations/listenvsbyapplicationuuidrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.EnvironmentVariable[]](../../models/.md)\>**

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

## createEnv

Create env by application UUID.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.createEnv({
    uuid: "41e7ad1e-bfed-46b3-b163-d6b1de04f2c9",
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
import { applicationsCreateEnv } from "coolify/funcs/applicationsCreateEnv.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsCreateEnv(coolify, {
    uuid: "41e7ad1e-bfed-46b3-b163-d6b1de04f2c9",
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
| `request`                                                                                                                                                                      | [operations.CreateEnvByApplicationUuidRequest](../../models/operations/createenvbyapplicationuuidrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateEnvByApplicationUuidResponseBody](../../models/operations/createenvbyapplicationuuidresponsebody.md)\>**

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

## updateEnv

Update env by application UUID.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.updateEnv({
    uuid: "38636143-32bc-410a-bf25-57be00b8a243",
    requestBody: {
      key: "<key>",
      value: "<value>",
    },
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
import { applicationsUpdateEnv } from "coolify/funcs/applicationsUpdateEnv.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsUpdateEnv(coolify, {
    uuid: "38636143-32bc-410a-bf25-57be00b8a243",
    requestBody: {
      key: "<key>",
      value: "<value>",
    },
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
| `request`                                                                                                                                                                      | [operations.UpdateEnvByApplicationUuidRequest](../../models/operations/updateenvbyapplicationuuidrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateEnvByApplicationUuidResponseBody](../../models/operations/updateenvbyapplicationuuidresponsebody.md)\>**

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

## updateEnvsBulk

Update multiple envs by application UUID.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.updateEnvsBulk({
    uuid: "0a6652ad-7216-4c18-9026-f7327599db39",
    requestBody: {
      data: [
        {},
      ],
    },
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
import { applicationsUpdateEnvsBulk } from "coolify/funcs/applicationsUpdateEnvsBulk.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsUpdateEnvsBulk(coolify, {
    uuid: "0a6652ad-7216-4c18-9026-f7327599db39",
    requestBody: {
      data: [
        {},
      ],
    },
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
| `request`                                                                                                                                                                      | [operations.UpdateEnvsByApplicationUuidRequest](../../models/operations/updateenvsbyapplicationuuidrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateEnvsByApplicationUuidResponseBody](../../models/operations/updateenvsbyapplicationuuidresponsebody.md)\>**

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

## deleteEnv

Delete env by UUID.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.deleteEnv({
    uuid: "29178270-449b-4b61-8c4c-a70fe8abfb71",
    envUuid: "33106c3f-066e-4bc0-aa2c-bde0210b2cd0",
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
import { applicationsDeleteEnv } from "coolify/funcs/applicationsDeleteEnv.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsDeleteEnv(coolify, {
    uuid: "29178270-449b-4b61-8c4c-a70fe8abfb71",
    envUuid: "33106c3f-066e-4bc0-aa2c-bde0210b2cd0",
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
| `request`                                                                                                                                                                      | [operations.DeleteEnvByApplicationUuidRequest](../../models/operations/deleteenvbyapplicationuuidrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteEnvByApplicationUuidResponseBody](../../models/operations/deleteenvbyapplicationuuidresponsebody.md)\>**

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

## start

Start application. `Post` request is also accepted.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.start({
    uuid: "572630a1-cd73-4275-880b-f045ee102419",
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
import { applicationsStart } from "coolify/funcs/applicationsStart.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsStart(coolify, {
    uuid: "572630a1-cd73-4275-880b-f045ee102419",
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
| `request`                                                                                                                                                                      | [operations.StartApplicationByUuidRequest](../../models/operations/startapplicationbyuuidrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StartApplicationByUuidResponseBody](../../models/operations/startapplicationbyuuidresponsebody.md)\>**

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

## stop

Stop application. `Post` request is also accepted.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.stop({
    uuid: "c7f49fe8-2360-46f6-9bda-86c275c44858",
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
import { applicationsStop } from "coolify/funcs/applicationsStop.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsStop(coolify, {
    uuid: "c7f49fe8-2360-46f6-9bda-86c275c44858",
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
| `request`                                                                                                                                                                      | [operations.StopApplicationByUuidRequest](../../models/operations/stopapplicationbyuuidrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.StopApplicationByUuidResponseBody](../../models/operations/stopapplicationbyuuidresponsebody.md)\>**

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

## restart

Restart application. `Post` request is also accepted.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.restart({
    uuid: "f6e08c98-9f12-4fa8-a341-05b629d9a23a",
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
import { applicationsRestart } from "coolify/funcs/applicationsRestart.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsRestart(coolify, {
    uuid: "f6e08c98-9f12-4fa8-a341-05b629d9a23a",
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
| `request`                                                                                                                                                                      | [operations.RestartApplicationByUuidRequest](../../models/operations/restartapplicationbyuuidrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RestartApplicationByUuidResponseBody](../../models/operations/restartapplicationbyuuidresponsebody.md)\>**

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

## executeCommand

Execute a command on the application's current container.

### Example Usage

```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.executeCommand({
    uuid: "5be3e72e-82ca-4e4e-862e-5e0cf0b853f6",
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
import { applicationsExecuteCommand } from "coolify/funcs/applicationsExecuteCommand.js";

// Use `CoolifyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const coolify = new CoolifyCore({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await applicationsExecuteCommand(coolify, {
    uuid: "5be3e72e-82ca-4e4e-862e-5e0cf0b853f6",
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
| `request`                                                                                                                                                                      | [operations.ExecuteCommandApplicationRequest](../../models/operations/executecommandapplicationrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ExecuteCommandApplicationResponseBody](../../models/operations/executecommandapplicationresponsebody.md)\>**

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