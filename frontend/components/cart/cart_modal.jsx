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
    let totalPrice = 0;
    let totalCount = 0;
    
    const numItems = Object.values(this.props.cart).length - 1;
    const cartItems = Object.values(this.props.cart).slice(0, numItems);

    for (let i = 0; i < numItems; i++) {
      const item = cartItems[i];
      const itemPrice = this.props.products[item.id].price;

      totalPrice += (item.quantity * itemPrice);
      totalCount += (cartItems[i].quantity);
    }

    let taxRate = 0.08; //FIXME you can update taxrate based upon user address info
    let shippingCost = 5; //FIXME can change shipping cost based on total in the future

    totalPrice = (totalPrice + (totalPrice * taxRate) + shippingCost).toFixed(2);
    
    return (
      
      <div id='cart-modal-container'>
        <div 
          className='cart-modal-page-overlay'
          onClick={() => this.props.closeModal()}
        >
        </div>

        <div className='cart-body-container'>
          <CartModalTopBar 
            totalCount={totalCount}
            closeModal={this.props.closeModal}
          />
          {/* <CartModalBody 
            cart={cart} 
            removeFromCart={this.props.removeFromCart}
            addToCart={this.props.addToCart}
          /> */}
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
