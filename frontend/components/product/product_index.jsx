import React, { Component } from 'react';
import ProductTitleBar from './product_title_bar';
import ProductCard from './product_card';

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
      <div>
        <ProductTitleBar 
          category={this.props.category}
          count={this.props.products.length}
          updateSortParam={this.updateSortParam}
        />
        <ul>
          {
            this.props.products.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}
