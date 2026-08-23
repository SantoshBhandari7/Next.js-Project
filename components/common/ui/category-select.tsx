import React from "react";
import { Select } from "./select";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "@/api/categories.api";

const CategorySelect = () => {
  const { data } = useQuery({
    queryFn: getAllCategories,
    queryKey: ["get-category"],
  });
  return (
    <div className="flex flex-col gap-1">
      <Select
        value="category"
        label="Category"
        options={data?.data?.categories ?? []}
      />
    </div>
  );
};

export default CategorySelect;
