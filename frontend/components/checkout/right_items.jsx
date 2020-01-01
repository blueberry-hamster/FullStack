import React from 'react';
import ProductCard from './checkout_product_card';

export default function Items(props) {
  // debugger
  return (
    <div className='product-card-container'>
      { 
        Object.values(props.cart.cartItems).map((item, i) =>
          <ProductCard
            key={i}
            cartItem={item}
            cartItemId={item.id}
            cartId={props.cart.cartId}
            product={props.products[item.id]}
            quantity={item.quantity}
          />
        )
      }

      <div className='divider'></div>
    </div>
  );
}
