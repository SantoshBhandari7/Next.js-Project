import CategoryForm from "@/components/admin/form/category.form";
import React from "react";

const CreateCetgory = () => {
  return (
    <main>
      <section className="flex justify-center items-center px-6 py-7">
        <div className="flex flex-col text-center">
          <h1 className="text-lg tracking-wider font-bold text-blue-500">
            Create Brand
          </h1>
          <p className="text-gray-600 ">Fillup this form to create brand</p>
        </div>
        <CategoryForm />
      </section>
    </main>
  );
};

export default CreateCetgory;
