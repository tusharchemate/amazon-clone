import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="image"
        />
        <div className="home__row">
          <Product
            title={'The lean startup'}
            image={`https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg`}
            price={19.99}
            rating={5}
          />
          <Product
            title={'The lean startup'}
            image={`https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg`}
            price={19.99}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            title={'The lean startup'}
            image={`https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg`}
            price={19.99}
            rating={2}
          />
          <Product
            title={'The lean startup'}
            image={`https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg`}
            price={19.99}
            rating={4}
          />
          <Product
            title={'The lean startup'}
            image={`https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg`}
            price={19.99}
            rating={1}
          />
        </div>

        <div className="home__row">
          <Product
            title={'The lean startup'}
            image={`https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg`}
            price={19.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
