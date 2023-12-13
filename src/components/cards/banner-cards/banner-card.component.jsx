import './banner-card.style.scss';
import { Card } from '../card/card.component';
import '../gen-card.style.scss';
import { Link } from 'react-router-dom';
export const BannerCard = ({ cat, redi }) => {
    const title = cat.title;
    return (
        <div className='banner-card card' >
            <h2>{title}</h2>
            <div className='items'>
                <Card itemData={cat.items[1]} />
                <Card itemData={cat.items[2]} />
                <Card itemData={cat.items[3]} />
                <Card itemData={cat.items[4]} />
            </div>
            <Link to={redi} className='h3'>
                <h3>Shop more on {title}</h3>
            </Link>
        </div>
    )
}