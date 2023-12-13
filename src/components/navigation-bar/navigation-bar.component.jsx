import logo from '../../assets/logo.svg';
import './navigation-bar.style.scss';
import { Link } from 'react-router-dom';
const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <Link to={'/'}>

                <img src={logo} alt='logo' />
            </Link>
            <div className='search-container'>
                <input type="search" className='search-box' />
                <input type='submit' className='submit' />
            </div>
            <div className="links-container">
                <span className='link'>shop</span>
                <span className='link'>sign in</span>
                <span className='link'>Cart</span>
            </div>
        </div>
    )
}

export default NavigationBar;