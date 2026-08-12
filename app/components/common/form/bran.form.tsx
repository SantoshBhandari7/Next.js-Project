"use client"
import React from "react";
import Input from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../ui/button";
import { BrandSchema } from "@/schema/brand.schema";
import { TBrand } from "@/types/brand.types";


 const BrandForm = () => {
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

  const OnSubmit = (data:TBrand) => {
    console.log("BrandRecord Submitted");
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
