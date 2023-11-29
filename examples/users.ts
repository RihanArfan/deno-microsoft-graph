import { client } from "../client.ts";
import type { User } from "npm:@microsoft/microsoft-graph-types";

const users: User[] = await client.api("/users").get();
console.log(users);

// deno run --allow-env --allow-net --allow-read --allow-sys examples/users.ts
