"use client";
import React, { useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import { useForm } from "react-hook-form";
import { TSignUp } from "@/types/auth.types";

import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "@/schema/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { Signup } from "@/api/auth.api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  // const [data, setData] = useState({
  //   full_name:"",
  //   email: "",
  //   password: "",
  //   confirmPassword:"",
  //   phone:"",
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUp>({
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirmpassword: "",
      phone: "",
    },
    resolver: yupResolver(RegisterSchema),
    mode: "all",
  });

  // const onChange = (e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   setData((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // };
  const { mutate, isPending } = useMutation({
    mutationFn: Signup,
    onSuccess: (response) => {
      console.log("Register mutation on success", response);
      toast.success(response?.message ?? "sign up successfully");
      router.replace("/login");
    },
    onError: (error) => {
      console.log("Register mutation on error", error);
      toast.error(error?.message ?? "signUp failed");
    },
  });

  const onSubmit = async (data: TSignUp) => {
    console.log("Signup submitted", data);
    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        register={register}
        id="name"
        name="full_name"
        type="text"
        placeholder="Hari Giri"
        label="Full_Name"
        required
        error={errors?.full_name?.message}
      />

      <Input
        register={register}
        id="email"
        name="email"
        type="email"
        placeholder="hari1@gmail.com"
        label="Email"
        required
        error={errors?.email?.message}
      />

      <Input
        register={register}
        id="password"
        name="password"
        type="password"
        placeholder="enter password"
        label="Password"
        required
        error={errors?.password?.message}
      />
      <Input
        register={register}
        required
        id="confirmpassword"
        name="confirmpassword"
        type="password"
        placeholder="re-enter password"
        label="Confirm Password"
        error={errors?.confirmpassword?.message}
      />
      <Input
        register={register}
        id="phone"
        name="phone"
        type="phone"
        placeholder="9823102932"
        label="Phone"
        error={errors?.phone?.message}
      />

      <div className="mt-2 ">
        <Button
          type="submit"
          disabled={isPending}
          label={isPending ? "Sign in" : "SignUp"}
        />
      </div>
    </form>
  );
};
export default SignUpForm;
