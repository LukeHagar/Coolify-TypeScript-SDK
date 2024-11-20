# UpdateEnvByApplicationUuidRequest

## Example Usage

```typescript
import { UpdateEnvByApplicationUuidRequest } from "coolify/models/operations";

let value: UpdateEnvByApplicationUuidRequest = {
  uuid: "30c35eb0-2993-4e98-99b4-632fb734064b",
  requestBody: {
    key: "<key>",
    value: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | UUID of the application.                                                                                             |
| `requestBody`                                                                                                        | [operations.UpdateEnvByApplicationUuidRequestBody](../../models/operations/updateenvbyapplicationuuidrequestbody.md) | :heavy_check_mark:                                                                                                   | Env updated.                                                                                                         |