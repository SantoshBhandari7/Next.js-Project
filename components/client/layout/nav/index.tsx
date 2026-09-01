// // "use client";
// // import Logo from "@/components/common/ui/logo";
// // import React from "react";
// // import NavLinks from "./nav-content";
// // import AuthSection from "@/components/common/ui/auth-section";
// // import Link from "next/link";
// // import { FaHeart } from "react-icons/fa6";
// // import { HiShoppingBag } from "react-icons/hi";
// // import useAuth from "@/hook/auth.hook";

// // const NavBar = () => {
// //   const { isLoading, user } = useAuth();
// //   return (
// //     <nav className="w-full border-b border-gray-300 bg-gray-400">
// //       <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
// //         <div className="h-16 w-fit flex items-center">
// //           <Logo />
// //         </div>
// //         <NavLinks />

// //         {!isLoading && !user ? (
// //           <div className="flex items-center gap-2">
// //             <Link href={"/login"}>
// //               <button className="cursor-pointer rounded-lg py-3 pc-2 min-w-30 text-black font-bold text-lg bg-white border border-blue-400 ">
// //                 Login
// //               </button>
// //             </Link>
// //             <Link href={"/sign-up"}>
// //               <button className="cursor-pointer rounded-lg py-3 pc-2 min-w-30 text-primary font-bold text-lg bg-white border border-blue-400 ">
// //                 Sign Up
// //               </button>
// //             </Link>
// //           </div>
// //         ) : (
// //           <div className="flex items-center gap-3">
// //             <div className="flex items-center gap-2">
// //               <Link href={"/wishlist"}>
// //                 <FaHeart
// //                   title="wishlist"
// //                   size={24}
// //                   className="mt-1 text-red-500"
// //                 />
// //               </Link>
// //               <Link href={"/cart"}>
// //                 <HiShoppingBag
// //                   title=" cart"
// //                   size={26}
// //                   className="text-blue-600"
// //                 />
// //               </Link>
// //             </div>
// //             <AuthSection />
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };
// // export default NavBar;

"use client";

import Logo from "@/components/common/ui/logo";
import React, { useState } from "react";
import NavLinks from "./nav-content";
import AuthSection from "@/components/common/ui/auth-section";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { HiShoppingBag, HiMenu, HiX } from "react-icons/hi";
import useAuth from "@/hook/auth.hook";

const NavBar = () => {
  const { isLoading, user } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Actions = () => {
    if (isLoading) return null;

    // User is NOT logged in
    if (!user) {
      return (
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
          <Link href="/login" onClick={() => setIsMenuOpen(false)}>
            <button
              className="
                w-full
                rounded-lg
                border
                border-blue-400
                bg-white
                px-4
                py-2
                text-sm
                font-bold
                text-black
                lg:w-auto
              "
            >
              Login
            </button>
          </Link>

          <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
            <button
              className="
                w-full
                rounded-lg
                border
                border-blue-400
                bg-white
                px-4
                py-2
                text-sm
                font-bold
                text-primary
                lg:w-auto
              "
            >
              Sign Up
            </button>
          </Link>
        </div>
      );
    }

    // User IS logged in
    return (
      <div className="flex items-center gap-5">
        <Link href="/wishlist" onClick={() => setIsMenuOpen(false)}>
          <FaHeart title="Wishlist" size={22} className="text-red-500" />
        </Link>

        <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
          <HiShoppingBag title="Cart" size={24} className="text-blue-600" />
        </Link>

        <AuthSection />
      </div>
    );
  };

  return (
    <nav className="w-full border-b border-gray-300 bg-gray-400">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}

        <div className="flex h-16 shrink-0 items-center">
          <Logo />
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          <NavLinks />
          <Actions />
        </div>
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-2xl text-black lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-300 bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {/* Navigation */}

            <NavLinks />
            <Actions />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
