import React from "react";

import SectionHeader from "../section-header";
import BrandList from "./list";

const Brands = () => {
  return (
    <div className="px-20 py-10">
      <SectionHeader
        title={"All Brands"}
        subtitle="Discover by brand"
        link="#"
      />
      <BrandList />
    </div>
  );
};

export default Brands;
