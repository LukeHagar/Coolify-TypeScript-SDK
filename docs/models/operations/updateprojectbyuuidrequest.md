# UpdateProjectByUuidRequest

## Example Usage

```typescript
import { UpdateProjectByUuidRequest } from "coolify/models/operations";

let value: UpdateProjectByUuidRequest = {
  uuid: "d5311314-11d2-48c7-9236-85cce0e6ebfc",
  requestBody: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | UUID of the application.                                                                               |
| `requestBody`                                                                                          | [operations.UpdateProjectByUuidRequestBody](../../models/operations/updateprojectbyuuidrequestbody.md) | :heavy_check_mark:                                                                                     | Project updated.                                                                                       |