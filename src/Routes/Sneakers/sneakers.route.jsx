import { IndiCards } from '../../components/cards/individual-cards/indi-cards.component';
import { SmallCard } from '../../components/cards/small-cards/small-card.component';
import SHOP_DATA from '../../shop-data';

const data = SHOP_DATA.find((ele) => ele.title === 'Sneakers');

export const Sneakers = () => {
    return <div className='mens'>
        <div className='items-container'>

            {
                data.items.map((item) => {
                    return (
                        <IndiCards element={item} />
                    )
                })
            }
        </div>

    </div>
}