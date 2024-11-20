# DeleteDatabaseByUuidRequest

## Example Usage

```typescript
import { DeleteDatabaseByUuidRequest } from "coolify/models/operations";

let value: DeleteDatabaseByUuidRequest = {
  uuid: "f31f3b0b-e465-4b32-974d-38fadfcbff71",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `uuid`                     | *string*                   | :heavy_check_mark:         | UUID of the database.      |
| `deleteConfigurations`     | *boolean*                  | :heavy_minus_sign:         | Delete configurations.     |
| `deleteVolumes`            | *boolean*                  | :heavy_minus_sign:         | Delete volumes.            |
| `dockerCleanup`            | *boolean*                  | :heavy_minus_sign:         | Run docker cleanup.        |
| `deleteConnectedNetworks`  | *boolean*                  | :heavy_minus_sign:         | Delete connected networks. |