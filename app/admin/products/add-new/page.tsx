import ProductForm from "@/components/admin/form/product.form";
import React from "react";

const ProductPage = () => {
  return (
    <main className="min-h-screen flex  flex-col justify-center items-center ">
      <section className=" min-h-80 w-100 py-8 border rounded-lg px-6 border-cyan-800">
        <div className="flex flex-col gap-0.5 text-center mb-3  ">
          <h1 className="text-blue-500 tracking-wider font-bold text-lg ">
            Create a Product
          </h1>
          <p className="text-gray-500">FillUp this form to insert product</p>
        </div>
        <ProductForm />
      </section>
    </main>
  );
};

export default ProductPage;
