import { brand } from "@/api/brand.api";
import ProductForm from "@/components/admin/form/product.form";
import React from "react";

const Productpage = () => {
  return (
    <main className="min-h-screen w-80 flex justify-center items-center ">
      <section>
        <div>
          <h1>Create Products</h1>
          <p>Add new products</p>
        </div>
        <ProductForm/>
      </section>
    </main>
  );
};
export default Productpage;
