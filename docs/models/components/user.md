# User

User model

## Example Usage

```typescript
import { User } from "coolify/models/components";

let value: User = {};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `id`                                              | *number*                                          | :heavy_minus_sign:                                | The user identifier in the database.              |
| `name`                                            | *string*                                          | :heavy_minus_sign:                                | The user name.                                    |
| `email`                                           | *string*                                          | :heavy_minus_sign:                                | The user email.                                   |
| `emailVerifiedAt`                                 | *string*                                          | :heavy_minus_sign:                                | The date when the user email was verified.        |
| `createdAt`                                       | *string*                                          | :heavy_minus_sign:                                | The date when the user was created.               |
| `updatedAt`                                       | *string*                                          | :heavy_minus_sign:                                | The date when the user was updated.               |
| `twoFactorConfirmedAt`                            | *string*                                          | :heavy_minus_sign:                                | The date when the user two factor was confirmed.  |
| `forcePasswordReset`                              | *boolean*                                         | :heavy_minus_sign:                                | The flag to force the user to reset the password. |
| `marketingEmails`                                 | *boolean*                                         | :heavy_minus_sign:                                | The flag to receive marketing emails.             |