"use client";
import LoginForm from "@/components/common/form/login.form";
import React from "react";
import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  return (
    <main className="min-h-screen flex justify-center items-center ">
      {/* <h1>Login Page</h1> */}
      <section className="min-h-80 w-100  border rounded-lg px-6 py-8">
        <div className="mb-4 flex flex-col gap-1  ">
          <h1 className="font-bold text-2xl text-fuchsia-400 text-center">
            Login
          </h1>
          <p className="font-serif text-sm text-blue-300 text-center">
            Welcome Back
          </p>
        </div>
        {/* <QueryClientProvider client={queryclient}> */}
        <LoginForm />
        {/* </QueryClientProvider> */}
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
          <button
            onClick={() => router.push("/")}
            className=" flex text-red-400  justify-center gap-2 items-center text-center font-semibold px-16 mt-2"
          >
            <BiLeftArrow size={20} /> Go Back To home
          </button>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
