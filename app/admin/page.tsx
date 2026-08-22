import DashboardCard from "@/components/admin/dashboard/card";
import ProductDetails from "@/components/admin/dashboard/products";
import React from "react";

const AdminDashboard = () => {
  return (
    <main>
      <section className="flex flex-col gap-0.5 px-10 py-1 ">
        <h1 className="font-bold text-gray-700 text-md tracking-wide">
          Good morining , Hari
        </h1>
        <p className="text-sm text-gray-500 font-semibold">
          Here's what is happening with your store today
        </p>

        <div className="flex  flex-wrap  gap-0.5 mb-4">
          <DashboardCard title="Products" value={35} />
          <DashboardCard title="Categories" value={233} />
          <DashboardCard title="Brands" value={12} />
          <DashboardCard title="Orders" value={50} />
          <DashboardCard title="User" value={110} />
        </div>
        <div className="text-md font-semibold text-gray-600">
          <h2 className="text-black text-[18px]">Recent Products</h2>
          <p>Recently added products</p>
        </div>
        <ProductDetails />
      </section>
    </main>
  );
};
export default AdminDashboard;
