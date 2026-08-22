import Logo from "@/components/common/ui/logo";
import { ICategory } from "@/types/categories.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  category: ICategory;
}

const CategoryCard = ({
  category: { name, description, image, _id },
}: IProps) => {
  return (
    <Link href={`products/${_id}/category?${name}&${description}`}>
      <div>
        <Logo />
      </div>
      <div>
        <Image
          src={image?.path}
          alt="category logo"
          height={1000}
          width={1000}
          className="h-full w-full rounded"
        />
      </div>
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
