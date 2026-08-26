import BrandDetails from "@/components/admin/dashboard/brand/brand";
import DashboardCard from "@/components/admin/dashboard/card/card";
import BrandForm from "@/components/admin/form/bran.form";
import Button from "@/components/common/ui/button";
import Link from "next/link";
import React from "react";

const BrandPageLayout = () => {
  return (
    <main className=" min-h-screen w-full bg-gray-300 px-10 py-5">
      <section>
        <div className="flex  items-center justify-between">
          <div className="flex flex-col gap-1 ">
            <h1 className="text-gray-700 font-bold   text-bold text-xl  tracking-wider">
              Brands
            </h1>
            <p className="text-gray-600 ">Manage your brands</p>
          </div>
          <div className="flex gap-5">
            <div className="w-30">
              <Link href={"/admin/brands/add-new"}>
                <Button type="button" label="+Add Brand" />
              </Link>
            </div>
            <div className="w-33">
              <Link href={"/admin/brands/update"}>
                <Button type="submit" label="Update Brand" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 ">
          <DashboardCard value={6} title="Clothes" />
          <DashboardCard value={5} title="Hardware and Electonics" />
          <DashboardCard value={4} title="Skin Care" />
        </div>
        <BrandDetails />
      </section>
    </main>
  );
};
export default BrandPageLayout;
