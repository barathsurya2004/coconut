import { BannerCard } from "../../components/cards/banner-cards/banner-card.component"
import { LargeCard } from "../../components/cards/large-cards/large-card.component"
import { SmallCard } from "../../components/cards/small-cards/small-card.component"
import SHOP_DATA from "../../shop-data";


const mens = SHOP_DATA.find((ele) => ele.title === 'Mens')
const womens = SHOP_DATA.find((ele) => ele.title === 'Womens')
const hats = SHOP_DATA.find((ele) => ele.title === 'Hats')
const sneakers = SHOP_DATA.find((ele) => ele.title === 'Sneakers')
const jackets = SHOP_DATA.find((ele) => ele.title === 'Jackets')
export const HomePage = () => {
    return <div className='home'>
        <LargeCard cat={mens} redi='/mens' />
        <SmallCard cat={hats} redi='hats' />
        <BannerCard cat={jackets} redi='jackets' />
        <SmallCard cat={sneakers} redi='sneakers' />
        <LargeCard cat={womens} redi='/womens' />
    </div>
}