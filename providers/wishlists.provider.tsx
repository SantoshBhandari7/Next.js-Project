import { addToWishLists, clearWishList, getWishList } from "@/api/wishlist.api";
import WishlistContext from "@/context/wishlist.context";
import { IProduct } from "@/types/products.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const WishlistProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
    queryFn: getWishList,
    queryKey: ["wishlists"],
    retry: false,
  });

  const { mutate: addToWishlist, isPending } = useMutation({
    mutationFn: addToWishLists,
    onSuccess: (response) => {
      toast.success(response?.message ?? "product add");
      queryClient.invalidateQueries({
        queryKey: ["wishlists"],
      });
    },
    onError: (error) => {
      toast.error(error?.message ?? "something went to wrong");
    },
  });

  const { mutate: removeFromWishlist } = useMutation({
    mutationFn: (productId: string) => clearWishList(productId),
    onSuccess: (response) => {
      toast.success(response?.message ?? "product removed");
    },
    onError: (error) => {
      toast.error(error?.message ?? "something went wrong");
    },
  });

  const isProductExistsInWishlist = (productId: string) => {
    return !!data?.data?.products.find(
      (product: IProduct) => product._id === productId,
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlists: data?.data,
        isLoading: isLoading,
        addToWishlist,
        isProductExistsInWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
