import { IProduct } from "@/types/products.types";
import { Tuser } from "./auth.context";
import { createContext } from "react";

type TWishList = {
    _id: string;
    user: Tuser;
    products: IProduct[];
}

type TWishListContext = {
    wishlists: TWishList | null;
    isLoading: boolean;
    addToWishlist: (productId: string) => void;
    removeFromWishlist: (productId: string) => void;
    isProductExistsInWishlist: (productId: string) => boolean;
}

const initialValues: TWishListContext = {
    wishlists: null,
    isLoading: false,
    addToWishlist: () => { },
    removeFromWishlist: () => { },
    isProductExistsInWishlist: () => false,
}


const WishlistContext = createContext<TWishListContext>(initialValues);
export default WishlistContext;