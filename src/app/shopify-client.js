import { createStorefrontClient } from "@shopify/hydrogen-react";

const client = createStorefrontClient({
  privateStorefrontToken: "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",
  storeDomain: "https://jeyabaskar.myshopify.com",
  storefrontApiVersion: "2023-01",
});

export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;
