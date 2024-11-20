# StartApplicationByUuidRequest

## Example Usage

```typescript
import { StartApplicationByUuidRequest } from "coolify/models/operations";

let value: StartApplicationByUuidRequest = {
  uuid: "1dffec51-6320-4b0c-a211-a368db420447",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `uuid`                         | *string*                       | :heavy_check_mark:             | UUID of the application.       |
| `force`                        | *boolean*                      | :heavy_minus_sign:             | Force rebuild.                 |
| `instantDeploy`                | *boolean*                      | :heavy_minus_sign:             | Instant deploy (skip queuing). |