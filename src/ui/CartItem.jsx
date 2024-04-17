import { AiFillDelete } from "react-icons/ai"
import CardImg from "./CardImg"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function CartItem() {
    const { quantity, clearCart } = useContext(CartContext)

    return (
        <div className="flex justify-between items-center text-grayish-blue">
            <CardImg className={"w-20 md:w-10 rounded"} />
            <div>
                <div>Fall Limited Edition Sneakers</div>
                <div>R$ 125.00 x {quantity} <span className="font-bold text-dark-blue">R$ {quantity * 125}</span></div>
            </div>
            <div className="text-grayish-blue text-xl">
                <AiFillDelete onClick={clearCart} className="cursor-pointer"/>
            </div>

        </div>
    )
}
