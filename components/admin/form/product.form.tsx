"use client";
import React from "react";
import Input from "../../common/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductSchema } from "@/schema/product.schema";
import { TProduct } from "@/types/product.types";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createProduct, product } from "@/api/product.api";
import toast from "react-hot-toast";
import Button from "@/components/common/ui/button";
import CategorySelect from "@/components/common/ui/category-select";

interface Option {
  id: string;
  name: string;
}

interface ProductIProps {
  brand: Option[];
  category: Option[];
}

const ProductForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>({
    defaultValues: {
      name: "",
      price: 0,
      stock: 0,
      description: "",
      new_arrival: true,
    },
    resolver: yupResolver(ProductSchema),
    mode: "all",
  });

  // const { data: brandResponse, isLoading: branchLoading } = useQuery({
  //   queryFn: brand,
  //   queryKey: ["brands"],
  // });

  // const { data: categoryResponse, isLoading: categoryLoading } = useQuery({
  //   queryFn: createCategory,
  //   queryKey: ["Catehories"],
  // });

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: (respose) => {
      toast.success(respose?.message ?? "product created successfully");
      router.replace("/admin");
    },
    onError: (error) => {
      toast.error(error?.message ?? "failed to create product");
    },
  });

  const OnSubmit = (data: TProduct) => {
    console.log("Product Submitted", data);
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)} className="flex flex-col gap-5">
      <Input
        register={register}
        id="name"
        name="name"
        type="text"
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
        error={errors?.stock?.message}
      />

      <Input
        register={register}
        id="description"
        name="description"
        label="Description"
        type="text"
        required
        placeholder="enter description about product"
        error={errors?.description?.message}
      />

      <Input
        register={register}
        id="new_arrival"
        name="new_arrival"
        label="New_Arrival"
        type="boolean"
        error={errors?.new_arrival?.message}
      />

      <div>
        <CategorySelect />
      </div>

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
