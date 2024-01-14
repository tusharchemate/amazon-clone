import React from 'react';
import './CheckoutProduct.css';

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price"> ${price}</p>
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
