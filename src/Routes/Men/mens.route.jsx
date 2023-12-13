import { IndiCards } from '../../components/cards/individual-cards/indi-cards.component';
import { SmallCard } from '../../components/cards/small-cards/small-card.component';
import SHOP_DATA from '../../shop-data';
// import shop_data from '../../shop-data.json';
const catMen = SHOP_DATA[0]

export const Mens = () => {
    return <div className='mens'>
        <div className='items-container'>

            {
                catMen.items.map((item) => {
                    return (
                        <IndiCards element={item} />
                    )
                })
            }
        </div>

    </div>
}