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
            title={`Merrell Men's Moab 3 Hiking Shoe`}
            image={`https://m.media-amazon.com/images/I/81rSi12yULL._AC_SX695_.jpg`}
            price={19.99}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            title={
              'Cute Kanye Plush Bear Toy 10 inch Soft Stuffed Animal Perfect Graduation Gifts for Kids Fans Boys and Girls'
            }
            image={`https://m.media-amazon.com/images/I/61L9BiTpOFL._AC_UL640_FMwebp_QL65_.jpg`}
            price={19.99}
            rating={2}
          />
          <Product
            title={
              'Bluetooth Speaker with HD Sound, Portable Wireless, IPX5 Waterproof, Up to 24H Playtime, TWS Pairing...'
            }
            image={`https://m.media-amazon.com/images/I/81djh1gfUwL._AC_SY879_.jpg`}
            price={19.99}
            rating={4}
          />
          <Product
            title={
              'Leo The Truck 7" Toy, Construction Truck Toys (Non-Transforming Vehicles), Kids for Ages 3 and up, Holiday'
            }
            image={`https://m.media-amazon.com/images/I/71JAWmXpvuL._AC_SX679_.jpg`}
            price={19.99}
            rating={1}
          />
        </div>

        <div className="home__row">
          <Product
            title={'House of Flame and Shadow (Crescent City, 3)'}
            image={`https://m.media-amazon.com/images/I/91jbHTNpy6L._SL1500_.jpg`}
            price={19.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
