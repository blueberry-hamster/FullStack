import React from 'react';
import Header from './right_header';
import Items from './right_items';
import OrderEstimate from './right_order_estimate';

export default function CheckoutRight(props) {
  return (
    <div className='checkout-right-container'>
      <Header
        cart={props.cart}
      />
      <Items
        cart={props.cart}
      />
      <OrderEstimate
        cart={props.cart}
      />
    </div>
  )
}
