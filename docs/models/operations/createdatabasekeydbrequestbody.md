# CreateDatabaseKeydbRequestBody

Database data

## Example Usage

```typescript
import { CreateDatabaseKeydbRequestBody } from "coolify/models/operations";

let value: CreateDatabaseKeydbRequestBody = {
  serverUuid: "<id>",
  projectUuid: "<id>",
  environmentName: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `serverUuid`                                                    | *string*                                                        | :heavy_check_mark:                                              | UUID of the server                                              |
| `projectUuid`                                                   | *string*                                                        | :heavy_check_mark:                                              | UUID of the project                                             |
| `environmentName`                                               | *string*                                                        | :heavy_check_mark:                                              | Name of the environment                                         |
| `destinationUuid`                                               | *string*                                                        | :heavy_minus_sign:                                              | UUID of the destination if the server has multiple destinations |
| `keydbPassword`                                                 | *string*                                                        | :heavy_minus_sign:                                              | KeyDB password                                                  |
| `keydbConf`                                                     | *string*                                                        | :heavy_minus_sign:                                              | KeyDB conf                                                      |
| `name`                                                          | *string*                                                        | :heavy_minus_sign:                                              | Name of the database                                            |
| `description`                                                   | *string*                                                        | :heavy_minus_sign:                                              | Description of the database                                     |
| `image`                                                         | *string*                                                        | :heavy_minus_sign:                                              | Docker Image of the database                                    |
| `isPublic`                                                      | *boolean*                                                       | :heavy_minus_sign:                                              | Is the database public?                                         |
| `publicPort`                                                    | *number*                                                        | :heavy_minus_sign:                                              | Public port of the database                                     |
| `limitsMemory`                                                  | *string*                                                        | :heavy_minus_sign:                                              | Memory limit of the database                                    |
| `limitsMemorySwap`                                              | *string*                                                        | :heavy_minus_sign:                                              | Memory swap limit of the database                               |
| `limitsMemorySwappiness`                                        | *number*                                                        | :heavy_minus_sign:                                              | Memory swappiness of the database                               |
| `limitsMemoryReservation`                                       | *string*                                                        | :heavy_minus_sign:                                              | Memory reservation of the database                              |
| `limitsCpus`                                                    | *string*                                                        | :heavy_minus_sign:                                              | CPU limit of the database                                       |
| `limitsCpuset`                                                  | *string*                                                        | :heavy_minus_sign:                                              | CPU set of the database                                         |
| `limitsCpuShares`                                               | *number*                                                        | :heavy_minus_sign:                                              | CPU shares of the database                                      |
| `instantDeploy`                                                 | *boolean*                                                       | :heavy_minus_sign:                                              | Instant deploy the database                                     |