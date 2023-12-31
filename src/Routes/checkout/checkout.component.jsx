import './checkout.style.scss';
import { useContext } from 'react';
import { CheckOutItem } from '../../components/checkout-item/checkout-item.component';
import { IsCartOnContext } from '../../contexts/cartcontext.context';
export const CheckOut = () => {
    const { cartItems } = useContext(IsCartOnContext);
    const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);


    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item) => {
                return (


                    <CheckOutItem item={item} />


                )
            })}
            <span className='total'>Total : {total}</span>
        </div>
    )
}