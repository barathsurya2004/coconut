import logo from '../../assets/logo.svg';
import './navigation-bar.style.scss';
import { Link } from 'react-router-dom';
import cart from '../../assets/shopping-cart.svg'
import { useContext } from 'react';
import { IsCartOnContext } from '../../contexts/cartcontext.context';
import { CartDropDown } from '../cart-dropdown/cart-dropdown.component';
const NavigationBar = () => {
    const { isCartOn, setIsCartOn, noCartItems } = useContext(IsCartOnContext);
    const cartClickHandler = () => {
        setIsCartOn(!isCartOn);
    }
    return (
        <div className="navigation-bar">
            <Link to={'/'}>

                <img src={logo} alt='logo' />
            </Link>

            <div className="links-container">
                <Link to='/shop' className='link'>
                    <span >Shop</span>
                </Link>
                <Link to='/auth' className='link'>

                    <span >Sign In</span>
                </Link>
                <div className="cart" onClick={cartClickHandler}>
                    <img src={cart} alt="carticon" className='carticon' />
                    <span className='cart-item-count'>{noCartItems}</span>
                </div>
            </div>
            {isCartOn && <CartDropDown />}
        </div>
    )
}

export default NavigationBar;