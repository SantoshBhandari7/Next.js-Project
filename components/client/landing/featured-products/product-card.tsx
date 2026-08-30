import Image from "next/image";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { IProduct } from "@/types/products.types";
import WishlistContext from "@/context/wishlist.context";
import useWishlist from "@/hook/wishlist.hook";
import { useContext, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "@/components/common/ui/button";
import useCart from "@/hook/cart.hook";
import { title } from "process";

interface IProps {
  product: IProduct;
}

const ProductCard = ({
  product: { cover_image, name, description, category, brand, price, _id },
}: IProps) => {
  const { addToWishlist, isProductExistsInWishlist, removeFromWishlist } =
    useWishlist();
  const isExists = isProductExistsInWishlist(_id);

  const { addToCart, removeCart, isProductExistInCart } = useCart();
  const isExistsCart = isProductExistInCart(_id);
  return (
    <main>
      <section className="flex">
        <article className="min-w-70 max-w-80 border border-gray-300 p-1.5  rounded-lg relative  ">
          {/*add to wishlist */}
          <button
            // disabled={isLoading}
            onClick={(e) => {
              e.stopPropagation();
              console.log("add to wishlist mutation");
              if (isExists) {
                removeFromWishlist(_id);
              } else {
                addToWishlist(_id);
              }
            }}
            title={!isExists ? "add to wishlist" : "remove wishlist"}
            className="cursor-pointer border border-primary w-fit absolute top-1 right-2 z-100 h-10 aspect-square bg-primary/20 rounded-full flex justify-center items-center"
          >
            {isExists ? (
              <IoMdHeart size={24} className="text-red-500" />
            ) : (
              <FaRegHeart size={22} className="text-gray-800" />
            )}
          </button>
          {/* image: cover image*/}
          <div className="w-full h-45 aspect-video  rounded-md">
            <Image
              src={cover_image.path}
              alt={name + "-" + "cover image"}
              height={800}
              width={800}
              className="w-full h-full rounded-t-md"
            />
          </div>

          <div className="px-1">
            {/* name */}
            <p className="text-lg  font-semibold text-primary mt-2 line-clamp-1">
              {name}
            </p>
            <div className="flex gap-2 my-2">
              {category && (
                <p className=" py-1 px-4 w-fit h-fit rounded-md border border-blue-700 text-md font-semibold bg-primary-lighter  text-gray-700 ">
                  {category.name}
                </p>
              )}
              {brand && (
                <p className=" py-1 px-4 w-fit h-fit border border-blue-500 rounded-md text-md font-semibold bg-primary-lighter text-gray-600">
                  {brand.name}
                </p>
              )}
            </div>

            {/* price */}
            <div className="flex gap-1 items-center mb-1">
              <TbCurrencyRupeeNepalese size={16} />
              <p className="text-primary font-semibold ">{price}</p>
            </div>

            {/* desc  */}

            <p className="line-clamp-3 text-sm leading-4.5 mb-4 text-gray-500">
              {description}
            </p>
          </div>

          <Link
            className="w-full"
            href={`/products/${_id}?q=${name}&d=${description}`}
          >
            <button className="py-3 text-center w-full bg-primary rounded text-white font-bold text-lg cursor-pointer">
              View Detail
            </button>
          </Link>

          <div className="flex gap-3 justify-center items-center mt-0.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("add to cart mutation");
                if (isExistsCart) {
                  title: {
                    ("already exists");
                  }
                  removeCart(_id);
                } else {
                  addToCart(_id);
                }
              }}
              title={"add to cart"}
              className="flex-1 rounded-md border border-gray-400 bg-blue-400 py-2 font-semibold cursor-pointer"
              // className="cursor-pointer border border-black  absolute z-100 h-10 aspect-square bg-blue-400 rounded-md font-bold justify-end "
            >
              +addToCart
            </button>
            <div>
              {" "}
              <Link
                href={`/products/${_id}`}
                className=" flex-1 rounded-md border border-gray-400 bg-blue-400 py-2 font-semibold"
                // className=" border w-20 h-10 hover:text-blue-300 rounded-md bg-blue-400 py-2 text-center  font-semibold text-black"
              >
                View Detail
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ProductCard;
