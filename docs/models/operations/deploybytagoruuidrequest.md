# DeployByTagOrUuidRequest

## Example Usage

```typescript
import { DeployByTagOrUuidRequest } from "coolify/models/operations";

let value: DeployByTagOrUuidRequest = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `tag`                                                    | *string*                                                 | :heavy_minus_sign:                                       | Tag name(s). Comma separated list is also accepted.      |
| `uuid`                                                   | *string*                                                 | :heavy_minus_sign:                                       | Resource UUID(s). Comma separated list is also accepted. |
| `force`                                                  | *boolean*                                                | :heavy_minus_sign:                                       | Force rebuild (without cache)                            |