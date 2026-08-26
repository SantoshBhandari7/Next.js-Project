import React from "react";
import SectionHeader from "../section-header";
import CategoryList from "../categories/list";
import FeaturedProductList from "./list";

const FeaturedProduct = () => {
  return (
    <div className="px-20 py-10">
      <SectionHeader
        title="Featured Products"
        subtitle="Discover ouer featured products"
        link="/products"
      />

      {/* <CategoryList /> */}
      <FeaturedProductList />
    </div>
  );
};

export default FeaturedProduct;
