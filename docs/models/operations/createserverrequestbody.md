# CreateServerRequestBody

Server created.

## Example Usage

```typescript
import { CreateServerRequestBody } from "coolify/models/operations";

let value: CreateServerRequestBody = {
  name: "My Server",
  description: "My Server Description",
  ip: "127.0.0.1",
  port: 22,
  user: "root",
  privateKeyUuid: "og888os",
  isBuildServer: false,
  instantValidate: false,
  proxyType: "traefik",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_minus_sign:                                           | The name of the server.                                      | My Server                                                    |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | The description of the server.                               | My Server Description                                        |
| `ip`                                                         | *string*                                                     | :heavy_minus_sign:                                           | The IP of the server.                                        | 127.0.0.1                                                    |
| `port`                                                       | *number*                                                     | :heavy_minus_sign:                                           | The port of the server.                                      | 22                                                           |
| `user`                                                       | *string*                                                     | :heavy_minus_sign:                                           | The user of the server.                                      | root                                                         |
| `privateKeyUuid`                                             | *string*                                                     | :heavy_minus_sign:                                           | The UUID of the private key.                                 | og888os                                                      |
| `isBuildServer`                                              | *boolean*                                                    | :heavy_minus_sign:                                           | Is build server.                                             | false                                                        |
| `instantValidate`                                            | *boolean*                                                    | :heavy_minus_sign:                                           | Instant validate.                                            | false                                                        |
| `proxyType`                                                  | [operations.ProxyType](../../models/operations/proxytype.md) | :heavy_minus_sign:                                           | The proxy type.                                              | traefik                                                      |