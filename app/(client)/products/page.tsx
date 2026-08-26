import FeaturedProduct from "@/components/client/landing/featured-products";
import ProductCard from "@/components/client/landing/featured-products/product-card";
import Link from "next/link";
import React from "react";

const ProductPage = () => {
  return (
    <main>
      <header>
        <h1>Our Products</h1>
        <p>Discover our latest collection</p>
      </header>
      <section>
        <div>
          <Link href={"/products"}>All</Link>

          <Link href={"products/shirts"}>Shirts</Link>
          <Link href={"products/kurtha"}>Kurtha</Link>
          <Link href={"products/coats"}>Coats</Link>
          <Link href={"products/shoes"}>Shoes</Link>
          <Link href={"products/jackets"}>Jackets</Link>
        </div>
        <div>
          <FeaturedProduct />
        </div>
      </section>
    </main>
  );
};
export default ProductPage;
