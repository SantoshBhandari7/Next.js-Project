import { ICategory } from "./categories.types";
import { Image } from "./gloabl.types";

export type IProduct = {
    name: string;
    price: number;
    _id: string;
    cover_image: Image;
    images: Image[];
    category?: ICategory;
    brand: ICategory;
    description: string;

}