import React from 'react';
import FlyoutProductCards from './flyout_product_cards';

const NavbarCategoryButton = props => {
  const categoryLinkUrl = props.category === 'Shop All' ? '' : props.category;
  return (
    <li>
      <Link to={`/products/${categoryLinkUrl}`}>{category}</Link>
      <FlyoutProductCards
        category={props.category}
        products={props.products}
      />
    </li>
  );
}

export default NavbarCategoryButton;
