import ContactForm from "@/components/client/form/contact.form";
import React from "react";
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import { CiLocationOff, CiLocationOn } from "react-icons/ci";
import { FaLocationPin, FaLocationPinLock } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <main className=" justify-center min-h-screen bg-gray-200  px-10 py-10 sm:p-4 gap-3 md:p-6 lg:p-10">
      <section className="border border-gray-400 rounded-lg px-8 py-9">
        <div className="flex flex-col gap-0.5 justify-center items-center mt-4">
          <h1 className="text-xl font-bold tracking-wider">Contact Us</h1>
          <p className="text-lg font-semibold text-gray-500">
            We'd love to hear from you. Get in touch with us.
          </p>
        </div>
        <div className="flex justify-evenly  gap-0.5 py-10">
          <div className="flex flex-col gap-3 border border-gray-400 rounded-lg px-6 py-7">
            <h1 className="text-xl font-bold text-gray-600">Get in touch</h1>
            <div className="flex flex-col gap-0.5">
              <h2 className="text-xl items-center font-semibold flex gap-1">
                <CiLocationOn size={20} color="red" />
                location
              </h2>
              <p className="text-lg">Kathmandu, Nepal</p>
            </div>

            <div className="flex flex-col mt-2">
              <h2 className="flex gap-2 items-center  text-xl font-semibold">
                <MdEmail size={20} /> Email
              </h2>
              <p className="text-lg ">nepalistore@gmail.com</p>
            </div>

            <div className="flex flex-col  mt-2">
              <h2 className="flex gap-2 items-center text-xl font-semibold">
                <BiPhone size={20} /> Phone
              </h2>
              <p className="text-lg">+977-9810893450</p>
            </div>
          </div>
          <div className="flex flex-col border border-gray-400  rounded-lg px-10 py-7 ">
            <h1 className="text-xl font-semibold text-gray-600">
              Contact Form
            </h1>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
