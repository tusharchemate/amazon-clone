import React from 'react';
import './Header.css';
import { Search, ShoppingBasket } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
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
        <div className="header__option">
          <span className="header__optionOne">Hello Tushar</span>
          <span className="header__optionTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">Resturns</span>
          <span className="header__optionTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionOne">Your </span>
          <span className="header__optionTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasket />
          <span className="header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
