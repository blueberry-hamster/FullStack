import React, { Component } from 'react';
import ProductTitleBar from './product_title_bar';
import ProductCategoryCards from './product_category_cards';

export default class ProductIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortParam: ''
    }
    this.updateSortParam = this.updateSortParam.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  updateSortParam(param) {
    this.setState({ sortParam: param})
    // UNFINISHED need to add categories
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
              let products = 'SORTED PRODUCTS';
              return (
                <ProductCategoryCards 
                  category={category}
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
