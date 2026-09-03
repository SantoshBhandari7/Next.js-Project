import Logo from "@/components/common/ui/logo";
import { IBrands } from "@/types/brand.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  brand: IBrands;
}

const BrandCard = ({
  brand: { name, description,logo , _id },
}: IProps) => {
  return (
    <Link href={`products/${_id}/category?${name}&${description}`}>
      <div
        className={`border border-sky-300 p-3 flex gap-2 items-center rounded-md cursor-pointer hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 hover:scale:-[1.05] `}
      >
        {/* <Logo /> */}
        <div className="h-16 aspect-square rounded border border-gray-300 overflow-clip">
          <Image
            src={logo?.path}
            alt="brand logo"
            height={1000}
            width={1000}
            className="h-full w-full rounded"
          />
        </div>
        <div>
          <p className="text-md font-bold text-black">{name}</p>
          <p className="line-clamp-2 font-normal text-xs text-black leading-4">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
