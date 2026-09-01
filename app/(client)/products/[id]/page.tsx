"use client";

import { getById } from "@/api/product.api";
import Button from "@/components/common/ui/button";
import DataNotFound from "@/components/common/ui/data-not-found";
import Loading from "@/components/common/ui/loading";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetailsPage = () => {
  const params = useParams();

  const id = params.id as string;

  const [selectedImage, setSelectedImage] = useState("");

  //   const { mutate, data, isPending, isError } = useMutation({
  //     mutationFn: getById,
  //   });
  const { isLoading, data, isError, error } = useQuery({
    queryFn: () => getById(id),
    queryKey: ["product", id],
    enabled: !!id,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data?.data) {
    return <DataNotFound message="Product Not Found" />;
  }

  const product = data.data;

  // Cover image + multiple images
  const allImages = [product.cover_image, ...(product.images || [])];

  const mainImage = selectedImage || allImages[0]?.path;

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex gap-4">
          {/* Small Images */}

          <div className="flex w-20 flex-col gap-3">
            {allImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(image.path)}
                className={`relative h-20 w-20 overflow-hidden rounded-md border-2 ${
                  mainImage === image.path
                    ? "border-[#0949DE]"
                    : "border-gray-200"
                }`}
              >
                <Image
                  src={image.path}
                  alt={`${product.name}-${index}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}

          <div className="relative h-125 flex-1 overflow-hidden rounded-xl bg-gray-100">
            <Image
              src={mainImage}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* ================= PRODUCT DETAILS ================= */}

        <div className="flex flex-col justify-center">
          {/* Name */}
          <h1 className="mt-2 text-4xl font-bold">{product.name}</h1>
          {/* Brand */}

          <p className="mt-3 text-gray-500">
            Brand:{" "}
            <span className="text-sm font-semibold text-gray-700">
              {product?.brand?.name}
            </span>
          </p>

          {/* Category */}

          <p className="mt-3 text-gray-500">
            Category:{" "}
            <span className="font-semibold text-gray-700">
              {product.category?.name}
            </span>
          </p>

          {/* Price */}

          <div className="mt-5 flex items-center gap-1">
            <p className="text-3xl font-bold text-[#0949DE]">
              Rs. {product.price}
            </p>
          </div>

          {/* Description */}

          <div className="mt-6">
            <h2 className="mb-2 text-xl font-bold">Description</h2>

            <p className="leading-7 text-gray-600">{product.description}</p>
          </div>

          {/* Add Cart */}

          <button
            type="button"
            className="mt-8 w-full rounded-md bg-[#0949DE] px-6 py-3 font-semibold text-white hover:bg-blue-700 md:w-72"
          >
            + Add to Cart
          </button>
        </div>
        <div className="relative justify-end items-center ">
          <Link href={"/products"} className="min-w-20 h-full ">
            <Button type="submit" label="Continue Shopping" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
