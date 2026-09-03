import { IBrands } from "./brand.types";
import { ICategory } from "./categories.types";
import { Image } from "./gloabl.types";

export type IProduct = {
    name: string;
    price: number;
    _id: string;
    cover_image: Image;
    stock: number;
    images: Image[];
    category?: ICategory;
    brand: ICategory;
    description: string;
    new_arrival: boolean;

}

export type ProductFormData = {
    name: string;
    price: number;
    stock: number;
    cover_image: FileList;
    description: string;
    new_arrival: boolean;
    brand: string;
    category: string;
};