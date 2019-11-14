import React from 'react';
import { Link } from 'react-router-dom';

export default function FlyoutProductCard(props) {
  const product = props.product;
  const productUrlName = product.name.split(' ').join('-');
  
  if (!product.clear_photo) return null;
  const clearPhoto = product.clear_photo;
  return (
    <li 
      className='flyout_product_card'
    >
      <Link to={`/product/${productUrlName}`}>
        <div className='flyout_product_card_image'>
          <img src={clearPhoto} alt="photo" />
        </div>
      </Link>
      <Link to={`/product/${productUrlName}`} className='flyout_product_card_name'>
        { product.name }
      </Link>
      <p className='flyout_product_card_tagline'>{ product.tagline }</p>
    </li>
  )
}
