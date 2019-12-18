import React from 'react';

export default function CartModalCheckout(props) {
  // calculate total
  let total = 0;
  const numItems = Object.values(props.cart).length - 1;
  const cartItems = Object.values(props.cart).slice(0, numItems);

  for (let i = 0; i < numItems; i++) {
    const item = cartItems[i];
    const itemPrice = props.products[item.id].price;
    total += (item.quantity * itemPrice);
  }

  let taxRate = 0.8; //FIXME you can update taxrate based upon user address info
  let shippingCost = 5; //FIXME can change shipping cost based on total in the future

  total = (total + (total * taxRate) + shippingCost).toFixed(2);

  return (
    <div id='cart-checkout-container'>
      <div className='checkout-label'>
        <p>Estimated Total</p>
        <p>{ `$${ total }` }</p>
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
