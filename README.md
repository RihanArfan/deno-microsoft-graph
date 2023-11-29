# deno-microsoft-graph

[Microsoft Graph API](https://learn.microsoft.com/en-us/graph/use-the-api) client in [Deno](https://deno.com/), with authentication via OAuth 2.0 client credentials grant flow.

Uses [`@microsoft/microsoft-graph-client`](https://www.npmjs.com/package/@microsoft/microsoft-graph-client) under the hood.

## Usage 📖

See https://www.npmjs.com/package/@microsoft/microsoft-graph-client for usage of client.

1. [Create app registration](https://learn.microsoft.com/en-us/graph/auth-v2-service) by following this guide
2. Set `TENANT_ID`, `CLIENT_ID` and `CLIENT_SECRET` environment variables in `.env`

```ts
// example.ts
import { client } from "https://raw.githubusercontent.com/RihanArfan/deno-microsoft-graph/v1.0.0/client.ts";
import type { User } from "npm:@microsoft/microsoft-graph-types";

const users: User[] = await client.api("/users").get();
console.log(users);
```

```
deno run --allow-env --allow-net --allow-read --allow-sys example.ts
```

## Roadmap 🚀

- [ ] `Client` for init which accepts `tenantId`, `clientId` and `clientSecret`
