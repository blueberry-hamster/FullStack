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
    return (
      <div className='checkout-left-container'>
        <Header/>
        <Email/>
        <Shipping/>
        <Delivery/>
        <Payment/>
        <PlaceOrder/>
      </div>
    )
  }
}
