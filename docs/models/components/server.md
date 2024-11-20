# Server

Server model

## Example Usage

```typescript
import { Server } from "coolify/models/components";

let value: Server = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *number*                                                                | :heavy_minus_sign:                                                      | The server ID.                                                          |
| `uuid`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | The server UUID.                                                        |
| `name`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | The server name.                                                        |
| `description`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | The server description.                                                 |
| `ip`                                                                    | *string*                                                                | :heavy_minus_sign:                                                      | The IP address.                                                         |
| `user`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | The user.                                                               |
| `port`                                                                  | *number*                                                                | :heavy_minus_sign:                                                      | The port number.                                                        |
| `proxy`                                                                 | [components.Proxy](../../models/components/proxy.md)                    | :heavy_minus_sign:                                                      | The proxy configuration.                                                |
| `proxyType`                                                             | [components.ProxyType](../../models/components/proxytype.md)            | :heavy_minus_sign:                                                      | The proxy type.                                                         |
| `highDiskUsageNotificationSent`                                         | *boolean*                                                               | :heavy_minus_sign:                                                      | The flag to indicate if the high disk usage notification has been sent. |
| `unreachableNotificationSent`                                           | *boolean*                                                               | :heavy_minus_sign:                                                      | The flag to indicate if the unreachable notification has been sent.     |
| `unreachableCount`                                                      | *number*                                                                | :heavy_minus_sign:                                                      | The unreachable count for your server.                                  |
| `validationLogs`                                                        | *string*                                                                | :heavy_minus_sign:                                                      | The validation logs.                                                    |
| `logDrainNotificationSent`                                              | *boolean*                                                               | :heavy_minus_sign:                                                      | The flag to indicate if the log drain notification has been sent.       |
| `swarmCluster`                                                          | *string*                                                                | :heavy_minus_sign:                                                      | The swarm cluster configuration.                                        |
| `deleteUnusedVolumes`                                                   | *boolean*                                                               | :heavy_minus_sign:                                                      | The flag to indicate if the unused volumes should be deleted.           |
| `deleteUnusedNetworks`                                                  | *boolean*                                                               | :heavy_minus_sign:                                                      | The flag to indicate if the unused networks should be deleted.          |