import React from 'react';

const ProductTitleBar = props => {
  const title = props.category === 'All' ? 'Shop All Products' : `Shop All ${props.category}`;
  return (
    <div>
      <h2>{ title }</h2>
      <div>{ `${props.count} Items` }</div>
      <div>
        <select name="productListDropdown" id="productListSort">
          <option value="Product Type">Product Type</option>
          <option value="Lowest Price">Lowest Price</option>
          <option value="Highest Price">Highest Price</option>
          <option value="Top Rated">Top Rated</option>
          <option value="Best Sellers">Best Sellers</option>
        </select>
        <label htmlFor='productListSort'>
          <span>Sort by:</span>
          <i className="fal fa-angle-down"></i>
        </label>
      </div>
    </div>
  );
};

export default ProductTitleBar;
