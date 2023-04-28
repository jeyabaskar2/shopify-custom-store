import {
  getStorefrontApiUrl,
  getPrivateTokenHeaders,
} from "./shopify-client.js";

export async function getAllProducts() {
  return shopifyFetch({
    query: `{
        products(first:50) {
        edges {
        node {
            id
            title
            description
            featuredImage {
            url
            }
            variants(first: 1) {
            edges {
                node {
                priceV2 {
                    amount
                }
                }
            }
            }
        }
        }
    }
    }`,
  });
}

export async function shopifyFetch({ query }) {
  const endpoint = getStorefrontApiUrl();
  const key = getPrivateTokenHeaders();

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: getPrivateTokenHeaders({ buyerIp: "..." }),
      body: JSON.stringify({ query }),
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}
