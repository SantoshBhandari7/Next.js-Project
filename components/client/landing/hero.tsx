import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { BsDashLg } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";

export const metadata: Metadata = {
  title: "Home | Nepali Store",
  description: "Nepali store",
};

const Hero = () => {
  return (
    <main className="w-full">
      <section className="w-full">
        <div
          className="
            relative
            min-h-150
            w-full
            bg-cover
            bg-center
            sm:min-h-163
            lg:min-h-175
            lg:bg-right
          "
          style={{
            backgroundImage: "url('/herpagebg.png')",
          }}
        >
          {/* Hero Content */}
          <div className="relative z-10 flex min-h-150 items-center px-5 py-12 sm:min-h-162 sm:px-10 sm:py-16 lg:min-h-175 lg:px-20">
            <div className="max-w-xl">
              {/* New Collection */}
              <div className="flex items-center gap-1 text-blue-400">
                <BsDashLg className="h-8 w-8 sm:h-10 sm:w-10" />

                <p className="text-sm font-medium sm:text-base">
                  New Collection
                </p>
              </div>

              {/* Heading */}
              <h1 className="mt-3 text-3xl font-bold leading-tight tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Style That
                <br />
                Defines <span className="text-blue-600">You.</span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-lg text-sm font-normal leading-6 text-white sm:text-base sm:leading-7 lg:text-lg">
                Discover premium products designed to elevate your everyday
                life, carefully curated, quality tested, and delivered fast.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/products"
                  className="
                    inline-flex
                    w-fit
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-gray-800
                    bg-sky-700
                    px-7
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-sky-800
                  "
                >
                  Shop
                </Link>

                <Link
                  href="/products"
                  className="
                    inline-flex
                    w-fit
                    items-center
                    justify-center
                    gap-1
                    rounded-3xl
                    border
                    border-gray-800
                    bg-sky-700
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-sky-800
                  "
                >
                  Explore Collection
                  <GoArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
