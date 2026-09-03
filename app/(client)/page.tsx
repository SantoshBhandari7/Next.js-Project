import Brands from "@/components/client/landing/brands";
import Categories from "@/components/client/landing/categories";
import FeaturedProduct from "@/components/client/landing/featured-products";
import Hero from "@/components/client/landing/hero";
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
    <main className=" bg-white">
      <section>
        <Hero />
      </section>
      <Brands />
      <Categories />
      <FeaturedProduct />
    </main>
  );
}
