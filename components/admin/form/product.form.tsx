
("use client");
import React from "react";
import Input from "../../common/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductSchema } from "@/schema/product.schema";
import { TProduct } from "@/types/product.types";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { product } from "@/api/product.api";
import toast from "react-hot-toast";
import Button from "@/components/common/ui/button";
import { Select } from "@/components/common/ui/select";

interface Brand{
  id:string;
  name:string;
};
interface Category{
    id:string;
    name:string;
}
interface ProductIProps{
    brands:Brand[];
    category:Category[];
}


const ProductForm = ({brands, category}:ProductIProps) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    defaultValues: {
      name: "",
      price: "",
      stock: "",
      description: "",
      new_arrival: "",
    },
    resolver: yupResolver(ProductSchema),
    mode: "all",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: product,
    onSuccess: (respose) => {
      toast.success(respose?.message ?? "product created successfully");
      router.replace("/admin");
    },
    onError: (error) => {
      toast.error(error?.message ?? "failed to create product");
    },
  });

  const onSubmit = (data: TProduct) => {
    console.log("Product Submitted", data);
    mutate(data);
  };

  return (
    <form
      //   className="min-h-screen w-80 flex justify-center items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        register={register}
        id="name"
        name="name"
        type="number"
        label="ProductName"
        placeholder="enter product name"
        required
        error={errors?.name?.message}
      />

      <Input
        register={register}
        id="price"
        name="price"
        type="text"
        label="Price"
        placeholder="enter price"
        required
        error={errors?.price?.message}
      />

      <Input
        register={register}
        id="stock"
        name="stock"
        label="Stock"
        type="number"
        required
        placeholder="enter stock quantity"
      />

      <Input
        register={register}
        id="description"
        name="description"
        label="Description"
        placeholder="enter description about product"
      />

      <Input
        register={register}
        id="description"
        name="description"
        label="Description"
        placeholder="enter description about your product"
      />

      <Select
        name="category"
        label="Category"
        required
        options={category}
      />

      <Select name="brands"
      label="Brand" 
      required
      options={brands}
      />

      <div>
        <Button
          disabled={isPending}
          type={"submit"}
          label={isPending ? "creating product" : "Create Product"}
        />
      </div>
    </form>
  );
};

export default ProductForm;
