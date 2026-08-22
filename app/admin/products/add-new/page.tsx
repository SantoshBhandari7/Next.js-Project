import { brand } from "@/api/brand.api";
import ProductForm from "@/components/admin/form/product.form";
import React from "react";

const ProductPage = () => {
  return (
    <main>
      <div>
        <h1>Create a Product</h1>
        <p>FillUp this form to insert product</p>
      </div>
      <ProductForm />
    </main>
  );
};

export default ProductPage;
