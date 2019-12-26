import React from 'react';

export default function Delivery() {
  const shippingCost = 5;
  return (
    <div className='delivery-container'>
      <h4>delivery</h4>
      <p>standard - { shippingCost }</p>
    </div>
  )
}