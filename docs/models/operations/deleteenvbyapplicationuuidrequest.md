# DeleteEnvByApplicationUuidRequest

## Example Usage

```typescript
import { DeleteEnvByApplicationUuidRequest } from "coolify/models/operations";

let value: DeleteEnvByApplicationUuidRequest = {
  uuid: "365749d1-82b6-4922-a75f-cbe189f4310e",
  envUuid: "c4917fe5-f3ff-4cad-84d9-052f77a52d38",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `uuid`                            | *string*                          | :heavy_check_mark:                | UUID of the application.          |
| `envUuid`                         | *string*                          | :heavy_check_mark:                | UUID of the environment variable. |