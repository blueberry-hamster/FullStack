import React from 'react';

export default function Delivery(props) {
  return (
    <div className='delivery-container order-param'>
      <h4>delivery</h4>
      <p>standard - ${ props.cart.shippingCost.toFixed(2) }</p>
      <div className='divider'></div>
    </div>
  )
}