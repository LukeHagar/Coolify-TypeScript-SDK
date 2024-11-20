# Service

Service model

## Example Usage

```typescript
import { Service } from "coolify/models/components";

let value: Service = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *number*                                                                     | :heavy_minus_sign:                                                           | The unique identifier of the service. Only used for database identification. |
| `uuid`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The unique identifier of the service.                                        |
| `name`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The name of the service.                                                     |
| `environmentId`                                                              | *number*                                                                     | :heavy_minus_sign:                                                           | The unique identifier of the environment where the service is attached to.   |
| `serverId`                                                                   | *number*                                                                     | :heavy_minus_sign:                                                           | The unique identifier of the server where the service is running.            |
| `description`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | The description of the service.                                              |
| `dockerComposeRaw`                                                           | *string*                                                                     | :heavy_minus_sign:                                                           | The raw docker-compose.yml file of the service.                              |
| `dockerCompose`                                                              | *string*                                                                     | :heavy_minus_sign:                                                           | The docker-compose.yml file that is parsed and modified by Coolify.          |
| `destinationType`                                                            | *string*                                                                     | :heavy_minus_sign:                                                           | Destination type.                                                            |
| `destinationId`                                                              | *number*                                                                     | :heavy_minus_sign:                                                           | The unique identifier of the destination where the service is running.       |
| `connectToDockerNetwork`                                                     | *boolean*                                                                    | :heavy_minus_sign:                                                           | The flag to connect the service to the predefined Docker network.            |
| `isContainerLabelEscapeEnabled`                                              | *boolean*                                                                    | :heavy_minus_sign:                                                           | The flag to enable the container label escape.                               |
| `isContainerLabelReadonlyEnabled`                                            | *boolean*                                                                    | :heavy_minus_sign:                                                           | The flag to enable the container label readonly.                             |
| `configHash`                                                                 | *string*                                                                     | :heavy_minus_sign:                                                           | The hash of the service configuration.                                       |
| `serviceType`                                                                | *string*                                                                     | :heavy_minus_sign:                                                           | The type of the service.                                                     |
| `createdAt`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | The date and time when the service was created.                              |
| `updatedAt`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | The date and time when the service was last updated.                         |
| `deletedAt`                                                                  | *string*                                                                     | :heavy_minus_sign:                                                           | The date and time when the service was deleted.                              |