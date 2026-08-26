"use client";
import Logo from "@/components/common/ui/logo";
import React from "react";
import NavLinks from "./nav-content";
import AuthSection from "@/components/common/ui/auth-section";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { HiShoppingBag } from "react-icons/hi";
import useAuth from "@/hook/auth.hook";

const NavBar = () => {
  const { isLoading, user } = useAuth();
  return (
    <nav className="h-16 w-full  flex items-center justify-between px-18 border-b border-b-gray-400 bg-gray-400 shadow">
      <div className="h-16 w-fit flex items-center">
        <Logo />
      </div>
      <NavLinks />

      {!isLoading && !user ? (
        <div className="flex items-center gap-2">
          <Link href={"/login"}>
            <button className="cursor-pointer rounded-lg py-3 pc-2 min-w-30 text-black font-bold text-lg bg-white border border-blue-400 ">
              Login
            </button>
          </Link>
          <Link href={"/sign-up"}>
            <button className="cursor-pointer rounded-lg py-3 pc-2 min-w-30 text-primary font-bold text-lg bg-white border border-blue-400 ">
              Sign Up
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Link href={"/wishlist"}>
              <FaHeart
                title="wishlist"
                size={24}
                className="mt-1 text-red-500"
              />
            </Link>
            <Link href={"/cart"}>
              <HiShoppingBag
                title=" cart"
                size={26}
                className="text-blue-600"
              />
            </Link>
          </div>
          <AuthSection />
        </div>
      )}
    </nav>
  );
};
export default NavBar;
