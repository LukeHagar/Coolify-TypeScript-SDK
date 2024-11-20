# UpdateEnvsByApplicationUuidRequest

## Example Usage

```typescript
import { UpdateEnvsByApplicationUuidRequest } from "coolify/models/operations";

let value: UpdateEnvsByApplicationUuidRequest = {
  uuid: "201a78ef-3a40-4c56-89da-d4c2fa3fb438",
  requestBody: {
    data: [
      {},
    ],
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | UUID of the application.                                                                                               |
| `requestBody`                                                                                                          | [operations.UpdateEnvsByApplicationUuidRequestBody](../../models/operations/updateenvsbyapplicationuuidrequestbody.md) | :heavy_check_mark:                                                                                                     | Bulk envs updated.                                                                                                     |