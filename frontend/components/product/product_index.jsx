import React, { Component } from 'react';
import ProductTitleBar from './product_title_bar';
import ProductCategoryCards from './product_category_cards';

export default class ProductIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortParam: null
    }
    this.updateSortParam = this.updateSortParam.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();
  }

  updateSortParam(param) {
    this.setState({ sortParam: param})
  }
  
  render() {
    return (
      <div id='product_index_container'>
        <ProductTitleBar 
          category={this.props.category}
          count={this.props.products.length}
          updateSortParam={this.updateSortParam}
        />
        <ul>
          {
            this.props.categories.map(category => {
              // let products = 'SORTED PRODUCTS';
              let products = this.props.products;
              return (
                <ProductCategoryCards 
                  key={category.name}
                  category={category.name}
                  products={products}
                />
              )
            })
          }
        </ul>
      </div>
    )
  }
}
