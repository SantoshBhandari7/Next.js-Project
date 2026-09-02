import ContactForm from "@/components/client/form/contact.form";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <main className="min-h-screen w-full bg-gray-200 px-3 py-6 sm:px-5 sm:py-8 md:px-8 lg:px-10 lg:py-10">
      <section className="mx-auto w-full max-w-6xl rounded-lg border border-gray-400 bg-white px-4 py-7 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-9">
        <div className="mt-2 flex flex-col items-center justify-center text-center">
          <h1 className="text-xl font-bold tracking-wider text-black sm:text-2xl">
            Contact Us
          </h1>

          <p className="mt-1 text-sm font-semibold text-gray-500 sm:text-base md:text-lg">
            We'd love to hear from you. Get in touch with us.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-center lg:gap-8">
          <div className="w-full rounded-lg border border-gray-400 px-5 py-6 sm:px-7 sm:py-7 lg:w-[40%]">
            <h1 className="text-xl font-bold text-gray-600 sm:text-2xl">
              Get in touch
            </h1>

            <div className="mt-6">
              <h2 className="flex items-center gap-2 text-lg font-semibold sm:text-xl">
                <CiLocationOn size={22} className="text-red-500" />
                Location
              </h2>

              <p className="mt-1 text-sm text-gray-700 sm:text-base">
                Kathmandu, Nepal
              </p>
            </div>

            <div className="mt-5">
              <h2 className="flex items-center gap-2 text-lg font-semibold sm:text-xl">
                <MdEmail size={21} />
                Email
              </h2>

              <p className="mt-1 break-all text-sm text-gray-700 sm:text-base">
                nepstore@gmail.com
              </p>
            </div>

            <div className="mt-5">
              <h2 className="flex items-center gap-2 text-lg font-semibold sm:text-xl">
                <BiPhone size={21} />
                Phone
              </h2>

              <p className="mt-1 text-sm text-gray-700 sm:text-base">
                +977-9810893450
              </p>
            </div>
          </div>

          <div className="w-full rounded-lg border border-gray-400 px-5 py-6 sm:px-7 sm:py-7 lg:w-[60%]">
            <h1 className="mb-5 text-xl font-semibold text-gray-600 sm:text-2xl">
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
