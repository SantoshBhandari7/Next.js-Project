import Button from "@/components/common/ui/button";
import { url } from "inspector";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

export const metadata: Metadata = {
  title: "Home | Nepali Store",
  description: "Nepali store",
};

export default function Home() {
  return (
    <main className="px-0">
      <section className="h-[85vh">
        {/* <Image
          src={"/profile_image.png"}
          alt="profile"
          width={500}
          height={300}
          className="flex justify-end"
        /> */}

        <div
          className="min-h-screen bg-cover bg-end "
          style={{ backgroundImage: "url('/background_image.png')" }}
        >
          <div
            className=" flex flex-col pl-20 pt-20">

            <h1 className="font-bold text-2xl text-black tracking-wide ">
              Shop Smarter.
              <br /> Live Better.
            </h1>
            <p className="text-black font-semibold">
              Discover premium products designed to elevate <br />
              your everyday life, carefully curated, quality <br />
              tested, and delivery fast
            </p>
          </div>

          <div className="mt-4 flex gap-1 pl-20">
            <Link
              href={"/products"}
              className="border border-blue-500 bg-gray-900 px-7 py-3 text-sm font-medium text-white rounded-3xl "
            >
              Shop
            </Link>
            <Link
              href={"/products"}
              className="border border-blue-500 bg-gray-900  py-3 px-6 text-sm font-medium text-white rounded-3xl flex items-center gap-0.5"
            >
              Explorer Collection <GoArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
