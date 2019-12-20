import React, { Component } from 'react';

import BreadCrumbs from './breadcrumbs';
import ImageCarousel from './image_carousel';
import ProductShowRight from './product_show_right';
import { defaultCart } from "../../util/default_cart_util";

export default class ProductShow extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    const name = this.props.match.params.name.replace(/-/g, ' ');
    this.props.getProduct(name);    
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.props.getProduct(this.props.match.params.name.replace(/-/g, ' '));
    }
  }
  
  render() {
    const product = this.props.product;
    if (product === undefined) return <span></span>;
    return (
      <div id='product-show-container'>
        <div id='product-show-main'>
          <div id='product-show-left-container'>
            <BreadCrumbs product={product} history={this.props.history} />
            <ImageCarousel product={product} />
          </div>
          <ProductShowRight 
            product={product}
            cart={this.props.cart}
            createCartItem={this.props.createCartItem}
            updateCartItem={this.props.updateCartItem}
            openModal={this.props.openModal}
          />
        </div>
        {/* FIXME reviews will go here */}
      </div>
    )
  }
}
