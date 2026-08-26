import { brand, getBrand } from "@/api/brand.api";
import { useQuery } from "@tanstack/react-query";
import { Select } from "./select";

const BrandSelect = () => {
  const { data } = useQuery({
    queryFn: getBrand,
    queryKey: ["get-brands"],
  });
  return (
    <div>
      <Select value="brand" label="Brand" options={data?.data?.brands ?? []} />
    </div>
  );
};

export default BrandSelect;
