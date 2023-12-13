import shop_data from '../../../shop-data.json';
import { Card } from '../card/card.component';
import './small-card.style.scss';

export const SmallCard = () => {
    return (
        <div className='small-card card'>
            <h2>Hats</h2>
            <div className='items' >
                <Card itemData={shop_data[3]} />
            </div>
            <h3>shop more on Hats</h3>
        </div>
    )
}