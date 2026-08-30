"use client"
import { Image } from "@/types/gloabl.types";
import { IProduct } from "@/types/products.types";
import { createContext } from "react";

type TCartItems = {
    product: IProduct;
    _id: string;
    qunatity: number;

}

type TCart = {
    _id: string;
    userId: string;
    items: TCartItems[]


}

type TCartContext = {
    cart: TCart | null;
    isLoading: boolean;
    addToCart: (productId: string) => void;
    removeCart: (productId: string) => void;
    isProductExistInCart: (productId: string) => boolean;

}

const initialValues: TCartContext = {
    cart: null,
    isLoading: false,
    addToCart: () => { },
    removeCart: () => { },
    isProductExistInCart: () => false

}

const CartContext = createContext(initialValues);
export default CartContext;



