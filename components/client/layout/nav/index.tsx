"use client";

import Logo from "@/components/common/ui/logo";
import AuthSection from "@/components/common/ui/auth-section";
import NavLinks from "./nav-content";

import Link from "next/link";
import React, { useState } from "react";

import { FaHeart } from "react-icons/fa6";
import { HiMenu, HiShoppingBag, HiX } from "react-icons/hi";

import useAuth from "@/hook/auth.hook";

const NavBar = () => {
  const { isLoading, user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full border-b border-gray-300 bg-gray-400">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 shrink-0 items-center">
          <Logo />
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <NavLinks />
          {!isLoading && !user ? (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-lg border border-blue-400 bg-white px-5 py-2 font-bold text-black transition hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                href="/sign-up"
                className="rounded-lg border border-blue-400 bg-white px-5 py-2 font-bold text-blue-600 transition hover:bg-gray-100"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link href="/wishlist">
                <FaHeart
                  title="Wishlist"
                  size={23}
                  className="text-red-500 transition hover:scale-110"
                />
              </Link>

              <Link href="/cart">
                <HiShoppingBag
                  title="Cart"
                  size={26}
                  className="text-blue-600 transition hover:scale-110"
                />
              </Link>

              <AuthSection />
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center rounded-md p-1 text-3xl text-black lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {isMenuOpen && (
          <div className="absolute right-3 top-15 z-50 w-52 rounded-lg border border-gray-300 bg-white p-4 shadow-lg lg:hidden">
            <div onClick={closeMenu}>
              <NavLinks />
            </div>
            <div className="my-4 border-t border-gray-200" />
            {!isLoading && !user ? (
              <div className="flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="rounded-md bg-gray-100 px-4 py-2 text-center font-semibold text-black hover:bg-gray-200"
                >
                  Login
                </Link>

                <Link
                  href="/sign-up"
                  onClick={closeMenu}
                  className="rounded-md bg-blue-600 px-4 py-2 text-center font-semibold text-white hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Link
                  href="/wishlist"
                  onClick={closeMenu}
                  className="flex items-center gap-3 text-black"
                >
                  <FaHeart size={20} className="text-red-500" />
                  <span>Wishlist</span>
                </Link>

                <Link
                  href="/cart"
                  onClick={closeMenu}
                  className="flex items-center gap-3 text-black"
                >
                  <HiShoppingBag size={22} className="text-blue-600" />
                  <span>Cart</span>
                </Link>

                <div onClick={closeMenu}>
                  <AuthSection />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
