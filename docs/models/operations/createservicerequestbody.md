# CreateServiceRequestBody

## Example Usage

```typescript
import { CreateServiceRequestBody } from "coolify/models/operations";

let value: CreateServiceRequestBody = {
  type: "classicpress-with-mysql",
  projectUuid: "<id>",
  environmentName: "<value>",
  serverUuid: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `type`                                                          | [operations.Type](../../models/operations/type.md)              | :heavy_check_mark:                                              | The one-click service type                                      |
| `name`                                                          | *string*                                                        | :heavy_minus_sign:                                              | Name of the service.                                            |
| `description`                                                   | *string*                                                        | :heavy_minus_sign:                                              | Description of the service.                                     |
| `projectUuid`                                                   | *string*                                                        | :heavy_check_mark:                                              | Project UUID.                                                   |
| `environmentName`                                               | *string*                                                        | :heavy_check_mark:                                              | Environment name.                                               |
| `serverUuid`                                                    | *string*                                                        | :heavy_check_mark:                                              | Server UUID.                                                    |
| `destinationUuid`                                               | *string*                                                        | :heavy_minus_sign:                                              | Destination UUID. Required if server has multiple destinations. |
| `instantDeploy`                                                 | *boolean*                                                       | :heavy_minus_sign:                                              | Start the service immediately after creation.                   |