
import { IsCartOnContext } from '../../contexts/cartcontext.context';
import './checkout-item.style.scss';
import { useContext } from 'react';
export const CheckOutItem = ({ item }) => {
    const { cartItems, setCartItems, removeFromCartItems, addToCartItems } = useContext(IsCartOnContext);
    const onClickRemove = (item, setCartItems, cartItems) => {
        const temp = cartItems.filter((element) => {
            if (element.id !== item.id) {
                return element;
            }
        })
        console.log(temp)
        setCartItems(temp);
    }
    return (
        <div key={item.id} className='checkout-item-container'>
            <div className='item-image-container'>
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <span className='name'>{item.name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => { removeFromCartItems(item) }}>
                    &#10094;
                </div>
                {item.quantity}
                <div className='arrow' onClick={() => { addToCartItems(item) }}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{item.price}</span>
            <div className='remove-button' onClick={() => onClickRemove(item, setCartItems, cartItems)}>
                &#10005;
            </div>

        </div>
    )

}