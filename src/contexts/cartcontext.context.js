import { useState, createContext, useEffect } from "react";
import { Card } from "../components/cards/card/card.component";

import { useLocation } from "react-router";

const addToCart = (cartItems, addingItem) => {
    const existingItem = cartItems.find((item) => item.id === addingItem.id);

    if (existingItem) {
        return (
            cartItems.map((item) => {
                if (item.id === existingItem.id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                else {
                    return item;
                }
            })
        )
    }
    return [...cartItems, { ...addingItem, quantity: 1 }];
}


const removeFromCart = (cartItems, addingItem) => {
    const existingItem = cartItems.find((ele) => ele.id === addingItem.id)

    if (existingItem.quantity === 1) {
        return cartItems.filter((item) => item.id !== existingItem.id);
    }
    else {
        return cartItems.map((item) => {
            if (item.id === existingItem.id) {
                return { ...item, quantity: item.quantity - 1 };
            }
            else {
                return item
            }
        })
    }

}
export const IsCartOnContext = createContext({
    isCartOn: null,
    setIsCartOn: () => null,
    cartItems: [],
    setCartItems: () => null,
    addToCartItems: () => null,
    noCartItems: 0,
    removeFromCartItems: () => null
})

export const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};



export const IsCartonProvider = ({ children }) => {
    const [isCartOn, setIsCartOn] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [noCartItems, SetNoCartItems] = useState(0)
    const addToCartItems = (addingItem) => {
        const temp = addToCart(cartItems, addingItem);
        console.log(temp);
        setCartItems(temp);

    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    useEffect(() => {
        const temp = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        SetNoCartItems(temp);
    }, [cartItems]);

    const removeFromCartItems = (addingItem) => {
        const temp = removeFromCart(cartItems, addingItem);
        setCartItems(temp);
    }

    return <IsCartOnContext.Provider value={{ isCartOn, setIsCartOn, cartItems, setCartItems, addToCartItems, noCartItems, removeFromCartItems }}>{children}</IsCartOnContext.Provider>

}
