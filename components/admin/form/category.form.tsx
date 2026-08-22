import { createCategory } from "@/api/categories.api";
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
    // mutate(data);
  };

  return <main></main>;
};
export default CategoryForm;
