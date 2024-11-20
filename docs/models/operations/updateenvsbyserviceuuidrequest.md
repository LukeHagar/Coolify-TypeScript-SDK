# UpdateEnvsByServiceUuidRequest

## Example Usage

```typescript
import { UpdateEnvsByServiceUuidRequest } from "coolify/models/operations";

let value: UpdateEnvsByServiceUuidRequest = {
  uuid: "6ce4679f-b64f-42be-9a63-5baedde4568a",
  requestBody: {
    data: [
      {},
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | UUID of the service.                                                                                           |
| `requestBody`                                                                                                  | [operations.UpdateEnvsByServiceUuidRequestBody](../../models/operations/updateenvsbyserviceuuidrequestbody.md) | :heavy_check_mark:                                                                                             | Bulk envs updated.                                                                                             |