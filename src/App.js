import './App.scss';
import { BannerCard } from './components/cards/banner-cards/banner-card.component';
import { LargeCard } from './components/cards/large-cards/large-card.component';
import { SmallCard } from './components/cards/small-cards/small-card.component';
import Footer from './components/footer/footer.component';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import shop_data from './shop-data.json';

function App() {
  return (
    <div>
      <NavigationBar />
      <div className='home'>
        <LargeCard />
        <SmallCard />
        <BannerCard />
        <SmallCard />
        <LargeCard />
      </div>
      <Footer />
    </div>

  );
}

export default App;
