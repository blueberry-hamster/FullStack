import React from 'react'
import { Link } from 'react-router-dom';

export default function Breadcrumbs(props) {
  const product = props.product;
  const category = product.category.name.toLowerCase();
  return (
    <div id='breadcrumbs-container'>
      <ul>
        <li>
          <span onClick={() => props.history.push('/')}>Home</span>
        </li>
        <li>
          <span onClick={() => props.history.push('/products')}>Products</span>
        </li>
        <li>
          <span onClick={() => props.history.push(`/poducts/${category}`)}>{ category }</span>
        </li>
        <li>
          { product.name }
        </li>
      </ul>
    </div>
  )
}
