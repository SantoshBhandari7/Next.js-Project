"use client";
import { useQuery } from "@tanstack/react-query";
import DataNotFound from "@/components/common/ui/data-not-found";
import Loading from "@/components/common/ui/loading";
import { getBrand } from "@/api/brand.api";
import BrandCard from "./card";
import { IBrands } from "@/types/brand.types";
const BrandList = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryFn: getBrand,
    queryKey: ["get-all-brands"],
  });

  return (
    <div className="min-h-60 ">
      {isLoading && <Loading />}
      {!isLoading && data?.data && data?.data.length === 0 && (
        <DataNotFound message="Brands Not Found" />
      )}

      {!isLoading && data?.data && data?.data.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data?.data.map((brand: IBrands) => (
            <BrandCard key={brand._id} brand={brand} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandList;
