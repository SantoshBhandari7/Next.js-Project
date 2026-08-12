
import React from "react";
import Input from "../ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductSchema } from "@/schema/product.schema";
import { TProduct } from "@/types/product.types";


const ProductForm =()=>{

    const {register, handleSubmit, formState:{errors}} =useForm<TProduct>({
        defaultValues:{
            name:"",
            price:"",
            stock:"",
            description:"",
            new_arrival:"",
        },
        resolver:yupResolver(ProductSchema),
        mode:"all"
    });
    const onSubmit =(data:TProduct)=>{
        console.log("Product Submitted",data);

    }

    return(
    <form onSubmit={handleSubmit(onSubmit)} >
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
         type="text"
         placeholder="enter stock quantity"
          />
          
          <Input 
          register={register}
          id="description"
          name="description"
          label="Description"
          placeholder="enter description about product"
          required
          />





    </form>
    )
}