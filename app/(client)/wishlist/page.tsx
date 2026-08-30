"use client";
import Link from "next/link";
import Image from "next/image";
import { IoMdHeart } from "react-icons/io";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";

import useWishlist from "@/hook/wishlist.hook";

const WishlistPage = () => {
  const { wishlists, removeFromWishlist } = useWishlist();

  // No wishlist
  if (!wishlists || wishlists.products.length === 0) {
    return (
      <main className="min-h-screen px-6 py-10 bg-gray-200">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-3xl font-bold">My Wishlist</h1>

          <div className="flex min-h-100 flex-col items-center justify-center rounded-lg border border-gray-600">
            <IoMdHeart
              size={60}
              className="mb-4 text-blue-200 border-blue-400"
            />

            <h2 className="text-2xl  font-semibold">Your wishlist is empty</h2>

            <p className="mt-1  text-gray-500">
              Add products you love to your wishlist.
            </p>
            <Link
              href="/products"
              className="mt-6 rounded-md border  border-green-400 px-6 py-3 text-black font-bold bg-blue-400"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-10 bg-gray-100">
      <div className="mx-auto max-w-6xl  border-gray-700">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">My Wishlist</h1>

            <p className="mt-1 text-gray-500">
              {wishlists.products.length}{" "}
              {wishlists.products.length === 1 ? "product" : "products"} saved
            </p>
          </div>

          <IoMdHeart size={35} className="text-red-500" />
        </div>

        {/* Products */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlists.products.map((product) => (
            <article
              key={product._id}
              className="relative overflow-hidden rounded-lg border border-gray-400 bg-white"
            >
              <button
                type="button"
                onClick={() => removeFromWishlist(product._id)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md"
                title="Remove from wishlist"
              >
                <IoMdHeart size={22} className="text-red-500" />
              </button>

              {/* Image */}
              <Link href={`/products/${product._id}`}>
                <div className="h-60 w-full overflow-hidden">
                  <Image
                    src={product.cover_image.path}
                    alt={`${product.name} cover images`}
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </Link>

              {/* Details */}
              <div className="p-4">
                {/* Name */}
                <h2 className="line-clamp-1 text-lg font-semibold text-primary ">
                  {product.name}
                </h2>

                {/* Category + Brand */}
                <div className="my-3 flex gap-2">
                  {product.category && (
                    <span className="rounded-md bg-blue-400 px-3 py-1 text-xs font-semibold">
                      {product.category.name}
                    </span>
                  )}

                  {product.brand && (
                    <span className="rounded-md bg-blue-400 px-3 py-1 text-xs font-semibold">
                      {product.brand.name}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-3 flex items-center gap-1">
                  <TbCurrencyRupeeNepalese size={18} />

                  <span className="font-bold text-primary">
                    {product.price}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-4 line-clamp-2 text-sm text-gray-500">
                  {product.description}
                </p>

                {/* View Detail */}
                <Link
                  href={`/products/${product._id}`}
                  className="block w-full rounded-md bg-primary py-2 text-center font-semibold text-black"
                >
                  View Detail
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default WishlistPage;
