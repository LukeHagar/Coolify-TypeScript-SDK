# RestartApplicationByUuidResponseBody

Restart application.

## Example Usage

```typescript
import { RestartApplicationByUuidResponseBody } from "coolify/models/operations";

let value: RestartApplicationByUuidResponseBody = {
  message: "Restart request queued.",
  deploymentUuid: "doogksw",
};
```

## Fields

| Field                   | Type                    | Required                | Description             | Example                 |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `message`               | *string*                | :heavy_minus_sign:      | N/A                     | Restart request queued. |
| `deploymentUuid`        | *string*                | :heavy_minus_sign:      | UUID of the deployment. | doogksw                 |