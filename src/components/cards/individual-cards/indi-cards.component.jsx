import '../gen-card.style.scss';
// import shop_items from '../../../shop-data.json'
import { Card } from '../card/card.component';
import './indi-cards.style.scss'
import { useContext } from 'react';
import { IsCartOnContext } from '../../../contexts/cartcontext.context';
export const IndiCards = ({ element }) => {
    const { addToCartItems } = useContext(IsCartOnContext);

    return (
        <div className="individual card">
            <div className='img'>
                <img src={element.imageUrl} alt={element.id} />
            </div>
            <span>{element.name}</span>
            <button onClick={() => { addToCartItems(element) }} className='add-to-cart'>Add to Cart</button>
        </div>
    )
}