"use client";
import SideBar from "@/components/admin/layout/sidebar";
import AuthSection from "@/components/common/ui/auth-section";
import withAuth from "@/hoc/withAuth.hoc";
import { admins } from "@/types/enum.types";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex bg-white">
      <SideBar />
      <section className="h-full w-screen flex flex-col">
        <nav className="h-16 border-b border-gray-400 w-full flex justify-between items-center  bg-gray-400 px-10">
          <p className="italic font-bold text-lg text-gray-700">Hello</p>
          <AuthSection />
        </nav>
        <div className=" flex-1 p-2">{children}</div>
      </section>
    </main>
  );
};

const Layout = withAuth(AdminLayout, admins);
export default Layout;
