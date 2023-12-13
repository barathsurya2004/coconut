import './App.scss';
import Footer from './components/footer/footer.component';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import shop_data from './shop-data.json';

function App() {
  return (
    <div>
      <NavigationBar />
      <div className='home'>
        <div className='large-card'>
          <h2>Mens</h2>
          <div className='items'>
            <div className='item' >
              <img src={shop_data[0].imageUrl} />
              <span>{shop_data[0].name}</span>
            </div>
            <div className='item' >
              <img src={shop_data[1].imageUrl} />
              <span>{shop_data[1].name}</span>
            </div>
          </div>
          <h3>shop more on Mens</h3>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default App;
