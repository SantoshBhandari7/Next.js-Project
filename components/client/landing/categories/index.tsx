import React from "react";
import CategoryList from "./list";
import SectionHeader from "../section-header";
import CategoryCard from "./card";

const Categories = () => {
  return (
    <div className="px-20 py-10">
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
