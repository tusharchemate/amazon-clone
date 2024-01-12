import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  let totalPrice = basket.reduce((total, item) => total + item.price, 0);
  return (
    <div className="subtotal">
      <p className="subtotal__price">
        Subtotal ( {basket.length} items) : <strong> {totalPrice}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This offer contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
