import React, { Component } from 'react';
import { selectProducts } from '../../reducers/selectors/product_selector';
import ProductTitleBar from './product_title_bar';
import ProductCategoryCards from './product_category_cards';

export default class ProductIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortParam: null,
    }
    this.updateSortParam = this.updateSortParam.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      console.log('new category', this.props.match.params.category);
    } 
  }

  updateSortParam(param) {
    this.setState({ sortParam: param})
  }

  // sortProductsByParam(param = 'category', products) {
  //   let extractedProducts = [];
  //   Object.values(products).forEach(productList => extractedProducts = extractedProducts.concat(productList));
  //   // debugger
  //   switch (param) {

  //     case 'Category':
  //       return products;

  //     case 'Lowest Price':
  //       return extractedProducts.slice().sort((a, b) => (a.price > b.price) ? 1 : -1);

  //     case 'Highest Price':
  //       return extractedProducts.slice().sort((a, b) => (a.price > b.price) ? -1 : 1);

  //     // case 'best sellers':
  //     //   return

  //     default:
  //       return products;
  //   }
  // }
  
  render() {
    let productCount = 0;
    Object.values(this.props.products).forEach(arr => productCount += arr.length);
    
    return (
      <div id='product_index_container'>
        <ProductTitleBar 
          category={this.props.category}
          count={productCount}
          updateSortParam={this.updateSortParam}
        />
        <div>
          {
            Object.keys(this.props.products).map(category => {
              // let products = 'SORTED PRODUCTS';
              let products = this.props.products;
              return (
                <ProductCategoryCards 
                  key={category}
                  category={category}
                  products={products[category]}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}
