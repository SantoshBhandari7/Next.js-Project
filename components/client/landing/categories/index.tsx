import React from "react";
import CategoryList from "./list";
import SectionHeader from "../section-header";

const Categories = () => {
  return (
    <div className="px-20 py-10 bg-white">
      <SectionHeader
        title={"All Categories"}
        subtitle="Discover by category"
        link="#"
      />
      <CategoryList />
    </div>
  );
};

export default Categories;
