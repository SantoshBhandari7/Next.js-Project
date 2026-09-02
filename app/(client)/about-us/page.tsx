import AboutCard from "@/components/client/about/aboutcard";
import Categories from "@/components/client/landing/categories";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiFillCustomerService } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { FcCheckmark } from "react-icons/fc";
import { GiPriceTag } from "react-icons/gi";

const AboutPage = () => {
  return (
    <main className="min-h-screen w-full bg-white px-3 py-4 sm:px-5 lg:px-8">
      {/* ================= HERO ================= */}
      <section className="relative min-h-132 overflow-hidden rounded-xl bg-black sm:min-h-135 lg:min-h-150">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url('/fashion_clothing_rack.png')",
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-132 items-center px-5 py-10 sm:min-h-135 sm:px-10 lg:min-h-150 lg:px-16">
          <div className="max-w-xl">
            <h1 className="text-lg font-extrabold text-blue-500 sm:text-xl lg:text-2xl">
              About Nepali Store
            </h1>

            <div className="mt-3">
              <p className="text-2xl font-extrabold tracking-wide text-black sm:text-3xl lg:text-4xl">
                Shop Smart.
              </p>

              <p className="text-2xl font-extrabold tracking-wide text-blue-800 sm:text-3xl lg:text-4xl">
                Live Better.
              </p>

              <p className="mt-3 max-w-lg text-sm font-semibold leading-6 text-gray-700 sm:text-base lg:text-lg lg:leading-7">
                Welcome to Nepali Store, your destination for quality fashion
                and everyday essentials. We make online shopping simple,
                convenient, and enjoyable.
              </p>
            </div>

            <div className="mt-5">
              <Link href="/products">
                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 sm:px-5 sm:py-3">
                  Shop Now
                  <FaArrowRight size={15} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="w-full px-2 py-10 sm:px-4 sm:py-14 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-12">
          {/* Image */}
          <div className="w-full max-w-xl lg:w-1/2">
            <Image
              src="/clothing_store.png"
              alt="clothing store"
              width={600}
              height={600}
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full max-w-xl lg:w-1/2">
            <p className="text-center text-lg font-semibold text-blue-500 lg:text-left">
              Our Story
            </p>

            <h1 className="mt-1 text-center text-2xl font-bold text-black sm:text-3xl lg:text-left">
              Where style meets simplicity.
            </h1>

            <p className="mt-4 text-center text-sm leading-6 text-gray-700 sm:text-base lg:text-left lg:leading-7">
              Nepali Store was created with a simple idea — making quality
              fashion easy to find and easy to shop. We bring together carefully
              selected products, a smooth online shopping experience, and
              reliable customer service in one place. From everyday essentials
              to stylish fashion pieces, we want to help you find products that
              fit your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="flex w-full justify-center px-2 py-10 sm:px-5 sm:py-14">
        <div className="w-full max-w-7xl">
          <h1 className="text-center text-lg font-bold text-blue-600 sm:text-xl">
            Why Choose Us?
          </h1>

          <h2 className="mt-1 text-center text-2xl font-bold text-black sm:text-3xl">
            Why Shop With Nepali Store?
          </h2>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <AboutCard
              icon={<FcCheckmark size={30} />}
              name="Quality Products"
              description="We focus on quality and bring you products we are proud to offer."
            />

            <AboutCard
              icon={<CiDeliveryTruck size={30} />}
              name="Reliable Delivery"
              description="Fast and secure delivery right to your doorstep on time."
            />

            <AboutCard
              icon={<AiFillCustomerService size={30} />}
              name="Customer Care"
              description="Our support team is always here to help you anytime."
            />

            <AboutCard
              icon={<GiPriceTag size={30} />}
              name="Great Value"
              description="Best products at fair prices with exciting offers and discounts."
            />
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="mt-5 w-full px-2 py-8 sm:px-5 sm:py-12">
        <div className="text-center">
          <h1 className="text-sm font-bold text-blue-700 sm:text-base">
            WHAT WE OFFER
          </h1>

          <h2 className="mt-1 text-2xl font-semibold text-black sm:text-3xl">
            Our Top Categories
          </h2>
        </div>

        <div className="mt-6">
          <Categories />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto mt-6 flex w-full max-w-6xl flex-col items-center justify-between gap-5 rounded-lg border border-gray-200 px-5 py-6 text-center sm:px-8 lg:flex-row lg:text-left">
        <div>
          <h1 className="text-xl font-bold text-black sm:text-2xl">
            Ready to Start Shopping?
          </h1>

          <p className="mt-1 text-sm text-gray-600 sm:text-base">
            Discover products made for your everyday style.
          </p>
        </div>

        <Link href="/products">
          <button className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 font-semibold text-white transition hover:bg-blue-600 sm:px-5 sm:py-3">
            Shop Now
            <FaArrowRight size={15} />
          </button>
        </Link>
      </section>
    </main>
  );
};

export default AboutPage;
