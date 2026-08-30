import CartContext from "@/context/cart.context"
import { useContext } from "react"

const useCart = () => {
    if (!CartContext) {
        console.log("use cart context inside cart provider")
    }
    return useContext(CartContext);
}
export default useCart;