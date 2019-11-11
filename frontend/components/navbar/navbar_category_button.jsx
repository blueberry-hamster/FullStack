import React from 'react';
import { Link } from 'react-router-dom';
import FlyoutProductCards from './flyout_product_cards';

const NavbarCategoryButton = props => {
  const categoryLinkUrl = props.category === 'Shop All' ? '' : props.category;
  return (
    <li className='navbar_button'>
      <Link to={`/products/${categoryLinkUrl}`}>{props.category}</Link>
      <FlyoutProductCards
        category={props.category}
        products={props.products}
      />
    </li>
  );
}

export default NavbarCategoryButton;
