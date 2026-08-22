"use client";
import { getAllCategories } from "@/api/categories.api";
// import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryCard from "./card";
import { ICategory } from "@/types/categories.types";
import Loading from "@/components/common/ui/loading";
import DataNotFound from "@/components/common/ui/data-not-found";
import { useQuery } from "@tanstack/react-query";

const CategoryList = () => {
  // const {isLoading,  isError,  data, error } = useQuery({
  //   queryFn: getAllCategories,
  //   queryKey: ["all-categories-fetch"],
  // });

  const { isLoading, isError, data, error } = useQuery({
    queryFn: getAllCategories,
    queryKey: ["get-all-categories"],
  });
  return (
    <div className="min-h-60">
      {isLoading && <Loading />}
      {!isLoading &&
        data?.data?.categories &&
        data?.data?.categories?.length === 0 && (
          <DataNotFound message="Categories Not Found" />
        )}

      {!isLoading &&
        data?.data?.categories &&
        data?.data?.catgories?.length > 0 && (
          <div className="grid grid-cols-4 gap-5">
            {data?.data?.categories?.map((category: ICategory) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        )}
    </div>
  );
};
export default CategoryList;
