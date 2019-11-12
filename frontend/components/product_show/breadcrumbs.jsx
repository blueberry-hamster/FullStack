import React from 'react'
import { Link } from 'react-redux-router';

export default function Breadcrumbs(props) {
  const product = props.product.name;
  const category = product.category.name;
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
          <Link to={`/poducts/${category}`}>{ category }</Link>
        </li>
        <li>
          { product.name }
        </li>
      </ul>
    </div>
  )
}
