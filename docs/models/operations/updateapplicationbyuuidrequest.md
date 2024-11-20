# UpdateApplicationByUuidRequest

## Example Usage

```typescript
import { UpdateApplicationByUuidRequest } from "coolify/models/operations";

let value: UpdateApplicationByUuidRequest = {
  uuid: "1561b948-19e5-4a2b-b429-0d0a4bf39993",
  requestBody: {},
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | UUID of the application.                                                                                       |
| `requestBody`                                                                                                  | [operations.UpdateApplicationByUuidRequestBody](../../models/operations/updateapplicationbyuuidrequestbody.md) | :heavy_check_mark:                                                                                             | Application updated.                                                                                           |