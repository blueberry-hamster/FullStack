import React, { Component } from 'react';

import CartModalTopBar from './cart_modal_topbar';
// import CartModalBody from './cart_modal_body';
import CartModalCheckout from './cart_modal_checkout';

export default class CartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentDidMount() {
    this.props.getCart();
    this.props.getProducts();
  }
  

  render() {
    const cart = this.props.cart;
    
    return (
      
      <div id='cart-modal-container'>
        <div 
          className='cart-modal-page-overlay'
          onClick={() => this.props.closeModal()}
        >
        </div>

        <div className='cart-body-container'>
          <CartModalTopBar 
            cart={cart}
            closeModal={this.props.closeModal}
          />
          {/* <CartModalBody 
            cart={cart} 
            removeFromCart={this.props.removeFromCart}
            addToCart={this.props.addToCart}
          /> */}
          <CartModalCheckout 
            cart={cart} 
            products={this.props.products}
          />  
          {/* checkoutCart={this.props.checkoutCart} */}
        </div>

      </div>
    )
  }
}
