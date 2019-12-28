import React from 'react';

export default function OrderEstimate(props) {
  const subtotal = props.cart.subtotal.toFixed(2),
        tax = (subtotal * props.cart.taxRate).toFixed(2),
        shipping = props.cart.shippingCost.toFixed(2),
        total = props.cart.totalPrice.toFixed(2);
  return (
    <div className='checkout-order-estimate-container'>
      <div className='cost-display'>

        <div className='item subtotal'>
          <p>Subtotal</p>
          <p>{`$${subtotal}`}</p>
        </div>

        <div className='item tax'>
          <p>Tax</p>
          <p>{`$${tax}`}</p>
        </div>

        <div className='item shipping'>
          <p>Shipping</p>
          <p>{`$${shipping}`}</p>
        </div>

      </div>

      <div className='divider'></div>
      <div className='item total'>
        <p>Order Total</p>
        <p>{`$${total}`}</p>
      </div>
      
    </div>
  )
}
