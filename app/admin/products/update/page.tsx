import ProductForm from "@/components/admin/form/product.form";
import React from "react";

const UpdatePage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center ">
      <section className="w-100 px-6 py-8 border rounded-lg flex flex-col gap-3 ">
        <div className="flex flex-col text-center">
          <h1 className="text-blue-500 font-bold tracking-wider text-lg">
            Update Product
          </h1>
          <p className="text-gray-500">FillUp this form to update product</p>
        </div>

        <ProductForm />
      </section>
    </main>
  );
};

export default UpdatePage;
