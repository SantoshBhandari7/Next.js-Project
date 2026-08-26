"use me";
import { getProfile, Login, logoutUser } from "@/api/auth.api";
import AuthContext from "@/context/auth.context";
import { userOnly } from "@/types/enum.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AuthProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const { isLoading, isError, data } = useQuery({
    queryFn: getProfile,
    queryKey: ["auth-profile"],
    refetchOnWindowFocus: "always",
    refetchInterval: 5 * 60 * 1000,
    retry: false,
  });

  const router = useRouter();

  //* for logout mutation
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: (response) => {
      toast.success(response?.message ?? "logout success");
    },
    onError: (error) => {
      toast.error(error?.message ?? "logout failed");
    },
  });

  //*for login mutation
  const { mutate: loginMutation, isPending: isLoginPending } = useMutation({
    mutationFn: Login,
    onSuccess: (response) => {
      console.log("login mutation on success", response);
      toast.success(response?.message ?? "login successfully");
      if (userOnly.includes(response.data.data.role)) {
        router.replace("/");
      } else {
        router.replace("/admin");
      }
    },
    onError: (error) => {
      console.log("login mutation on error", error);
      toast.error(error?.message ?? "login failed");
    },
  });

  //*

  return (
    <AuthContext.Provider
      value={{
        user: data?.data,
        isLoading: !!isLoading || !!isPending || !!isLoginPending,
        login: loginMutation,
        logout,
        register: () => {},
      }}
    ></AuthContext.Provider>
  );
};

export default AuthProvider;
