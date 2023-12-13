import './banner-card.style.scss';
import shop_data from '../../../shop-data.json';
import { Card } from '../card/card.component';
import '../gen-card.style.scss';
export const BannerCard = () => {
    return (
        <div className='banner-card card' >
            <h2>Jackets</h2>
            <div className='items'>
                <Card itemData={shop_data[5]} />
                <Card itemData={shop_data[6]} />
                <Card itemData={shop_data[8]} />
                <Card itemData={shop_data[1]} />
            </div>
            <h3>shop more on Jackets</h3>
        </div>
    )
}