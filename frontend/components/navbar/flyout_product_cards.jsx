import React from 'react';
import { Link } from 'react-router-dom';
import FlyoutProductCard from './flyout_product_card';

export default function FlyoutMenu(props) {
  const linkUrl = props.category === 'Shop All' ? '/products' : `/products/${props.category}`;
  return (
    <div className='flyout_product_container'>
      <h5>Bestsellers</h5>

      <ul className='flyout_product_cards'>
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
