"use client";
import { getProfile, login, logoutUser } from "@/api/auth.api";
import AuthContext from "@/context/auth.context";
import { userOnly } from "@/types/enum.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const AuthProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { isLoading, isError, data } = useQuery({
    queryFn: getProfile,
    queryKey: ["auth-profile"],
    refetchOnWindowFocus: true,
    refetchInterval: 5 * 60 * 1000,
    retry: false,
  });

  //* for logout mutation
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: (response) => {
      toast.success(response?.message ?? "logout success");
      queryClient.invalidateQueries({
        queryKey: ["auth-profile"],
      });
      queryClient.setQueryData(["auth-profile"], null);
      router.replace("/");
    },
    onError: (error) => {
      toast.error(error?.message ?? "logout failed");
    },
  });

  //*for login mutation
  const { mutate: loginMutation, isPending: isLoginPending } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      console.log("login mutation on success", response);
      toast.success(response?.message ?? "login successfully");
      queryClient.invalidateQueries({
        queryKey: ["auth-profile"],
      });
      if (userOnly.includes(response.data?.data?.role)) {
        router.replace("/");
      } else {
        router.replace("/admin");
      }
    },
    onError: (error) => {
      // console.log("login mutation on error", error);
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
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
