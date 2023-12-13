import { Card } from '../card/card.component';
import './large-card.style.scss';
import '../gen-card.style.scss';
import { Link } from 'react-router-dom';
export const LargeCard = ({ cat, redi }) => {
    const title = cat.title;
    return (
        <div className='large-card card'>
            <h2>{title}</h2>
            <div className='items'>
                <Card itemData={cat.items[0]} />
                <Card itemData={cat.items[1]} />
            </div>
            <Link to={redi} className='h3'>
                <h3>Shop more on {title}</h3>
            </Link>

        </div>
    )
}