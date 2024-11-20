# UpdateEnvByServiceUuidRequest

## Example Usage

```typescript
import { UpdateEnvByServiceUuidRequest } from "coolify/models/operations";

let value: UpdateEnvByServiceUuidRequest = {
  uuid: "fb5c163a-1648-45b0-aa34-cf5d1ac26e10",
  requestBody: {
    key: "<key>",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | UUID of the service.                                                                                         |
| `requestBody`                                                                                                | [operations.UpdateEnvByServiceUuidRequestBody](../../models/operations/updateenvbyserviceuuidrequestbody.md) | :heavy_check_mark:                                                                                           | Env updated.                                                                                                 |