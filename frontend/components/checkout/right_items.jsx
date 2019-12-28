import React from 'react';
import ProductCard from './checkout_product_card';

export default function Items(props) {
  return (
    <div className='checkout-right-items-container'>
      <div className='product-card-container'>
        {
          Object.values(props.cart.cartItems).map((item, i) =>
            <ProductCard
              key={i}
              cartItem={item}
              cartItemId={item.id}
              cartId={props.cart.cartId}
              product={item.product}
              quantity={item.quantity}
            />
          )
        }
      </div>

      <div className='divider'></div>
    </div>
  )
}
