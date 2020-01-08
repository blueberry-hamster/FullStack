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
    if (this.props.currentUser) this.props.getCart();

    // handle exit animation
    const overlay = document.querySelector('.cart-modal-page-overlay');
    const xBtn = document.querySelector('#base-ui-close');
    const cartBody = document.querySelector('.cart-body-container');

    overlay.addEventListener('click', () => {
      window.setTimeout(() => this.props.closeModal(), 300);
      cartBody.style.transition = "all 0.3s ease-in-out";
      cartBody.style.right = "-1000px";
    });

    xBtn.addEventListener('click', e => {
      e.preventDefault();
      
      window.setTimeout(() => this.props.closeModal(), 300);
      cartBody.style.transition = "all 0.3s ease-in-out";
      cartBody.style.right = "-1000px";
    });
  }
  

  render() {
    if (!this.props.cart) return null;
    
    return (
      
      <div id='cart-modal-container'>
        <div 
          className='cart-modal-page-overlay'
        >
        </div>

        <div className='cart-body-container slide-in-right'>
          <CartModalTopBar 
            totalCount={this.props.cart.totalCount}
            closeModal={this.props.closeModal}
          />
          <CartModalBody 
            cart={this.props.cart}
            cartItems={this.props.cart.cartItems} 
            cartId={this.props.cart.cartId}
            products={this.props.products}
            updateCartItem={this.props.updateCartItem}
            destroyCartItem={this.props.destroyCartItem}
            updateTempCartItem={this.props.updateTempCartItem}
            removeTempCartItem={this.props.removeTempCartItem}
            currentUser={this.props.currentUser}
          />
          <CartModalCheckout 
            totalPrice={this.props.cart.totalPrice} 
            products={this.props.products}
            currentUser={this.props.currentUser}
            closeModal={this.props.closeModal}
          />  
        </div>

      </div>
    )
  }
}
