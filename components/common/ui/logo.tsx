import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="h-full w-full min-h-16 flex min-w-16 gap-3">
      <Image
         src={"/store.png"}
        width={200}
        height={100}
        alt="Nepali store logo"
        className="h-full w-full text-sm "
      />
      <p className="text-2xl font-bold text-sky-700 italic tracking-widest ml-0.5 mt-2.5  ">
        NepaliStore
      </p>
    </div>
  );
};
export default Logo;
