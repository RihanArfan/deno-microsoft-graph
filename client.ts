import { ClientSecretCredential } from "npm:@azure/identity";
import { Client } from "npm:@microsoft/microsoft-graph-client";
import {
  TokenCredentialAuthenticationProvider,
  TokenCredentialAuthenticationProviderOptions,
} from "npm:@microsoft/microsoft-graph-client/lib/src/authentication/azureTokenCredentials/index.js";

import { load } from "https://deno.land/std@0.207.0/dotenv/mod.ts";
const env = await load();

const TENANT_ID = env["TENANT_ID"];
const CLIENT_ID = env["CLIENT_ID"];
const CLIENT_SECRET = env["CLIENT_SECRET"];

if (!TENANT_ID || !CLIENT_ID || !CLIENT_SECRET) {
  throw new Error("Missing environment variables");
}

const scope = `${CLIENT_ID}/.default`;

// Create an instance of the TokenCredential class that is imported
const tokenCredential = new ClientSecretCredential(
  TENANT_ID,
  CLIENT_ID,
  CLIENT_SECRET
);

// Set your scopes and options for TokenCredential.getToken (Check the ` interface GetTokenOptions` in (TokenCredential Implementation)[https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/core/core-auth/src/tokenCredential.ts])
const options: TokenCredentialAuthenticationProviderOptions = {
  scopes: [scope],
};

// Create an instance of the TokenCredentialAuthenticationProvider by passing the tokenCredential instance and options to the constructor
const authProvider = new TokenCredentialAuthenticationProvider(
  tokenCredential,
  options
);
const client = Client.initWithMiddleware({ authProvider: authProvider });

// Export client to be used in other files
export { client };
