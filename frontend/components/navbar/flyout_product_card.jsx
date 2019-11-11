import React from 'react';
import { Link } from 'react-router-dom';

export default function FlyoutProductCard(props) {
  const product = props.product;
  const productUrlName = product.name.split(' ').join('-');
  return (
    <li 
      key={product.id} 
      className='flyout_product_card'
    >
      <Link to={`/products/${productUrlName}`}>
        <div className='flyout_product_card_image'>

        </div>
      </Link>
      <Link to={`/products/${productUrlName}`} className='flyout_product_card_name'>
        { product.name }
      </Link>
      <p className='flyout_product_card_tagline'>{ product.tagline }</p>
    </li>
  )
}
