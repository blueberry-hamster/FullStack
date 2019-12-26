import React, { Component } from 'react';
import CheckoutLeft from './checkout_left';
import CheckoutRight from './checkout_right';

export default class Checkout extends Component {

  render() {
    const CheckoutContext = React.createContext({});

    return (
      <CheckoutContext.Provider 
        currentUser={this.props.currentUser}
        cart={this.props.cart}
        orders={this.props.orders}
      >
        <div className='checkout-container'>
          <CheckoutLeft/>
          <CheckoutRight/>
        </div>
      </CheckoutContext.Provider>
    )
  }
}
