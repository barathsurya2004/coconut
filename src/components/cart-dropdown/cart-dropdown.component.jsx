import { useContext } from "react"
import { IsCartOnContext } from "../../contexts/cartcontext.context"
import './cart-dropdown.style.scss';

export const CartDropDown = () => {
    const { cartItems } = useContext(IsCartOnContext);
    return (
        <div className='cart-tray'>
            <div className='cart-items'>
                {
                    cartItems.map((item) => {
                        return (
                            <div className="cart-item">
                                <div className="img-cont">
                                    <img src={item.imageUrl} alt={item.name} />
                                </div>
                                <div className="info-cart">
                                    <h3>{item.name}</h3>
                                    <span>{item.quantity} X {item.price}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button className='checkout'>Proceed to Checkout</button>
        </div>
    )
}