# UpdateEnvByServiceUuidRequestBody

Env updated.

## Example Usage

```typescript
import { UpdateEnvByServiceUuidRequestBody } from "coolify/models/operations";

let value: UpdateEnvByServiceUuidRequestBody = {
  key: "<key>",
  value: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `key`                                                                            | *string*                                                                         | :heavy_check_mark:                                                               | The key of the environment variable.                                             |
| `value`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | The value of the environment variable.                                           |
| `isPreview`                                                                      | *boolean*                                                                        | :heavy_minus_sign:                                                               | The flag to indicate if the environment variable is used in preview deployments. |
| `isBuildTime`                                                                    | *boolean*                                                                        | :heavy_minus_sign:                                                               | The flag to indicate if the environment variable is used in build time.          |
| `isLiteral`                                                                      | *boolean*                                                                        | :heavy_minus_sign:                                                               | The flag to indicate if the environment variable is a literal, nothing espaced.  |
| `isMultiline`                                                                    | *boolean*                                                                        | :heavy_minus_sign:                                                               | The flag to indicate if the environment variable is multiline.                   |
| `isShownOnce`                                                                    | *boolean*                                                                        | :heavy_minus_sign:                                                               | The flag to indicate if the environment variable's value is shown on the UI.     |