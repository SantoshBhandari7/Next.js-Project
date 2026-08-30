"use client";
import { clearCart, createCart, getCart } from "@/api/cart.api";
import CartContext from "@/context/cart.context";
import { IProduct } from "@/types/products.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const CartProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { isLoading, data } = useQuery({
    queryFn: getCart,
    queryKey: ["cart"],
    retry: false,
  });

  const { mutate: addToCart, isPending } = useMutation({
    mutationFn: createCart,
    onSuccess: (response) => {
      toast.success(response?.message ?? "product add to cart");
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: (error) => {
      toast.error(error?.message ?? "something went wrong");
    },
  });

  const { mutate: removeCart } = useMutation({
    mutationFn: clearCart,
    onSuccess: (response) => {
      toast.success(response?.message ?? "product remove from cart");
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
    onError: (error) => {
      toast.error(error?.message ?? "something went wrong");
    },
  });

  const isProductExistInCart = (productId: string) => {
    return !!data?.items?.products.find(
      (product: IProduct) => product._id === productId,
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart: data?.data,
        isLoading: isLoading,
        addToCart: addToCart,
        isProductExistInCart,
        removeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
