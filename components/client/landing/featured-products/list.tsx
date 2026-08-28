"use client";
import { product } from "@/api/product.api";
import DataNotFound from "@/components/common/ui/data-not-found";
import Loading from "@/components/common/ui/loading";
import { IProduct } from "@/types/products.types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProductCard from "./product-card";

const FeaturedProductList = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryFn: product,
    queryKey: ["get-featured-products"],
  });

  return (
    <div className="min-h-69">
      {isError && <Loading />}
      {!isLoading &&
        data?.data?.products &&
        data?.data?.products.length === 0 && (
          <DataNotFound message="Products Not Found" />
        )}
      {!isLoading &&
        data?.data?.products &&
        data?.data?.products.length > 0 && (
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {data?.data?.products?.map((product: IProduct) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
    </div>
  );
};

export default FeaturedProductList;
