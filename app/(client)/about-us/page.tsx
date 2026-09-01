import AboutCard from "@/components/client/about/aboutcard";
import Categories from "@/components/client/landing/categories";
import CategoryCard from "@/components/client/landing/categories/card";
import Hero from "@/components/client/landing/hero";
import Button from "@/components/common/ui/button";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { BiArrowToRight } from "react-icons/bi";
import { BsArrow90DegRight } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { FcCheckmark } from "react-icons/fc";
import { GiPriceTag } from "react-icons/gi";
import { RiArrowTurnForwardLine } from "react-icons/ri";

const AboutPage = () => {
  return (
    <main className="bg-white">
      <section className="relative flex gap-3 min-h-125 items-center  justify-center overflow-hidden bg-black">
        <div
          className="sm:w-fit md:w-full lg:w-screen absolute inset-0 opacity-80 min-h-40 bg-cover bg-centerp-7 sm:p-6 md:p-8 lg-10"
          style={{ backgroundImage: "url('/fashion_clothing_rack.png')" }}
        >
          <div className="flex flex-col justify-start items-start px-10 py-8">
            <h1 className="text-xl font-extrabold text-blue-500">
              About Nepali Store
            </h1>
            <div className="mt-3">
              {/* <p className="text-lg text-black font-extrabold ">new collection</p> */}
              <p className="text-black text-3xl font-extrabold tracking-wider">
                Shop Smart.
              </p>
              <p className="text-blue-800 text-3xl font-extrabold tracking-wider">
                Live Better.
              </p>
              <p className="relative text-lg text-gray-700 font-semibold">
                Welcome to Nepali Store, your destination for qualitybr fashion
                <br />
                and everyday essentials.We make online shopping simple,
                <br />
                convenient, and enjoyable. <br />
              </p>
            </div>
            <div className="mt-4 p-2 border border-gray-400 text-black font-semibold bg-blue-600 rounded-lg ">
              <Link href={"/products"}>
                <button className="flex gap-2 items-center">
                  Shop Now <FaArrowRight size={15} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[50vh] px-12 py-8 inset-0 w-full sm:w-fit md:w-full lg:w-screen">
        <div className=" relative flex justify-evenly  items-center gap-10  lg:justify-between">
          <Image
            src={"/clothing_store.png"}
            alt="clothing_store"
            width={1000}
            height={1000}
            className="rounded-2xl w-full  sm:w-80 md:w-100 lg:w-full "
          />
          <div className="flex flex-col gap-1  ">
            <p className="text-blue-500 font-semibold text-lg">Our Story</p>
            <h1 className="text-black font-bold text-2xl">
              Where style meets simplicity.
            </h1>
            <div className="flex flex-col w-min-100  sm:w-45 md:w-80 lg:w-100 ">
              <p className="text-md">
                Nepali Store was created with a simple idea — making quality
                fashion easy to find and easy to shop. We bring together
                carefully selected products, a smooth online shopping
                experience, and reliable customer service in one place. From
                everyday essentials to stylish fashion pieces, we want to help
                you find products that fit your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[40vh] flex justify-center items-center px-5 py-4 mt-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-blue-600 font-bold text-xl text-center">
            Why Choode Us?
          </h1>
          <h1 className="text-black text-2xl font-bold text-center">
            Why Shop With Nepali Store?
          </h1>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <AboutCard
              icon={<FcCheckmark size={30} />}
              name="Quality Products"
              description="We focus on quality
             and bring you products we are proud to offer"
            />
            <AboutCard
              icon={<CiDeliveryTruck size={30} />}
              name="Reliable Delivery"
              description="Fast and secure delivery right to your doorsteps on time."
            />
            <AboutCard
              icon={<AiFillCustomerService size={30} />}
              name="Customer Care"
              description="Our friends supports team is always here to help you anytime"
            />
            <AboutCard
              icon={<GiPriceTag size={30} />}
              name="Great Value"
              description="Best products at fair prices with exciting offeres and discounts "
            />
          </div>
        </div>
      </section>
      <div className=" relative flex flex-col text-center mt-4 ">
        <h1 className="text-blue-700 text-md font-bold">WHAT WE OFFER</h1>
        <h1 className="text-2xl font-semibold text-black">
          Our Top Categories
        </h1>
        <Categories />
      </div>
      <div className="flex  justify-evenly gap-3 p-5 border rounded border-gray-200 m-4 min-h-[10vh] px-6 py-5">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-black">
            Ready to Start Shopping?
          </h1>
          <p className="text-md font-normal">
            Discover products made for your everyday style.
          </p>
        </div>
        <Link href={"/products"}>
          <button className="flex text-black bg-blue-500 items-center font-semibold gap-1 p-2 rounded-md">
            Shop now <FaArrowRight size={15} />
          </button>
        </Link>
      </div>
    </main>
  );
};

export default AboutPage;
