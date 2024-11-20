# Project

Project model

## Example Usage

```typescript
import { Project } from "coolify/models/components";

let value: Project = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `uuid`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `description`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `environments`                                                     | [components.Environment](../../models/components/environment.md)[] | :heavy_minus_sign:                                                 | The environments of the project.                                   |