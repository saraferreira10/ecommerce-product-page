import { AiOutlineShoppingCart } from "react-icons/ai"
import ButtonPrimary from "../ui/ButtonPrimary"
import Counter from "../ui/Counter"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

export default function Card () {
    const [qtCounter, setQtCounter] = useState(0)
    const { addItem } = useContext(CartContext)

    return (
        <div className="px-10 py-20 flex flex-col gap-5 text-dark-blue md:px-30">
            <small className="uppercase text-sm font-extrabold tracking-widest text-orange">Sneaker Company</small>
            <h3 className="text-3xl font-bold">Fall Limited Edition Sneakers</h3>
            <p className="text-md leading-5 text-grayish-blue">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

            <div className="flex justify-between items-center md:flex-col md:items-start">
                <div className="flex items-center gap-4">
                    <strong className="text-2xl">R$ 125,00</strong>
                    <span className="bg-pale-orange text-orange font-bold text-sm px-1 py-1 rounded-md">50%</span>
                </div>
                <small className="text-md font-semibold opacity-80 text-grayish-blue line-through">R$ 250,00</small>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center md:gap-5">
                <Counter counter={qtCounter} setCounter={setQtCounter} className={"md:w-1/2 px-5 rounded-md"} />

                <ButtonPrimary className={"w-full text-base py-7"} onClick={() => {
                    addItem(qtCounter)
                    setQtCounter(0)
                }}>
                    <AiOutlineShoppingCart className="text-xl" />
                    <p className="text-sm">Add to cart</p>
                </ButtonPrimary>
            </div>
        </div>
    )
}
