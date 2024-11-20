# ExecuteCommandApplicationRequest

## Example Usage

```typescript
import { ExecuteCommandApplicationRequest } from "coolify/models/operations";

let value: ExecuteCommandApplicationRequest = {
  uuid: "6164d0f5-5026-4e1f-ad75-390061434201",
  requestBody: {},
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | UUID of the application.                                                                                           |
| `requestBody`                                                                                                      | [operations.ExecuteCommandApplicationRequestBody](../../models/operations/executecommandapplicationrequestbody.md) | :heavy_check_mark:                                                                                                 | Command to execute.                                                                                                |