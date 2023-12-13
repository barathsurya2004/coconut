import { BannerCard } from "../../components/cards/banner-cards/banner-card.component"
import { LargeCard } from "../../components/cards/large-cards/large-card.component"
import { SmallCard } from "../../components/cards/small-cards/small-card.component"


export const HomePage = () => {
    return <div className='home'>
        <LargeCard />
        <SmallCard />
        <BannerCard />
        <SmallCard />
        <LargeCard />
    </div>
}