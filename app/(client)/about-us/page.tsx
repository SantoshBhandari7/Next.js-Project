"use client";

import Link from "next/link";
import { CheckmarkIcon } from "react-hot-toast";
import { BiHeart } from "react-icons/bi";
import { BsCheck, BsStar, BsTruck } from "react-icons/bs";
// import { Check, Truck, Heart, Star } from ";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ==============================
          1. HERO SECTION
      ============================== */}

      <section className="relative flex min-h-125 items-center justify-center overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/fashion_clothing_rack.png')",
          }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#0949DE]">
            About Us
          </p>

          <h1 className="text-4xl font-bold text-white md:text-6xl">
            About Nepali Store
          </h1>

          <p className="mt-5 text-xl text-gray-200">Shop Smart. Live Better.</p>

          <p className="mx-auto mt-3 max-w-xl text-gray-300">
            Quality fashion and everyday essentials, made simple for you.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-full bg-[#0949DE] px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* ==============================
          2. OUR STORY
      ============================== */}

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* Image */}

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/clothing_store.png"
              alt="Nepali Store"
              className="h-112.5 w-full object-cover"
            />
          </div>

          {/* Content */}

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0949DE]">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold text-black md:text-4xl">
              Fashion Made Simple
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              Nepali Store was created with a simple idea — making quality
              fashion easy to find and easy to shop.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We bring together carefully selected products, a smooth shopping
              experience, and reliable customer service in one place.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              From everyday essentials to stylish fashion pieces, we want to
              help you find products that fit your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* ==============================
          3. WHY US
      ============================== */}

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0949DE]">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-black md:text-4xl">
              Why Us?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              We make shopping simple, reliable, and enjoyable.
            </p>
          </div>

          {/* Cards */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:border-[#0949DE] hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                <BsCheck size={26} className="text-[#0949DE]" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-black">
                Quality Products
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                Carefully selected products that combine quality and style.
              </p>
            </div>

            {/* Card 2 */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:border-[#0949DE] hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                <BsTruck size={26} className="text-[#0949DE]" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-black">
                Reliable Delivery
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                Fast and secure delivery right to your doorstep.
              </p>
            </div>

            {/* Card 3 */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:border-[#0949DE] hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                <BiHeart size={26} className="text-[#0949DE]" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-black">
                Customer Care
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                Our team is always ready to help whenever you need us.
              </p>
            </div>

            {/* Card 4 */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:border-[#0949DE] hover:shadow-lg">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                <BsStar size={26} className="text-[#0949DE]" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-black">
                Great Value
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                Quality products at reasonable and competitive prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          4. WHAT WE OFFER
      ============================== */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}

          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0949DE]">
              Our Collection
            </p>

            <h2 className="mt-3 text-3xl font-bold text-black md:text-4xl">
              What We Offer
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-500">
              Explore our popular fashion collections.
            </p>
          </div>

          {/* Three Products */}

          <div className="grid gap-7 md:grid-cols-3">
            {/* Shoes */}

            <Link href="/products">
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-95 overflow-hidden">
                  <img
                    src="/sneakers.png"
                    alt="Shoes"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/50" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold uppercase text-white">
                      Shoes
                    </h3>

                    <p className="mt-2 text-sm text-white">
                      Step into comfort and style.
                    </p>

                    <p className="mt-4 text-sm font-semibold text-white underline">
                      Explore Collection →
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Kurtha */}

            <Link href="/products">
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-95 overflow-hidden">
                  <img
                    src="/kurta.png"
                    alt="Kurtha"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/50" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold uppercase text-white">
                      Kurtha
                    </h3>

                    <p className="mt-2 text-sm text-white">
                      Traditional style with a modern touch.
                    </p>

                    <p className="mt-4 text-sm font-semibold text-white underline">
                      Explore Collection →
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Coats */}

            <Link href="/products">
              <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-95 overflow-hidden">
                  <img
                    src="/brown_coat.png"
                    alt="Coats"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/50" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold uppercase text-white">
                      Coats
                    </h3>

                    <p className="mt-2 text-sm text-white">
                      Stay stylish and comfortable.
                    </p>

                    <p className="mt-4 text-sm font-semibold text-white underline">
                      Explore Collection →
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ==============================
          5. OUR MISSION
      ============================== */}

      <section className="bg-black px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0949DE]">
            Our Mission
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Making Online Shopping
            <br />
            Simple & Enjoyable
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            We bring quality products and a smooth shopping experience together
            in one place. Our goal is to make every shopping experience simple,
            reliable, and enjoyable.
          </p>
        </div>
      </section>

      {/* ==============================
          6. READY TO SHOP
      ============================== */}

      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-black md:text-4xl">
            Ready to Shop?
          </h2>

          <p className="mt-4 text-gray-500">
            Discover products made for your everyday style.
          </p>

          <Link
            href="/products"
            className="mt-7 inline-block rounded-full bg-[#0949DE] px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}
