# DeleteEnvByServiceUuidRequest

## Example Usage

```typescript
import { DeleteEnvByServiceUuidRequest } from "coolify/models/operations";

let value: DeleteEnvByServiceUuidRequest = {
  uuid: "064feda5-8d1c-40dc-80a8-22c9fff1f37c",
  envUuid: "9211506a-6114-42f2-bc99-8f5c86f916cb",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `uuid`                            | *string*                          | :heavy_check_mark:                | UUID of the service.              |
| `envUuid`                         | *string*                          | :heavy_check_mark:                | UUID of the environment variable. |