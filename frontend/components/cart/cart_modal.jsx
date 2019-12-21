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
    if (this.props.currentUser) this.props.getCart(this.props.currentUser.id);

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
    
    const cartItems = Object.values(this.props.cart.cartItems);
    let totalPrice = 0;
    let totalCount = 0;
    
    const numItems = cartItems.length;

    for (let i = 0; i < numItems; i++) {
      const item = cartItems[i];
      const itemPrice = this.props.products[item.product_id].price;

      totalPrice += (item.quantity * itemPrice);
      totalCount += (cartItems[i].quantity);
    }

    const taxRate = 0.08; //FIXME you can update taxrate based upon user address info
    const shippingCost = totalPrice === 0 || totalPrice > 15 ? 5.00 : 0; //FIXME can change shipping cost based on total in the future
    const subtotal = totalPrice.toFixed(2);
    totalPrice = (totalPrice + (totalPrice * taxRate) + shippingCost).toFixed(2);
    
    return (
      
      <div id='cart-modal-container'>
        <div 
          className='cart-modal-page-overlay'
        >
        </div>

        <div className='cart-body-container slide-in-right'>
          <CartModalTopBar 
            totalCount={totalCount}
            closeModal={this.props.closeModal}
          />
          <CartModalBody 
            subtotal={subtotal}
            taxRate={taxRate}
            shippingCost={shippingCost}
            cartItems={cartItems} 
            cartId={this.props.cart.cartId}
            products={this.props.products}
            updateCartItem={this.props.updateCartItem}
            destroyCartItem={this.props.destroyCartItem}
            updateTempCartItem={this.props.updateTempCartItem}
            removeTempCartItem={this.props.removeTempCartItem}
            currentUser={this.props.currentUser}
          />
          <CartModalCheckout 
            totalPrice={totalPrice} 
            products={this.props.products}
          />  
          {/* checkoutCart={this.props.checkoutCart} */}
        </div>

      </div>
    )
  }
}
