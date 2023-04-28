"use client";
import { useMoney } from "@shopify/hydrogen-react";
import React, { useEffect, useState } from "react";
import { getAllProducts } from "./graphql";
import styles from "./page.module.css";

export default function Home(props) {
  // const { currencyCode, currencySymbol, amount } = useMoney("");
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllProducts();

      setAllProducts(response?.body?.data?.products?.edges);
      console.log("response", response);
    })();
  }, []);
  console.log("allProducts", allProducts);
  return (
    <main className={styles.main}>
      <p>Shopify Products</p>
      <div className={styles.productList}>
        {allProducts?.map((product) => (
          <div className={styles.product} key={product.id}>
            <img
              src={
                product?.node?.featuredImage?.url ||
                "https://via.placeholder.com/150"
              }
              alt="image"
            />
            <h3 className={styles.productTitle}>{product?.node?.title}</h3>
            <p>${product?.node?.variants?.edges[0]?.node?.priceV2?.amount}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
