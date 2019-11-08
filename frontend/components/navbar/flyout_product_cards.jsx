import React from 'react';
import { Link } from 'react-router-dom';
import FlyoutProductCard from './flyout_product_card';

export default function FlyoutMenu(props) {
  const linkUrl = props.category === 'All' ? '/products' : `/category/${props.category}`;
  return (
    <div>
      <h5>{ props.category }</h5>

      <ul className='navFlyoutProductCards'>
        {
          props.products.map(product => (
            <FlyoutProductCard product={product} />
          ))
        }
      </ul>
      
      <Link to={linkUrl}>
        { `View All ${props.category}` }
      </Link>
    </div>
  )
}
