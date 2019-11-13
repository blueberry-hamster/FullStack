import React, { Component } from 'react'

import BreadCrumbs from './breadcrumbs';
import ImageCarousel from './image_carousel';
import ProductShowRight from './product_show_right';

export default class ProductShow extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);    
  }
  
  render() {
    const product = this.props.product;
    return (
      <div id='product-show-container'>
        <BreadCrumbs product={product} />
        <ImageCarousel product={product} /> 
        <ProductShowRight product={product} />
        {/* FIXME reviews will go here */}
      </div>
    )
  }
}
