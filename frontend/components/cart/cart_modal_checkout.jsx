import React from 'react';

export default function CartModalCheckout(props) {

  return (
    <div id='cart-checkout-container'>
      <div className='checkout-label'>
        <p>Estimated Total</p>
        <p>{ `$${ props.totalPrice }` }</p>
      </div>
      <button 
        className='checkout-btn'
        // onClick={props.checkout(props.cart)}
      >
        CHECKOUT
      </button>
      <p className='terms-of-service-disclaimer'>
        By checking out, I agree to the Terms of Use and acknowledge that I have read the Privacy Policy. Shipping and promotions calculated in checkout.
      </p>
    </div>
  )
}
