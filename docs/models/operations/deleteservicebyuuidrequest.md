# DeleteServiceByUuidRequest

## Example Usage

```typescript
import { DeleteServiceByUuidRequest } from "coolify/models/operations";

let value: DeleteServiceByUuidRequest = {
  uuid: "b06ad7f4-074d-434c-8b8b-600810fd20f4",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `uuid`                     | *string*                   | :heavy_check_mark:         | Service UUID               |
| `deleteConfigurations`     | *boolean*                  | :heavy_minus_sign:         | Delete configurations.     |
| `deleteVolumes`            | *boolean*                  | :heavy_minus_sign:         | Delete volumes.            |
| `dockerCleanup`            | *boolean*                  | :heavy_minus_sign:         | Run docker cleanup.        |
| `deleteConnectedNetworks`  | *boolean*                  | :heavy_minus_sign:         | Delete connected networks. |