import React from 'react';
import { Link } from 'react-router-dom';

export default function FlyoutProductCard(props) {
  const product = props.product;
  const productUrlName = product.name.split(' ').join('-');
  return (
    <li 
      className='flyout_product_card'
    >
      <Link to={`/product/${productUrlName}`}>
        <div className='flyout_product_card_image'>

        </div>
      </Link>
      <Link to={`/product/${productUrlName}`} className='flyout_product_card_name'>
        { product.name }
      </Link>
      <p className='flyout_product_card_tagline'>{ product.tagline }</p>
    </li>
  )
}
