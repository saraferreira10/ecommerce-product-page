/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [quantity, setQuantity] = useState(0)

    function clearCart() {
        setQuantity(0)
    }

    function addItem(amount){
        setQuantity(quantity => quantity + amount)
    }

    return (
        <CartContext.Provider value={{quantity, addItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}