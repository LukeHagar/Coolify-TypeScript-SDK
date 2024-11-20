# CreateEnvByApplicationUuidRequest

## Example Usage

```typescript
import { CreateEnvByApplicationUuidRequest } from "coolify/models/operations";

let value: CreateEnvByApplicationUuidRequest = {
  uuid: "56ecb1eb-f2d2-491d-8c96-1b7bdfd05b28",
  requestBody: {},
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `uuid`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | UUID of the application.                                                                                             |
| `requestBody`                                                                                                        | [operations.CreateEnvByApplicationUuidRequestBody](../../models/operations/createenvbyapplicationuuidrequestbody.md) | :heavy_check_mark:                                                                                                   | Env created.                                                                                                         |