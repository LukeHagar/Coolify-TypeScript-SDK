# CreateDatabaseMariadbRequestBody

Database data

## Example Usage

```typescript
import { CreateDatabaseMariadbRequestBody } from "coolify/models/operations";

let value: CreateDatabaseMariadbRequestBody = {
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
| `mariadbConf`                                                   | *string*                                                        | :heavy_minus_sign:                                              | MariaDB conf                                                    |
| `mariadbRootPassword`                                           | *string*                                                        | :heavy_minus_sign:                                              | MariaDB root password                                           |
| `mariadbUser`                                                   | *string*                                                        | :heavy_minus_sign:                                              | MariaDB user                                                    |
| `mariadbPassword`                                               | *string*                                                        | :heavy_minus_sign:                                              | MariaDB password                                                |
| `mariadbDatabase`                                               | *string*                                                        | :heavy_minus_sign:                                              | MariaDB database                                                |
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