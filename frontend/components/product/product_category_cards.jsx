import React, { Component } from 'react';
import ProductCard from './product_card';

export default function ProductCategoryCards(props) {
  const categoryTitle = props.category === 'category' ? '' : props.category;
  return (
    <div>
        <h5>{ categoryTitle }</h5>

      <ul className='product_card_container'>
        {
          props.products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }
      </ul>
    </div>
  )
}

