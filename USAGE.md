<!-- Start SDK Example Usage [usage] -->
```typescript
import { Coolify } from "coolify";

const coolify = new Coolify({
  bearerAuth: process.env["COOLIFY_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await coolify.applications.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->