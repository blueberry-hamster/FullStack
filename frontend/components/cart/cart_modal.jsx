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
    this.props.getCart();
    this.props.getProducts();
  }
  

  render() {
    const cartItems = Object.values(this.props.cart.cartItems);
    let totalPrice = 0;
    let totalCount = 0;
    
    const numItems = cartItems.length;

    for (let i = 0; i < numItems; i++) {
      const item = cartItems[i];
      const itemPrice = this.props.products[item.id].price;

      totalPrice += (item.quantity * itemPrice);
      totalCount += (cartItems[i].quantity);
    }

    const taxRate = 0.08; //FIXME you can update taxrate based upon user address info
    const shippingCost = 5.00; //FIXME can change shipping cost based on total in the future
    const subtotal = totalPrice.toFixed(2);
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
          <CartModalBody 
            subtotal={subtotal}
            taxRate={taxRate}
            shippingCost={shippingCost}
            cartItems={cartItems} 
            products={this.props.products}
            updateCartItem={this.props.updateCartItem}
            destroyCartItem={this.props.destroyCartItem}
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
