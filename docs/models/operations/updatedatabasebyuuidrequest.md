# UpdateDatabaseByUuidRequest

## Example Usage

```typescript
import { UpdateDatabaseByUuidRequest } from "coolify/models/operations";

let value: UpdateDatabaseByUuidRequest = {
  uuid: "26296ef8-49e6-4847-a638-458c5ed04715",
  requestBody: {},
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                   | *string*                                                                                                 | :heavy_check_mark:                                                                                       | UUID of the database.                                                                                    |
| `requestBody`                                                                                            | [operations.UpdateDatabaseByUuidRequestBody](../../models/operations/updatedatabasebyuuidrequestbody.md) | :heavy_check_mark:                                                                                       | Database data                                                                                            |