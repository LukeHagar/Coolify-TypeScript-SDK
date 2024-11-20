# ApplicationDeploymentQueue

Project model

## Example Usage

```typescript
import { ApplicationDeploymentQueue } from "coolify/models/components";

let value: ApplicationDeploymentQueue = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *number*           | :heavy_minus_sign: | N/A                |
| `applicationId`    | *string*           | :heavy_minus_sign: | N/A                |
| `deploymentUuid`   | *string*           | :heavy_minus_sign: | N/A                |
| `pullRequestId`    | *number*           | :heavy_minus_sign: | N/A                |
| `forceRebuild`     | *boolean*          | :heavy_minus_sign: | N/A                |
| `commit`           | *string*           | :heavy_minus_sign: | N/A                |
| `status`           | *string*           | :heavy_minus_sign: | N/A                |
| `isWebhook`        | *boolean*          | :heavy_minus_sign: | N/A                |
| `isApi`            | *boolean*          | :heavy_minus_sign: | N/A                |
| `createdAt`        | *string*           | :heavy_minus_sign: | N/A                |
| `updatedAt`        | *string*           | :heavy_minus_sign: | N/A                |
| `logs`             | *string*           | :heavy_minus_sign: | N/A                |
| `currentProcessId` | *string*           | :heavy_minus_sign: | N/A                |
| `restartOnly`      | *boolean*          | :heavy_minus_sign: | N/A                |
| `gitType`          | *string*           | :heavy_minus_sign: | N/A                |
| `serverId`         | *number*           | :heavy_minus_sign: | N/A                |
| `applicationName`  | *string*           | :heavy_minus_sign: | N/A                |
| `serverName`       | *string*           | :heavy_minus_sign: | N/A                |
| `deploymentUrl`    | *string*           | :heavy_minus_sign: | N/A                |
| `destinationId`    | *string*           | :heavy_minus_sign: | N/A                |
| `onlyThisServer`   | *boolean*          | :heavy_minus_sign: | N/A                |
| `rollback`         | *boolean*          | :heavy_minus_sign: | N/A                |
| `commitMessage`    | *string*           | :heavy_minus_sign: | N/A                |