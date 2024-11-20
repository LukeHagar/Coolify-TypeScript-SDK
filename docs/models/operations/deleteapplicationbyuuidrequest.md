# DeleteApplicationByUuidRequest

## Example Usage

```typescript
import { DeleteApplicationByUuidRequest } from "coolify/models/operations";

let value: DeleteApplicationByUuidRequest = {
  uuid: "325597f1-32a4-4732-91a2-35d1d1f7f9b0",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `uuid`                     | *string*                   | :heavy_check_mark:         | UUID of the application.   |
| `deleteConfigurations`     | *boolean*                  | :heavy_minus_sign:         | Delete configurations.     |
| `deleteVolumes`            | *boolean*                  | :heavy_minus_sign:         | Delete volumes.            |
| `dockerCleanup`            | *boolean*                  | :heavy_minus_sign:         | Run docker cleanup.        |
| `deleteConnectedNetworks`  | *boolean*                  | :heavy_minus_sign:         | Delete connected networks. |