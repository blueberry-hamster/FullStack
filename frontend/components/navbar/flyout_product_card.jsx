import React from 'react';
import { Link } from 'react-router-dom';

export default function FlyoutProductCard(props) {
  const product = props.product;
  const productUrlName = product.name.split(' ').join('-');
  return (
    <li key={props.product.id}>
      <Link to={`/products/${productUrlName}`}>
        {/* IMG GOES HERE */}
        <div></div>
        <Link to={`/products/${productUrlName}`}>
          { product.name }
        </Link>
        <p>{ product.tagline }</p>
      </Link>
    </li>
  )
}
