import React, { Component } from 'react';
import ProductTitleBar from './product_title_bar';
import ProductCategoryCards from './product_category_cards';

export default class ProductIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortParam: 'Product Type',
    };
    this.updateSortParam = this.updateSortParam.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();
    this.props.getCart();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
    } 
  }

  updateSortParam(param) {
    this.setState({ sortParam: param});
  }

  sortProductsByParam(param = 'Product Type', products) {
    let productsCopy = products.slice();
    
    switch (param) {
      case 'Product Type':
        return productsCopy.sort((a, b) => {
          return (a.category > b.category) ? -1 : 1});

      case 'Lowest Price':
        return productsCopy.sort((a, b) => (a.price > b.price) ? 1 : -1);

      case 'Highest Price':
        return productsCopy.sort((a, b) => (a.price > b.price) ? -1 : 1);

      // case 'best sellers':
      //   return

      default:
        return products;
    }
  }
  
  render() {
    let products = this.sortProductsByParam(this.state.sortParam, this.props.products);
    return (
      <div id='product_index_container'>
        <ProductTitleBar 
          category={this.props.category}
          count={products.length}
          updateSortParam={this.updateSortParam}
        />
        <div>
          <ProductCategoryCards 
            key={this.props.category}
            products={products}
            cart={this.props.cart}
            createCartItem={this.props.createCartItem}
            updateCartItem={this.props.updateCartItem}
          />
        </div>
      </div>
    )
  }
}
