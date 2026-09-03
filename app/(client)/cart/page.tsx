"use client";

import Loading from "@/components/common/ui/loading";
import useCart from "@/hook/cart.hook";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const { cart, isLoading, removeCart } = useCart();

  // Loading
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loading />
      </div>
    );
  }

  // Empty cart
  if (!cart || cart.items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col  items-center justify-center">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>

        <p className="mt-2 text-gray-500">
          You haven't added any products yet.
        </p>

        <Link
          href="/products"
          className="mt-6 rounded-full bg-[#0949DE] px-6 py-3 text-white"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // Calculate subtotal
  const subtotal = cart.items.reduce(
    (total, item) => total + item.product.price * item.qunatity,
    0,
  );

  const deliveryCharge = 100;

  const total = subtotal + deliveryCharge;

  return (
    <div className="min-h-screen bg-gray-200 px-4 py-10">
      <div className="mx-auto  max-w-6xl">
        {/* Page Heading */}
        <div className=" flex justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>

            <p className="mt-2 text-gray-500">
              {cart.items.length} product
              {cart.items.length > 1 ? "s" : ""} in your cart
            </p>
          </div>

          <Link
            href="/products"
            className="mt-6 rounded-full bg-[#0949DE] px-6 py-3 text-white"
          >
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-rows-2 gap-8">
          {/* Products */}
          <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cart.items.map((item) => (
              <div
                key={item._id}
                className="rounded-xl border border-gray-200 bg-white p-5 "
              >
                <div className="flex gap-5">
                  {/* Product Image */}
                  <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-lg bg-gray-100 ">
                    <Image
                      src={item.product.cover_image?.path ?? "/herpagebg.png"}
                      alt={item?.product?.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {item.product.name}
                      </h2>

                      {item.product.brand && (
                        <p className="mt-2 text-md text-gray-900">
                          {item.product.brand.name}
                        </p>
                      )}

                      {item.product.category && (
                        <p className="text-md text-gray-900">
                          {item.product.category.name}
                        </p>
                      )}

                      <p className="mt-3 text-lg font-semibold text-blue-600">
                        Rs.{item.product.price}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        if (item) {
                          removeCart(item?.product?._id);
                        }
                      }}
                      className="text-sm  text-red-700 font-extralight border h-fit w-fit  rounded-lg px-2  hover:text-red-700 cursor-pointer "
                    >
                      Remove
                    </button>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
