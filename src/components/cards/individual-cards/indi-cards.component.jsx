import '../gen-card.style.scss';
import shop_items from '../../../shop-data.json'
import { Card } from '../card/card.component';
import './indi-cards.style.scss'
export const IndiCards = ({ element }) => {
    return (
        <div className="individual card">
            <div className='img'>
                <img src={element.imageUrl} alt={element.id} />
            </div>
            <span>{element.name}</span>
            <button>Add to Cart</button>
        </div>
    )
}