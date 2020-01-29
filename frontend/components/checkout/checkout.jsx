import React, { Component } from 'react';
import CheckoutLeft from './checkout_left';
import CheckoutRight from './checkout_right';
import { withRouter } from 'react-router-dom';

class Checkout extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    if (!this.props.cart) this.props.getCart();
    if (!this.props.products) this.props.getProducts();
  }

  componentDidUpdate() {
    if (this.props.cart && this.props.cart.subtotal === 0) {
      this.props.history.push('/');
    }
  }
  

  render() {
    if (!this.props.cart.cartId) return null;
    return (
        <div className='checkout-container'>
          <CheckoutLeft
            currentUser={this.props.currentUser}
            cart={this.props.cart}
            newOrder={this.props.newOrder}
            cleanCart={this.props.cleanCart}
          />
          <CheckoutRight
            cart={this.props.cart}
            products={this.props.products}
          />
        </div>
    )
  }
}

export default withRouter(Checkout);