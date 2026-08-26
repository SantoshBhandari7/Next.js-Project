import Button from "@/components/common/ui/button";
import { url } from "inspector";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsDashLg } from "react-icons/bs";
import { GiStraightPipe } from "react-icons/gi";
import { GoArrowRight } from "react-icons/go";

export const metadata: Metadata = {
  title: "Home | Nepali Store",
  description: "Nepali store",
};

const Hero = () => {
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
          style={{ backgroundImage: "url('/herpagebg.png')" }}
        >
          <div className=" flex flex-col pl-20 pt-20">
            <div className="flex gap-1 text-blue-400">
              <BsDashLg className="size-[40]" />
              <p>New Collection</p>
            </div>
            <h1 className="font-bold text-4xl text-white tracking-wide ">
              Style That
              <br />{" "}
              <p>
                {" "}
                Defines <span className="text-blue-600 text-4xl">You.</span>
              </p>
            </h1>
            <p className="text-white font-normal py-4">
              Discover premium products designed to elevate <br />
              your everyday life, carefully curated, quality <br />
              tested, and delivery fast
            </p>
          </div>

          <div className="mt-4 flex gap-1 pl-20">
            <Link
              href={"/products"}
              className="border border-gray-800 bg-sky-700 px-7 py-3 text-sm font-medium text-white rounded-3xl "
            >
              Shop
            </Link>
            <Link
              href={"/products"}
              className="border border-gray-800 bg-sky-700 py-3 px-6 text-sm font-medium text-white rounded-3xl flex items-center gap-0.5"
            >
              Explorer Collection <GoArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Hero;
