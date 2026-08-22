import Categories from "@/components/client/landing/categories";
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
    <main className="px-0 bg-gray-400">
      <section>
        <Hero />
      </section>
      <Categories />
    </main>
  );
}
