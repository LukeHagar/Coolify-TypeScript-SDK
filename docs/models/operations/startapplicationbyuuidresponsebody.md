# StartApplicationByUuidResponseBody

Start application.

## Example Usage

```typescript
import { StartApplicationByUuidResponseBody } from "coolify/models/operations";

let value: StartApplicationByUuidResponseBody = {
  message: "Deployment request queued.",
  deploymentUuid: "doogksw",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `message`                  | *string*                   | :heavy_minus_sign:         | Message.                   | Deployment request queued. |
| `deploymentUuid`           | *string*                   | :heavy_minus_sign:         | UUID of the deployment.    | doogksw                    |