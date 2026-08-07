import React from "react";

const ProductId = async ({params}) => {
  const p = await params;
  console.log(p);
  return (
    <div className="text-primary">
      <h1>Product Detail Fetch</h1>
      <h1>ProductId:{p.id}</h1>
    </div>
  );
};
export default ProductId;
