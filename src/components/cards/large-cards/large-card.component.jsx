import shop_data from '../../../shop-data.json';
import { Card } from '../card/card.component';
import './large-card.style.scss';

export const LargeCard = () => {
    return (
        <div className='large-card card'>
            <h2>Mens</h2>
            <div className='items'>
                <Card itemData={shop_data[0]} />
                <Card itemData={shop_data[1]} />
            </div>
            <h3>shop more on Mens</h3>
        </div>
    )
}