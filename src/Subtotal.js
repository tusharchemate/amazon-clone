import React from 'react';
import './Subtotal.css';

const Subtotal = () => {
  return (
    <div className="subtotal">
      <p className="subtotal__price">
        Subtotal (0 items) : <strong> 1</strong>
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
