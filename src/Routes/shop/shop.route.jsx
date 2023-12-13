import { IndiCards } from "../../components/cards/individual-cards/indi-cards.component"
import SHOP_DATA from "../../shop-data"

const allData = SHOP_DATA

export const Shop = () => {
    return (
        <div className="shop-container">
            <div className="items-container">
                {
                    allData.map((ele) => {
                        return ele.items.map((item) => <IndiCards element={item} />)
                    })
                }

            </div>
        </div>
    )
}