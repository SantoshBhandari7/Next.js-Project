import React from "react";
import BrandForm from "@/app/components/common/form/bran.form";

const BrandPage = () => {
  return (
    <main className=" min-h-screen  flex justify-center items-center">
      <section className="min-h-80 w-100  border rounded-lg px-6 py-8">
        <div className="mb-4 flex flex-col gap-1">
          <h1 className="text-blue-500 font-bold  text-center  text-bold text-xl  tracking-wider">
            Create Brand
          </h1>
          <p className="text-gray-600 text-center">
            Fillup this form to make your own brand
          </p>
        </div>
        <BrandForm />
      </section>
    </main>
  );
};
export default BrandPage;
