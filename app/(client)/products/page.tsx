import FeaturedProduct from "@/components/client/landing/featured-products";
import ProductCard from "@/components/client/landing/featured-products/product-card";
import Link from "next/link";
import React from "react";

const ProductPage = () => {
  return (
    <main className="min-h-full sm:w-full md:min-h-full lg:w-screen  px-3 py-10">
      <header className="flex flex-col gap-3 py-10 px-6">
        <h1 className="text-xl font-bold pl-4">Our Products</h1>
        <p className="text-lg text-gray-500 pl-4">
          Discover our latest collection
        </p>
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
