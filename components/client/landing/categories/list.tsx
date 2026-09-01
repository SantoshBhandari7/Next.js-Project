"use client";
import CategoryCard from "./card";
import { useQuery } from "@tanstack/react-query";
import DataNotFound from "@/components/common/ui/data-not-found";
import Loading from "@/components/common/ui/loading";
import { getAllCategories } from "@/api/categories.api";
import { ICategory } from "@/types/categories.types";
import Categories from ".";
const CategoryList = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryFn: getAllCategories,
    queryKey: ["get-all-categories"],
  });

  return (
    <div className="min-h-60 ">
      {isLoading && <Loading />}
      {!isLoading &&
        data?.data?.categories &&
        data?.data?.categories.length === 0 && (
          <DataNotFound message="Categories Not Found" />
        )}

      {!isLoading &&
        data?.data?.categories &&
        data?.data?.categories.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data?.data?.categories?.map((category: ICategory) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        )}
    </div>
  );
};

export default CategoryList;
