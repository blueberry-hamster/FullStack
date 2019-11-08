import React from 'react';

const ProductTitleBar = props => {
  const title = props.category === 'All' ? 'Shop All Products' : `Shop All ${props.category}`;
  return (
    <div id='product_title_bar'>
      <h2>{ title }</h2>
      <div id='title_bar_left'>
        <p>{ `${props.count} Items` }</p>
        <div id='product_list_dropdown_container'>
          <select name="productListDropdown" id="productListSort">
            <option value="Product Type">Product Type</option>
            <option value="Lowest Price">Lowest Price</option>
            <option value="Highest Price">Highest Price</option>
            <option value="Top Rated">Top Rated</option>
            <option value="Best Sellers">Best Sellers</option>
          </select>
          <label htmlFor='productListSort'>
            <span>Sort by:</span>
            <i className="fas fa-chevron-down"></i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductTitleBar;
