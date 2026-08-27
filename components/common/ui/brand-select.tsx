import { brand, getBrand } from "@/api/brand.api";
import { useQuery } from "@tanstack/react-query";
import { Select } from "./select";
import { UseFormRegister } from "react-hook-form";

interface IProps {
  register: UseFormRegister<any>;
}

const BrandSelect = ({ register }: IProps) => {
  const { data } = useQuery({
    queryFn: getBrand,
    queryKey: ["get-brands"],
  });
  return (
    <div>
      <Select
        register={register}
        value="brand"
        label="Brand"
        options={data?.data?.brands ?? []}
      />
    </div>
  );
};

export default BrandSelect;
