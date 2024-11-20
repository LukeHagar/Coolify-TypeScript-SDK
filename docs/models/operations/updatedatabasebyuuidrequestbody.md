# UpdateDatabaseByUuidRequestBody

Database data

## Example Usage

```typescript
import { UpdateDatabaseByUuidRequestBody } from "coolify/models/operations";

let value: UpdateDatabaseByUuidRequestBody = {};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `name`                             | *string*                           | :heavy_minus_sign:                 | Name of the database               |
| `description`                      | *string*                           | :heavy_minus_sign:                 | Description of the database        |
| `image`                            | *string*                           | :heavy_minus_sign:                 | Docker Image of the database       |
| `isPublic`                         | *boolean*                          | :heavy_minus_sign:                 | Is the database public?            |
| `publicPort`                       | *number*                           | :heavy_minus_sign:                 | Public port of the database        |
| `limitsMemory`                     | *string*                           | :heavy_minus_sign:                 | Memory limit of the database       |
| `limitsMemorySwap`                 | *string*                           | :heavy_minus_sign:                 | Memory swap limit of the database  |
| `limitsMemorySwappiness`           | *number*                           | :heavy_minus_sign:                 | Memory swappiness of the database  |
| `limitsMemoryReservation`          | *string*                           | :heavy_minus_sign:                 | Memory reservation of the database |
| `limitsCpus`                       | *string*                           | :heavy_minus_sign:                 | CPU limit of the database          |
| `limitsCpuset`                     | *string*                           | :heavy_minus_sign:                 | CPU set of the database            |
| `limitsCpuShares`                  | *number*                           | :heavy_minus_sign:                 | CPU shares of the database         |
| `postgresUser`                     | *string*                           | :heavy_minus_sign:                 | PostgreSQL user                    |
| `postgresPassword`                 | *string*                           | :heavy_minus_sign:                 | PostgreSQL password                |
| `postgresDb`                       | *string*                           | :heavy_minus_sign:                 | PostgreSQL database                |
| `postgresInitdbArgs`               | *string*                           | :heavy_minus_sign:                 | PostgreSQL initdb args             |
| `postgresHostAuthMethod`           | *string*                           | :heavy_minus_sign:                 | PostgreSQL host auth method        |
| `postgresConf`                     | *string*                           | :heavy_minus_sign:                 | PostgreSQL conf                    |
| `clickhouseAdminUser`              | *string*                           | :heavy_minus_sign:                 | Clickhouse admin user              |
| `clickhouseAdminPassword`          | *string*                           | :heavy_minus_sign:                 | Clickhouse admin password          |
| `dragonflyPassword`                | *string*                           | :heavy_minus_sign:                 | DragonFly password                 |
| `redisPassword`                    | *string*                           | :heavy_minus_sign:                 | Redis password                     |
| `redisConf`                        | *string*                           | :heavy_minus_sign:                 | Redis conf                         |
| `keydbPassword`                    | *string*                           | :heavy_minus_sign:                 | KeyDB password                     |
| `keydbConf`                        | *string*                           | :heavy_minus_sign:                 | KeyDB conf                         |
| `mariadbConf`                      | *string*                           | :heavy_minus_sign:                 | MariaDB conf                       |
| `mariadbRootPassword`              | *string*                           | :heavy_minus_sign:                 | MariaDB root password              |
| `mariadbUser`                      | *string*                           | :heavy_minus_sign:                 | MariaDB user                       |
| `mariadbPassword`                  | *string*                           | :heavy_minus_sign:                 | MariaDB password                   |
| `mariadbDatabase`                  | *string*                           | :heavy_minus_sign:                 | MariaDB database                   |
| `mongoConf`                        | *string*                           | :heavy_minus_sign:                 | Mongo conf                         |
| `mongoInitdbRootUsername`          | *string*                           | :heavy_minus_sign:                 | Mongo initdb root username         |
| `mongoInitdbRootPassword`          | *string*                           | :heavy_minus_sign:                 | Mongo initdb root password         |
| `mongoInitdbInitDatabase`          | *string*                           | :heavy_minus_sign:                 | Mongo initdb init database         |
| `mysqlRootPassword`                | *string*                           | :heavy_minus_sign:                 | MySQL root password                |
| `mysqlUser`                        | *string*                           | :heavy_minus_sign:                 | MySQL user                         |
| `mysqlDatabase`                    | *string*                           | :heavy_minus_sign:                 | MySQL database                     |
| `mysqlConf`                        | *string*                           | :heavy_minus_sign:                 | MySQL conf                         |