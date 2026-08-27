"use client";
import React, { useContext, useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TLogin } from "@/types/auth.types";
import { LoginSchema } from "@/schema/auth.schema";
import AuthContext from "@/context/auth.context";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { userOnly } from "@/types/enum.types";
import { login } from "@/api/auth.api";
// import { useRouter } from "next/router";

const LoginForm = () => {
  // const { isLoading: isPending } = useContext(AuthContext);
  const router = useRouter();

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

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      console.log("login mutation on success", response);
      toast.success(response?.message ?? "login successfully");
      if (userOnly.includes(response.data?.data?.role)) {
        router.replace("/");
      } else {
        router.replace("/admin");
      }
    },
    onError: (error) => {
      toast.error(error?.message ?? "login failed");
    },
  });

  //* on Submit
  const onSubmit = (data: TLogin) => {
    console.log("login submitted", data);
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 mt-5"
    >
      {/* email input  */}
      <Input
        register={register}
        name="email"
        required
        id="email"
        placeholder="johndoe@gmail.com"
        label="Email"
        type="email"
        error={errors?.email?.message}
      />
      {/* password input  */}

      <Input
        required={true}
        register={register}
        name="password"
        id="password"
        placeholder="enter password"
        label="Password"
        type="password"
        error={errors?.password?.message}
      />

      {/* button */}
      <div className="mt-0">
        <Button
          disabled={isPending}
          label={isPending ? "Logging In...." : "Login"}
          type={"submit"}
        />
      </div>
    </form>
  );
};

export default LoginForm;
