
import { Card } from '../card/card.component';
import './small-card.style.scss';
import '../gen-card.style.scss';
import { Link } from 'react-router-dom';
export const SmallCard = ({ cat, redi }) => {
    const title = cat.title;
    return (
        <div className='small-card card'>
            <h2>{title}</h2>
            <div className='items' >
                <Card itemData={cat.items[3]} />
            </div>
            <Link to={redi} className='h3'>
                <h3>Shop more on {title}</h3>
            </Link>
        </div>
    )
}