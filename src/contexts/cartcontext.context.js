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

export const IsCartOnContext = createContext({
    isCartOn: null,
    setIsCartOn: () => null,
    cartItems: [],
    setCartItems: () => null,
    addToCartItems: () => null,
    noCartItems: 0
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

    return <IsCartOnContext.Provider value={{ isCartOn, setIsCartOn, cartItems, setCartItems, addToCartItems, noCartItems }}>{children}</IsCartOnContext.Provider>

}
