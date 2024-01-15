import React from 'react';
import './Header.css';
import { Search, ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const extractName = (email) => {
    const name = email.split('@');
    return name[0];
  };

  const [{ basket }, dispatch] = useStateValue();
  const location = useLocation();
  const signedInUserEmail = location.state?.email;

  return (
    <div className="header">
      <Link to={'/'}>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={'/login'}>
          <div className="header__option">
            <span className="header__optionOne">
              Hello {signedInUserEmail && extractName(signedInUserEmail)}
            </span>
            <span className="header__optionTwo">
              {signedInUserEmail ? 'Logout' : 'Sign In'}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionOne">Resturns</span>
          <span className="header__optionTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">Your </span>
          <span className="header__optionTwo">Prime</span>
        </div>
        <Link to={'/checkout'}>
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
