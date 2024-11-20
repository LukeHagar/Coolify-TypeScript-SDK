# CreateDatabasePostgresqlRequestBody

Database data

## Example Usage

```typescript
import { CreateDatabasePostgresqlRequestBody } from "coolify/models/operations";

let value: CreateDatabasePostgresqlRequestBody = {
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
| `postgresUser`                                                  | *string*                                                        | :heavy_minus_sign:                                              | PostgreSQL user                                                 |
| `postgresPassword`                                              | *string*                                                        | :heavy_minus_sign:                                              | PostgreSQL password                                             |
| `postgresDb`                                                    | *string*                                                        | :heavy_minus_sign:                                              | PostgreSQL database                                             |
| `postgresInitdbArgs`                                            | *string*                                                        | :heavy_minus_sign:                                              | PostgreSQL initdb args                                          |
| `postgresHostAuthMethod`                                        | *string*                                                        | :heavy_minus_sign:                                              | PostgreSQL host auth method                                     |
| `postgresConf`                                                  | *string*                                                        | :heavy_minus_sign:                                              | PostgreSQL conf                                                 |
| `destinationUuid`                                               | *string*                                                        | :heavy_minus_sign:                                              | UUID of the destination if the server has multiple destinations |
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