
import SignUpForm from "@/components/common/form/sign-up.form";
import Button from "@/components/common/ui/button";
import Input from "@/components/common/ui/input";
import React, { Children } from "react";
import Link from "next/link";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { queryclient } from "@/app/layout";


// const queryclient = new QueryClient();

const SignUp = () => {
  return (
    <main className="min-h-screen flex justify-center items-center ">
      <section className="min-h-50 w-100 gap-0.5 border rounded-lg px-5 py-8 ">
        <div className="flex flex-col gap-0.5 text-center ">
          <h1 className="font-bold text-blue-500 tracking-wider text-2xl  ">
            Create Account
          </h1>
          <p className="font-serif text-gray-600">Create account to visit website</p>
        </div>
        <div className="pt-3">
          {/* <QueryClientProvider client ={queryclient}> */}
        <SignUpForm/>
        {/* </QueryClientProvider> */}
        </div>
       <div className="flex text-center pl-6 gap-2 ">
        <p className=" mt-2 ml-2 pl-0.5">You already have an Account?</p>
         <Link href={"/login"} className="text-blue-700 text-md mt-2 ">Login
        </Link>
       </div>
     
      </section>
    </main>
  );
};

export default SignUp;
