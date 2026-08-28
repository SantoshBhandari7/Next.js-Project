import { createCategory } from "@/api/categories.api";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import { TCategory } from "@/types/categories.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CategoryForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCategory>({
    defaultValues: {
      name: "",
      description: "",
      images: "",
    },
    // resolver:yupResolver()
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: createCategory,
    onSuccess: (response) => {
      toast.success(response?.message ?? "categories created successfully");
      router.replace("/admin");
    },
    onError: (error) => {
      toast.error(error?.message ?? "create categories failed ");
    },
  });

  const onSubmit = (data: TCategory) => {
    console.log("categories create", data);
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        id="name"
        name="name"
        required
        type="text"
        label="Name"
        placeholder="enter category name"
        error={errors?.name?.message}
      />

      <Input
        register={register}
        id="description"
        name="description"
        type="text"
        label="Description"
        placeholder="enter description"
        required
        error={errors?.description?.message}
      />

      <Input
        register={register}
        id="image"
        label="Image"
        type="file"
        name="image"
        required
        error={errors?.images?.message}
      />
      <div className="mt-2">
        <Button type="submit" label="Submit" />
      </div>
    </form>
  );
};
export default CategoryForm;
