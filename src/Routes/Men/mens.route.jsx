import { IndiCards } from '../../components/cards/individual-cards/indi-cards.component';
import { SmallCard } from '../../components/cards/small-cards/small-card.component';
import shop_data from '../../shop-data.json';

export const Mens = () => {
    return <div className='mens'>
        <div className='items-container'>

            {
                shop_data.map((item) => {
                    return (
                        <IndiCards element={item} />
                    )
                })
            }
        </div>

    </div>
}