"use client"
import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { BrandSchema } from "@/schema/brand.schema";
import { TBrand } from "@/types/brand.types";
import Input from "@/components/common/ui/input";
import Button from "@/components/common/ui/button";
import { useMutation } from "@tanstack/react-query";
import { error } from "console";
import toast from "react-hot-toast";
import { brand } from "@/api/brand.api";
import { useRouter } from "next/navigation";



 const BrandForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TBrand>({
    defaultValues: {
      name: "",
      description: "",
    },
    resolver: yupResolver(BrandSchema),
    mode:"all"
  });

  const {mutate} =useMutation({
    mutationFn:brand,
    onSuccess:(response)=>{
      toast.success(response?.message ?? "brand succefully created");
      router.replace("/admin");
    },
    onError:(error)=>{
      toast.error(error?.message ?? "create brand failed")
    }

  })

  const OnSubmit = (data:TBrand) => {
    console.log("BrandRecord Submitted",data);
    mutate(data);

  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)} className="flex flex-col gap-4">
      <Input
        register={register}
        id="name"
        name="name"
        type="text"
        label="BrandName"
        required
        placeholder="enter your brand name"
        error={errors?.name?.message}
      />
      <Input
      register={register}
      id="description"
      name="description"
      type="text"
      label="Description"
      required
      placeholder="Enter Description about brand"
      error={errors?.description?.message}
       />
      
       <div className="mt-2">
        <Button label="Submit" type="submit" />
       </div>


    </form>
  );
};
export default BrandForm;
