// import Logo from "@/components/common/ui/logo";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="min-h-100 w-full bg-gray-500 px-4 py-3">
//       <div className="flex justify-evenly gap-6 px-6 py-2">
//         <div className="flex flex-col gap-0.5  w-full">
//           <h2 className="text-xl font-bold text-white text-center">
//             <Logo />
//           </h2>
//           <p className="text-md font-semibold text-center text-white">
//             Modern clothing and accessories designed <br />
//             for your everyday style
//           </p>
//         </div>
//         <div className="text-white w-full flex flex-col gap-2 font-semibold ">
//           <h1 className="text-2xl font-bold">Quick Links</h1>
//           <div className="flex flex-col px-3 py-0.5 gap-3">
//             <Link
//               href={"/"}
//               className=" hover:text-blue-500 hover:text-lg font-extralight"
//             >
//               Home
//             </Link>
//             <Link
//               href={"/products"}
//               className=" hover:text-blue-500 hover:text-lg font-extralight"
//             >
//               Products
//             </Link>
//             <Link
//               href={"/about-us"}
//               className=" hover:text-blue-500 hover:text-lg font-extralight"
//             >
//               About Us
//             </Link>
//             <Link
//               href={"/contact-us"}
//               className=" hover:text-blue-500 hover:text-lg font-extralight"
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>

//         {/* <div>
//           <Link href={"/products"} className="hover:text-sky-400">
//             Products
//           </Link>
//         </div> */}

//         {/* <div className="flex flex-col  mt-9"></div> */}
//         <div className="w-screen h-full flex gap-30 ">
//           <div className="text-white">
//             <h3 className="text-start text-2xl font-bold">Contact</h3>
//             <div className="flex flex-col gap-0.5  font-semibold text-center">
//               <p>Kathmandu, Nepal</p>
//               <p>+977 9801282822</p>
//               <p>nepstore@gmail.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=" flex flex-col justify-end ">
//         <h3 className="text-end pr-20 text-xl font-bold text-white">Find Us</h3>
//         <div className=" justify-end border-0 ">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7066.611335314634!2d85.27896704617208!3d27.67694604308605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1786826497725!5m2!1sen!2snp"
//             width="500"
//             height="250"
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             className="w-80 h-full bg-gray-500 rounded-2xl"
//           ></iframe>
//         </div>
//       </div>

//       <p className="flex justify-center mb-4 mt-2  text-white ">
//         &copy; Nepali Store. All rights reserved
//       </p>
//     </footer>
//   );
// };
// export default Footer;

import Logo from "@/components/common/ui/logo";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="min-w-full bg-gray-700 px-6 pt-10 text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* ================= Logo / About ================= */}
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <Logo />

          <p className="max-w-xs text-sm leading-6 text-gray-200 mb-4">
            Modern clothing and accessories designed for your everyday style.
          </p>

          {/* <p className="text-sm text-gray-300">Shop smart. Live better.</p> */}
        </div>

        {/* ================= Quick Links ================= */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="mb-5 text-xl font-bold">Quick Links</h2>

          <div className="flex flex-col gap-3 text-center lg:text-left">
            <Link
              href="/"
              className="text-gray-200 transition hover:text-[#0949DE]"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="text-gray-200 transition hover:text-[#0949DE]"
            >
              Products
            </Link>

            <Link
              href="/about-us"
              className="text-gray-200 transition hover:text-[#0949DE]"
            >
              About Us
            </Link>

            <Link
              href="/contact-us"
              className="text-gray-200 transition hover:text-[#0949DE]"
            >
              Contact Us
            </Link>

            <Link
              href="/cart"
              className="text-gray-200 transition hover:text-[#0949DE]"
            >
              Shopping Cart
            </Link>
          </div>
        </div>

        {/* ================= Contact ================= */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="mb-5 text-xl font-bold">Contact</h2>

          <div className="flex flex-col gap-3 text-center text-sm text-gray-200 lg:text-left">
            <p>📍 Kathmandu, Nepal</p>

            <p>📞 +977 9801282822</p>

            <p>✉️ nepstore@gmail.com</p>
          </div>
        </div>

        {/* ================= Google Map ================= */}
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="mb-5 text-xl font-bold">Find Us</h2>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7066.611335314634!2d85.27896704617208!3d27.67694604308605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1786826497725!5m2!1sen!2snp"
            width="100%"
            height="200"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full max-w-xs rounded-xl border-0"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-3 border-t text-sm text-gray-300 md:flex-row p-3">
        <p>© 2026 Nepali Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
