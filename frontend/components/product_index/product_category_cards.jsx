import React, { Component } from 'react';
import ProductCard from './product_card';

export default function ProductCategoryCards(props) {
  return (
    <div>
      <ul className='product_card_container'>
        {
          props.products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              cart={props.cart}
              createCartItem={props.createCartItem}
              updateCartItem={props.updateCartItem}
              updateTempCartItem={props.updateTempCartItem}
              openModal={props.openModal}
            />
          ))
        }
      </ul>
    </div>
  )
}

