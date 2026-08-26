import WishlistContext from "@/context/wishlist.context"
import { useContext } from "react";

const useWishlist = () => {
    if (!WishlistContext) {
        console.log("use wishlist context inside wishlist provider");
    }
    return useContext(WishlistContext);
}
export default useWishlist;