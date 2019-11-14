import React from 'react'
import { Link } from 'react-router-dom';

export default function Breadcrumbs(props) {
  const product = props.product;
  const category = product.category.name.toLowerCase();
  return (
    <div id='breadcrumbs-container'>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/products'}>Products</Link>
        </li>
        <li>
          <Link to={`/products/${category}`}>{ category }</Link>
        </li>
        <li>
          { product.name }
        </li>
      </ul>
    </div>
  )
}
