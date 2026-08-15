import Logo from "@/components/common/ui/logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="min-h-100 w-full bg-gray-600">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-bold text-center tracking-wide">Nepali Store</h2>
          <p className="text-md font-semibold text-center">
            Modern clothing and accessories designed <br />
            for your everyday style
          </p>
        </div>
        {/* <div>
          <Link href={"/products"} className="hover:text-sky-400">
            Products
          </Link>
        </div> */}

        <div className="flex flex-col justify-center items-center mt-9" >
           
        </div>
        <div className="w-screen h-full flex justify-around gap-30 ">
              <div>
             <h3 className="text-start text-2xl font-bold">Contact</h3>
            <div className="flex flex-col gap-0.5 font-serif font-semibold">
                <p>Kathmandu, Nepal</p>
                <p>+977 9801282822</p>
                <p>nepstore@gmail.com</p>
            </div>
            </div>

            <div className=" flex flex-col justify-end ">
            <h3 className="text-end pr-20 text-xl font-bold">Find Us</h3>
            <div className=" justify-end border-0 ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7066.611335314634!2d85.27896704617208!3d27.67694604308605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1786826497725!5m2!1sen!2snp" width="500" height="250" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-80 h-full bg-gray-500 rounded-2xl"></iframe>  
            </div>
            </div>
          

        </div>


        <p className="flex justify-center mb-4 mt-2  ">
          &copy; Nepali Store. All rights reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
