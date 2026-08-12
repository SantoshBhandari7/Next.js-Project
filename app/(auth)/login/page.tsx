"use client";
import LoginForm from "@/app/components/common/form/login.form";
import React from "react";
import Link from "next/link";
import {QueryClient, QueryClientProvider}from "@tanstack/react-query"


const queryclient = new QueryClient();

const LoginPage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center ">
      {/* <h1>Login Page</h1> */}
      <section className="min-h-80 w-100  border rounded-lg px-6 py-8">
        <div className="mb-4 flex flex-col gap-1  ">
          <h1 className="font-bold text-2xl text-fuchsia-400 text-center">Login</h1>
          <p className="font-serif text-sm text-blue-300 text-center">Welcome Back</p>
        </div>
        <QueryClientProvider client={queryclient}>
        <LoginForm />
        </QueryClientProvider>
        <div className=" flex flex-col text-center gap-0.5 mt-1 ">
          <Link href={"/forgot-password"}>
            <p className="text-blue-500 mt-2">forgot password?</p>
          </Link>
       
          <p>
            Don't have an Account.
            <Link href={"/sign-up"} className="text-blue-600 mt-1 pl-1">
              <span>SignUp</span>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
