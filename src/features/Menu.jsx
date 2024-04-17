/* eslint-disable react/prop-types */
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import Avatar from "../ui/Avatar";
import Logo from "../ui/Logo";
import NavList from "../ui/NavList";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Menu({ onClick, toggleLateralMenu }) {
    const { quantity } = useContext(CartContext)

    return (
        <div className="flex bg-white border-b-2 border-b-grayish-light-blue justify-between px-5 py-5 md:px-10 lg:px-32 md:py-0 md:h-20 items-center">
            <div className="flex items-center justify-between gap-10 h-full">
                <div className="flex justify-center items-center gap-2">
                    <AiOutlineMenu className="text-2xl font-extrabold md:hidden cursor-pointer" onClick={toggleLateralMenu} />
                    <Logo />
                </div>

                <div className="hidden md:block h-full"> <NavList /> </div>
            </div>

            <div className="flex justify-center items-center gap-4">
                <div>
                    <AiOutlineShoppingCart className="text-2xl md:text-3xl cursor-pointer hover:text-orange duration-500" onClick={onClick} />
                    {quantity > 0 &&
                        <span className="bg-orange text-white text-center text-[8px] absolute z-0 top-6 px-1.5 right-[68px] rounded-lg md:right-[88px] lg:right-[178px] lg:top-5 lg:text-[10px]">
                            {quantity}
                        </span>
                    }
                </div>
                <Avatar />
            </div>
        </div>
    )
}
