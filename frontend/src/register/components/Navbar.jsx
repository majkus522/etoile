import logo from '../../assets/logo.png'; 
import account from '../../assets/account.png'
import cart from '../../assets/cart.png'
import favourite from '../../assets/ulubione.png'
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="�toile Logo" className="main-logo" />
      </div>

      <div className="nav-icons">
        {<img src={account} alt="account icon" className="icon" />}
        {<img src={cart} alt="cart icon" className="icon" />}
        {<img src={favourite} alt="favourites icon" className="icon" />}
      </div>
    </nav>
  );
}