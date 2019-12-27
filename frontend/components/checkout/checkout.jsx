import React, { Component } from 'react';
import CheckoutLeft from './checkout_left';
import CheckoutRight from './checkout_right';

export default class Checkout extends Component {

  render() {
    return (
        <div className='checkout-container'>
          <CheckoutLeft
            currentUser={this.props.currentUser}
            cart={this.props.cart}
            orders={this.props.orders}
            newOrder={this.props.newOrder}
          />
          <CheckoutRight
            cart={this.props.cart}
          />
        </div>
    )
  }
}
