import SideBar from "@/components/admin/layout/sidebar";
import AuthSection from "@/components/common/ui/auth-section";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex bg-gray-300">
      <SideBar />
      <section className="h-full w-screen flex flex-col">
        <nav className="h-16 border-b border-gray-400 w-full flex justify-between items-center px-10">
          <p className="italic font-bold text-lg text-gray-700">Hello Admin</p>
          <AuthSection />
        </nav>
        <div className=" flex-1 p-2">{children}</div>
      </section>
    </main>
  );
};

export default AdminLayout;
