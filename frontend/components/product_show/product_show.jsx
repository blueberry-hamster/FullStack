import React, { Component } from 'react'

import BreadCrumbs from './breadcrumbs';
import ImageCarousel from './image_carousel';
import ProductShowRight from './product_show_right';

export default class ProductShow extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    const name = this.props.match.params.name.replace(/-/g, ' ');
    this.props.getProduct(name);    
  }
  
  render() {
    const product = this.props.product;
    if (product === undefined) return <span></span>;
    return (
      <div id='product-show-container'>
        <BreadCrumbs product={product} />
        <div id='product-show-main'>
          <ImageCarousel product={product} /> {/* FIXME pass img getter */}
          <ProductShowRight product={product} />
        </div>
        {/* FIXME reviews will go here */}
      </div>
    )
  }
}
