import { useContext } from "react"
import ButtonPrimary from "../ui/ButtonPrimary"
import CartItem from "../ui/CartItem"
import { CartContext } from "../context/CartContext"

export default function ShoppingCart() {
    const { quantity } = useContext(CartContext)

    return (
        <div className="flex flex-col gap-5 bg-white rounded-lg absolute top-24 right-1 left-1 py-5 md:right-10 md:left-auto md:px-0 md:w-80 md:gap-2 shadow-2xl">
            <div className="font-bold px-5">Cart</div>
            <hr className="text-grayish-blue opacity-15" />

            {quantity > 0 &&
                <>
                    <div className="px-5">
                        <CartItem />
                    </div>
                    <div className="px-5">
                        <ButtonPrimary className={"w-full text-base py-7"}>
                            Checkout
                        </ButtonPrimary>
                    </div>
                </>
            }

            {quantity == 0 &&
                <div className="flex justify-center items-center font-bold text-grayish-blue h-32 md:h-20">
                    Your cart is empty.
                </div>
            }
        </div>
    )
}
