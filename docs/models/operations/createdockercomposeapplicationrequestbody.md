# CreateDockercomposeApplicationRequestBody

Application object that needs to be created.

## Example Usage

```typescript
import { CreateDockercomposeApplicationRequestBody } from "coolify/models/operations";

let value: CreateDockercomposeApplicationRequestBody = {
  projectUuid: "<id>",
  serverUuid: "<id>",
  environmentName: "<value>",
  dockerComposeRaw: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `projectUuid`                                                         | *string*                                                              | :heavy_check_mark:                                                    | The project UUID.                                                     |
| `serverUuid`                                                          | *string*                                                              | :heavy_check_mark:                                                    | The server UUID.                                                      |
| `environmentName`                                                     | *string*                                                              | :heavy_check_mark:                                                    | The environment name.                                                 |
| `dockerComposeRaw`                                                    | *string*                                                              | :heavy_check_mark:                                                    | The Docker Compose raw content.                                       |
| `destinationUuid`                                                     | *string*                                                              | :heavy_minus_sign:                                                    | The destination UUID if the server has more than one destinations.    |
| `name`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | The application name.                                                 |
| `description`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | The application description.                                          |
| `instantDeploy`                                                       | *boolean*                                                             | :heavy_minus_sign:                                                    | The flag to indicate if the application should be deployed instantly. |
| `useBuildServer`                                                      | *boolean*                                                             | :heavy_minus_sign:                                                    | Use build server.                                                     |