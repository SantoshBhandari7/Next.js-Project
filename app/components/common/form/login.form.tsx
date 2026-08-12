"use client";
import React, { useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TLogin } from "@/types/auth.types";
import { LoginSchema } from "@/schema/auth.schema";
import { Login } from "@/api/auth.api";
import {Mutation, useMutation} from "@tanstack/react-query";

const LoginForm = () => {
  // const[data, setData] =useState({
  //   email:"",
  //   password:"",
  // });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LoginSchema),
    mode: "all",
  });
  console.log(errors);

  // const onChange = (e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
  //     const value = e.target.value;
  //     const name = e.target.name;
  //     setData((prev) => {
  //       return {
  //         ...prev,
  //         [name]: value,
  //       };
  //     });
  //   };

  const {mutate} = useMutation({
    mutationFn: Login,
    onSuccess: (response) => {
      console.log("login mutation on success", response);
    },
    onError: (error) => {
      console.log("login mutation on error", error);
    }
  })

  const onSubmit = async (data: TLogin) => {
    console.log("login submitted", data);
    mutate(data);
    // try {
    //    console.log("login submitted", data);
    //    const response= await Login(data);
    //    console.log("login submitted", response);
      
    // } catch (error) {
    //   console.log(error);
      
    // }
   

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
      <Input
        register={register}
        id="emali"
        name="email"
        type="email"
        placeholder="hari@gmail.com"
        label="Email"
        required
        error={errors?.email?.message}
      />
      <Input
        register={register}
        id="password"
        name="password"
        type="password"
        placeholder="enter your password"
        label="Password"
        required
        error={errors?.password?.message}
      />

      <div className="mt-3">
        <Button type={"submit"} label={"Login"} />
      </div>
    </form>
  );
};
export default LoginForm;
