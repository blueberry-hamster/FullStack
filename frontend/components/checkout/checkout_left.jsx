import React, { Component } from 'react';
import Header from './left_header';
import Email from './left_email';
import Shipping from './left_shipping';
import Delivery from './left_delivery';
import Payment from './left_payment';
import PlaceOrder from './left_place_order';

export default class CheckoutLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: null,
    };
  }
  
  render() {
    if (!this.props.cart) return null;
    return (
      <div className='checkout-left-container'>
        <Header/>
        <Email
          currentUser={this.props.currentUser}
        />
        <Shipping
          currentUser={this.props.currentUser}
        />
        <Delivery
          cart={this.props.cart}
        />
        <Payment
          currentUser={this.props.currentUser}
        />
        <PlaceOrder
          currentUser={this.props.currentUser}
          cart={this.props.cart}
          newOrder={this.props.newOrder}
        />
      </div>
    )
  }
}
