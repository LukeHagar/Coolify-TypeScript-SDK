# CreateEnvByServiceUuidRequest

## Example Usage

```typescript
import { CreateEnvByServiceUuidRequest } from "coolify/models/operations";

let value: CreateEnvByServiceUuidRequest = {
  uuid: "c8177365-2748-40ed-98df-1aff92903f5a",
  requestBody: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `uuid`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | UUID of the service.                                                                                         |
| `requestBody`                                                                                                | [operations.CreateEnvByServiceUuidRequestBody](../../models/operations/createenvbyserviceuuidrequestbody.md) | :heavy_check_mark:                                                                                           | Env created.                                                                                                 |