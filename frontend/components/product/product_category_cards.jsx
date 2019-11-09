import React, { Component } from 'react';
import ProductCard from './product_card';

export default function ProductCategoryCards(props) {

  return (
    <ul className='product_card_container'>
      <h5>{ props.category }</h5>
      {
        props.products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      }
    </ul>
  )
}

