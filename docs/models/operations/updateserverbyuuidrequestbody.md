# UpdateServerByUuidRequestBody

Server updated.

## Example Usage

```typescript
import { UpdateServerByUuidRequestBody } from "coolify/models/operations";

let value: UpdateServerByUuidRequestBody = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | The name of the server.                                                                          |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | The description of the server.                                                                   |
| `ip`                                                                                             | *string*                                                                                         | :heavy_minus_sign:                                                                               | The IP of the server.                                                                            |
| `port`                                                                                           | *number*                                                                                         | :heavy_minus_sign:                                                                               | The port of the server.                                                                          |
| `user`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | The user of the server.                                                                          |
| `privateKeyUuid`                                                                                 | *string*                                                                                         | :heavy_minus_sign:                                                                               | The UUID of the private key.                                                                     |
| `isBuildServer`                                                                                  | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Is build server.                                                                                 |
| `instantValidate`                                                                                | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | Instant validate.                                                                                |
| `proxyType`                                                                                      | [operations.UpdateServerByUuidProxyType](../../models/operations/updateserverbyuuidproxytype.md) | :heavy_minus_sign:                                                                               | The proxy type.                                                                                  |