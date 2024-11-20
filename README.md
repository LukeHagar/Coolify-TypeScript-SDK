<div align="center">
    <img width="300px" src="https://coolify.io/docs/_astro/coolify-transparent.uB67yhAU.svg">
    <h1>Coolify Typescript SDK</h1>
    <p><strong>Self-hosting with superpowers.</strong></p>
    <p>Developer-friendly & type-safe Typescript SDK specifically catered to leverage the <strong>Coolify</strong> API.</p>
    <a href="https://coolify.io/docs/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=4c2cec&style=for-the-badge" /></a>
    <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" /></a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/lukehagar/lukehagar). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add https://github.com/LukeHagar/Coolify-TypeScript-SDK
```

### PNPM

```bash
pnpm add https://github.com/LukeHagar/Coolify-TypeScript-SDK
```

### Bun

```bash
bun add https://github.com/LukeHagar/Coolify-TypeScript-SDK
```

### Yarn

```bash
yarn add https://github.com/LukeHagar/Coolify-TypeScript-SDK zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [api](docs/sdks/api/README.md)

* [enable](docs/sdks/api/README.md#enable) - Enable API
* [disable](docs/sdks/api/README.md#disable) - Disable API

### [applications](docs/sdks/applications/README.md)

* [list](docs/sdks/applications/README.md#list) - List
* [createPublic](docs/sdks/applications/README.md#createpublic) - Create (Public)
* [createPrivateGithubApp](docs/sdks/applications/README.md#createprivategithubapp) - Create (Private - GH App)
* [createPrivateDeployKey](docs/sdks/applications/README.md#createprivatedeploykey) - Create (Private - Deploy Key)
* [createDockerfile](docs/sdks/applications/README.md#createdockerfile) - Create (Dockerfile)
* [createDockerImage](docs/sdks/applications/README.md#createdockerimage) - Create (Docker Image)
* [createDockerCompose](docs/sdks/applications/README.md#createdockercompose) - Create (Docker Compose)
* [get](docs/sdks/applications/README.md#get) - Get
* [delete](docs/sdks/applications/README.md#delete) - Delete
* [update](docs/sdks/applications/README.md#update) - Update
* [listEnvs](docs/sdks/applications/README.md#listenvs) - List Envs
* [createEnv](docs/sdks/applications/README.md#createenv) - Create Env
* [updateEnv](docs/sdks/applications/README.md#updateenv) - Update Env
* [updateEnvsBulk](docs/sdks/applications/README.md#updateenvsbulk) - Update Envs (Bulk)
* [deleteEnv](docs/sdks/applications/README.md#deleteenv) - Delete Env
* [start](docs/sdks/applications/README.md#start) - Start
* [stop](docs/sdks/applications/README.md#stop) - Stop
* [restart](docs/sdks/applications/README.md#restart) - Restart
* [executeCommand](docs/sdks/applications/README.md#executecommand) - Execute Command


### [databases](docs/sdks/databases/README.md)

* [list](docs/sdks/databases/README.md#list) - List
* [get](docs/sdks/databases/README.md#get) - Get
* [delete](docs/sdks/databases/README.md#delete) - Delete
* [update](docs/sdks/databases/README.md#update) - Update
* [createPostgresql](docs/sdks/databases/README.md#createpostgresql) - Create (PostgreSQL)
* [createClickhouse](docs/sdks/databases/README.md#createclickhouse) - Create (Clickhouse)
* [createDragonfly](docs/sdks/databases/README.md#createdragonfly) - Create (DragonFly)
* [createRedis](docs/sdks/databases/README.md#createredis) - Create (Redis)
* [createKeydb](docs/sdks/databases/README.md#createkeydb) - Create (KeyDB)
* [createMariadb](docs/sdks/databases/README.md#createmariadb) - Create (MariaDB)
* [createMysql](docs/sdks/databases/README.md#createmysql) - Create (MySQL)
* [createMongodb](docs/sdks/databases/README.md#createmongodb) - Create (MongoDB)
* [start](docs/sdks/databases/README.md#start) - Start
* [stop](docs/sdks/databases/README.md#stop) - Stop
* [restart](docs/sdks/databases/README.md#restart) - Restart

### [deployments](docs/sdks/deployments/README.md)

* [list](docs/sdks/deployments/README.md#list) - List
* [get](docs/sdks/deployments/README.md#get) - Get
* [deployByTagOrUuid](docs/sdks/deployments/README.md#deploybytagoruuid) - Deploy

### [health](docs/sdks/health/README.md)

* [check](docs/sdks/health/README.md#check) - Healthcheck

### [privateKeys](docs/sdks/privatekeys/README.md)

* [list](docs/sdks/privatekeys/README.md#list) - List
* [create](docs/sdks/privatekeys/README.md#create) - Create
* [update](docs/sdks/privatekeys/README.md#update) - Update
* [get](docs/sdks/privatekeys/README.md#get) - Get
* [delete](docs/sdks/privatekeys/README.md#delete) - Delete

### [projects](docs/sdks/projects/README.md)

* [list](docs/sdks/projects/README.md#list) - List
* [create](docs/sdks/projects/README.md#create) - Create
* [get](docs/sdks/projects/README.md#get) - Get
* [delete](docs/sdks/projects/README.md#delete) - Delete
* [update](docs/sdks/projects/README.md#update) - Update
* [getEnvironment](docs/sdks/projects/README.md#getenvironment) - Environment

### [resources](docs/sdks/resources/README.md)

* [list](docs/sdks/resources/README.md#list) - List

### [servers](docs/sdks/servers/README.md)

* [list](docs/sdks/servers/README.md#list) - List
* [create](docs/sdks/servers/README.md#create) - Create
* [get](docs/sdks/servers/README.md#get) - Get
* [delete](docs/sdks/servers/README.md#delete) - Delete
* [update](docs/sdks/servers/README.md#update) - Update
* [getResources](docs/sdks/servers/README.md#getresources) - Resources
* [getDomains](docs/sdks/servers/README.md#getdomains) - Domains
* [validate](docs/sdks/servers/README.md#validate) - Validate

### [services](docs/sdks/services/README.md)

* [list](docs/sdks/services/README.md#list) - List
* [create](docs/sdks/services/README.md#create) - Create
* [get](docs/sdks/services/README.md#get) - Get
* [delete](docs/sdks/services/README.md#delete) - Delete
* [listEnvs](docs/sdks/services/README.md#listenvs) - List Envs
* [createEnv](docs/sdks/services/README.md#createenv) - Create Env
* [updateEnv](docs/sdks/services/README.md#updateenv) - Update Env
* [updateEnvsBulk](docs/sdks/services/README.md#updateenvsbulk) - Update Envs (Bulk)
* [deleteEnv](docs/sdks/services/README.md#deleteenv) - Delete Env
* [start](docs/sdks/services/README.md#start) - Start
* [stop](docs/sdks/services/README.md#stop) - Stop
* [restart](docs/sdks/services/README.md#restart) - Restart

### [teams](docs/sdks/teams/README.md)

* [list](docs/sdks/teams/README.md#list) - List
* [get](docs/sdks/teams/README.md#get) - Get
* [getMembers](docs/sdks/teams/README.md#getmembers) - Members
* [getCurrent](docs/sdks/teams/README.md#getcurrent) - Authenticated Team
* [getCurrentMembers](docs/sdks/teams/README.md#getcurrentmembers) - Authenticated Team Members

### [version](docs/sdks/version/README.md)

* [get](docs/sdks/version/README.md#get) - Version

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`apiDisable`](docs/sdks/api/README.md#disable) - Disable API
- [`apiEnable`](docs/sdks/api/README.md#enable) - Enable API
- [`applicationsCreateDockerCompose`](docs/sdks/applications/README.md#createdockercompose) - Create (Docker Compose)
- [`applicationsCreateDockerfile`](docs/sdks/applications/README.md#createdockerfile) - Create (Dockerfile)
- [`applicationsCreateDockerImage`](docs/sdks/applications/README.md#createdockerimage) - Create (Docker Image)
- [`applicationsCreateEnv`](docs/sdks/applications/README.md#createenv) - Create Env
- [`applicationsCreatePrivateDeployKey`](docs/sdks/applications/README.md#createprivatedeploykey) - Create (Private - Deploy Key)
- [`applicationsCreatePrivateGithubApp`](docs/sdks/applications/README.md#createprivategithubapp) - Create (Private - GH App)
- [`applicationsCreatePublic`](docs/sdks/applications/README.md#createpublic) - Create (Public)
- [`applicationsDelete`](docs/sdks/applications/README.md#delete) - Delete
- [`applicationsDeleteEnv`](docs/sdks/applications/README.md#deleteenv) - Delete Env
- [`applicationsExecuteCommand`](docs/sdks/applications/README.md#executecommand) - Execute Command
- [`applicationsGet`](docs/sdks/applications/README.md#get) - Get
- [`applicationsList`](docs/sdks/applications/README.md#list) - List
- [`applicationsListEnvs`](docs/sdks/applications/README.md#listenvs) - List Envs
- [`applicationsRestart`](docs/sdks/applications/README.md#restart) - Restart
- [`applicationsStart`](docs/sdks/applications/README.md#start) - Start
- [`applicationsStop`](docs/sdks/applications/README.md#stop) - Stop
- [`applicationsUpdate`](docs/sdks/applications/README.md#update) - Update
- [`applicationsUpdateEnv`](docs/sdks/applications/README.md#updateenv) - Update Env
- [`applicationsUpdateEnvsBulk`](docs/sdks/applications/README.md#updateenvsbulk) - Update Envs (Bulk)
- [`databasesCreateClickhouse`](docs/sdks/databases/README.md#createclickhouse) - Create (Clickhouse)
- [`databasesCreateDragonfly`](docs/sdks/databases/README.md#createdragonfly) - Create (DragonFly)
- [`databasesCreateKeydb`](docs/sdks/databases/README.md#createkeydb) - Create (KeyDB)
- [`databasesCreateMariadb`](docs/sdks/databases/README.md#createmariadb) - Create (MariaDB)
- [`databasesCreateMongodb`](docs/sdks/databases/README.md#createmongodb) - Create (MongoDB)
- [`databasesCreateMysql`](docs/sdks/databases/README.md#createmysql) - Create (MySQL)
- [`databasesCreatePostgresql`](docs/sdks/databases/README.md#createpostgresql) - Create (PostgreSQL)
- [`databasesCreateRedis`](docs/sdks/databases/README.md#createredis) - Create (Redis)
- [`databasesDelete`](docs/sdks/databases/README.md#delete) - Delete
- [`databasesGet`](docs/sdks/databases/README.md#get) - Get
- [`databasesList`](docs/sdks/databases/README.md#list) - List
- [`databasesRestart`](docs/sdks/databases/README.md#restart) - Restart
- [`databasesStart`](docs/sdks/databases/README.md#start) - Start
- [`databasesStop`](docs/sdks/databases/README.md#stop) - Stop
- [`databasesUpdate`](docs/sdks/databases/README.md#update) - Update
- [`deploymentsDeployByTagOrUuid`](docs/sdks/deployments/README.md#deploybytagoruuid) - Deploy
- [`deploymentsGet`](docs/sdks/deployments/README.md#get) - Get
- [`deploymentsList`](docs/sdks/deployments/README.md#list) - List
- [`healthCheck`](docs/sdks/health/README.md#check) - Healthcheck
- [`privateKeysCreate`](docs/sdks/privatekeys/README.md#create) - Create
- [`privateKeysDelete`](docs/sdks/privatekeys/README.md#delete) - Delete
- [`privateKeysGet`](docs/sdks/privatekeys/README.md#get) - Get
- [`privateKeysList`](docs/sdks/privatekeys/README.md#list) - List
- [`privateKeysUpdate`](docs/sdks/privatekeys/README.md#update) - Update
- [`projectsCreate`](docs/sdks/projects/README.md#create) - Create
- [`projectsDelete`](docs/sdks/projects/README.md#delete) - Delete
- [`projectsGet`](docs/sdks/projects/README.md#get) - Get
- [`projectsGetEnvironment`](docs/sdks/projects/README.md#getenvironment) - Environment
- [`projectsList`](docs/sdks/projects/README.md#list) - List
- [`projectsUpdate`](docs/sdks/projects/README.md#update) - Update
- [`resourcesList`](docs/sdks/resources/README.md#list) - List
- [`serversCreate`](docs/sdks/servers/README.md#create) - Create
- [`serversDelete`](docs/sdks/servers/README.md#delete) - Delete
- [`serversGet`](docs/sdks/servers/README.md#get) - Get
- [`serversGetDomains`](docs/sdks/servers/README.md#getdomains) - Domains
- [`serversGetResources`](docs/sdks/servers/README.md#getresources) - Resources
- [`serversList`](docs/sdks/servers/README.md#list) - List
- [`serversUpdate`](docs/sdks/servers/README.md#update) - Update
- [`serversValidate`](docs/sdks/servers/README.md#validate) - Validate
- [`servicesCreate`](docs/sdks/services/README.md#create) - Create
- [`servicesCreateEnv`](docs/sdks/services/README.md#createenv) - Create Env
- [`servicesDelete`](docs/sdks/services/README.md#delete) - Delete
- [`servicesDeleteEnv`](docs/sdks/services/README.md#deleteenv) - Delete Env
- [`servicesGet`](docs/sdks/services/README.md#get) - Get
- [`servicesList`](docs/sdks/services/README.md#list) - List
- [`servicesListEnvs`](docs/sdks/services/README.md#listenvs) - List Envs
- [`servicesRestart`](docs/sdks/services/README.md#restart) - Restart
- [`servicesStart`](docs/sdks/services/README.md#start) - Start
- [`servicesStop`](docs/sdks/services/README.md#stop) - Stop
- [`servicesUpdateEnv`](docs/sdks/services/README.md#updateenv) - Update Env
- [`servicesUpdateEnvsBulk`](docs/sdks/services/README.md#updateenvsbulk) - Update Envs (Bulk)
- [`teamsGet`](docs/sdks/teams/README.md#get) - Get
- [`teamsGetCurrent`](docs/sdks/teams/README.md#getcurrent) - Authenticated Team
- [`teamsGetCurrentMembers`](docs/sdks/teams/README.md#getcurrentmembers) - Authenticated Team Members
- [`teamsGetMembers`](docs/sdks/teams/README.md#getmembers) - Members
- [`teamsList`](docs/sdks/teams/README.md#list) - List
- [`versionGet`](docs/sdks/version/README.md#get) - Version

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.list({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.APIError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `list` method may throw the following errors:

| Error Type                 | Status Code                       | Content Type     |
| -------------------------- | --------------------------------- | ---------------- |
| errors.BadRequest          | 400, 413, 414, 415, 422, 431, 510 | application/json |
| errors.Unauthenticated     | 401, 403, 407, 511                | application/json |
| errors.NotFound            | 404, 501, 505                     | application/json |
| errors.Timeout             | 408, 504                          | application/json |
| errors.RateLimited         | 429                               | application/json |
| errors.InternalServerError | 500, 502, 503, 506, 507, 508      | application/json |
| errors.APIError            | 4XX, 5XX                          | \*/\*            |

```typescript
import { Coolify } from "coolify";
import {
  BadRequest,
  InternalServerError,
  NotFound,
  RateLimited,
  SDKValidationError,
  Timeout,
  Unauthenticated,
} from "coolify/models/errors";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  let result;
  try {
    result = await coolify.applications.list();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof BadRequest): {
        // Handle err.data$: BadRequestData
        console.error(err);
        return;
      }
      case (err instanceof Unauthenticated): {
        // Handle err.data$: UnauthenticatedData
        console.error(err);
        return;
      }
      case (err instanceof NotFound): {
        // Handle err.data$: NotFoundData
        console.error(err);
        return;
      }
      case (err instanceof Timeout): {
        // Handle err.data$: TimeoutData
        console.error(err);
        return;
      }
      case (err instanceof RateLimited): {
        // Handle err.data$: RateLimitedData
        console.error(err);
        return;
      }
      case (err instanceof InternalServerError): {
        // Handle err.data$: InternalServerErrorData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  serverURL: "https://app.coolify.io/api/v1",
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Coolify } from "coolify";
import { HTTPClient } from "coolify/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Coolify({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable  |
| ------------ | ---- | ----------- | --------------------- |
| `bearerAuth` | http | HTTP Bearer | `COOLIFY_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Coolify } from "coolify";

const sdk = new Coolify({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `COOLIFY_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=coolify&utm_campaign=typescript)
