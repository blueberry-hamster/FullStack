import React, { Component } from 'react';

import CartModalTopBar from './cart_modal_topbar';
import CartModalBody from './cart_modal_body';
import CartModalCheckout from './cart_modal_checkout';

export default class CartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentDidMount() {
    this.props.getcart();
  }
  

  render() {
    const cart = this.props.cart;
    
    return (
      <div id='cart-modal-container'>
        <CartModalTopBar cart={cart}/>
        <CartModalBody 
          cart={cart} 
          removeFromCart={this.props.removeFromCart}
          addToCart={this.props.addToCart}
        />
        <CartModalCheckout 
          cart={cart} 
        /> 
        {/* checkoutCart={this.props.checkoutCart} */}

        <div id='cart-modal-page-overlay'></div>
      </div>
    )
  }
}
