import { useContext } from "react"
import { IsCartOnContext } from "../../contexts/cartcontext.context"
import './cart-dropdown.style.scss';
import { Link } from "react-router-dom";

export const CartDropDown = () => {
    const { cartItems, setIsCartOn } = useContext(IsCartOnContext);
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
                                    <span>Price: {item.price}</span>
                                    <span>Quantity: {item.quantity}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Link to='/checkout' className="checkout-link" onClick={() => {
                setIsCartOn(false);
            }}>

                <button className='checkout' >Proceed to Checkout</button>
            </Link>
        </div>
    )
}