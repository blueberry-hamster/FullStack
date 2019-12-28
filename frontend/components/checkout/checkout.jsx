import React, { Component } from 'react';
import CheckoutLeft from './checkout_left';
import CheckoutRight from './checkout_right';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    this.props.getCart();
  }
  

  render() {
    if (!this.props.cart.cartId) return null;
    return (
        <div className='checkout-container'>
          <CheckoutLeft
            currentUser={this.props.currentUser}
            cart={this.props.cart}
            // orders={this.props.orders}
            newOrder={this.props.newOrder}
          />
          <CheckoutRight
            cart={this.props.cart}
          />
        </div>
    )
  }
}
