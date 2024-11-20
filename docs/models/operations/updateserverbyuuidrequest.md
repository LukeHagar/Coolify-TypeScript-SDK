# UpdateServerByUuidRequest

## Example Usage

```typescript
import { UpdateServerByUuidRequest } from "coolify/models/operations";

let value: UpdateServerByUuidRequest = {
  uuid: "cb2d7779-97da-466c-9530-ee1521e0f1d9",
  requestBody: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | Server's UUID                                                                                        |
| `requestBody`                                                                                        | [operations.UpdateServerByUuidRequestBody](../../models/operations/updateserverbyuuidrequestbody.md) | :heavy_check_mark:                                                                                   | Server updated.                                                                                      |