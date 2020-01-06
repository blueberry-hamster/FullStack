import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class CartModalCheckout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.totalPrice != this.props.totalPrice) {
      const btn = document.querySelector('.checkout-btn');
  
      if (this.props.totalPrice > 0) {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
    }
  }
  
  handleCheckout() {
    if (this.props.totalPrice === 0) return null;

    this.props.closeModal();
    if (this.props.currentUser) {
      this.props.history.push('/checkout');
    } else {
      this.props.history.push('/signin');
    }
  }
  
  render() {
    return (
      <div id='cart-checkout-container'>
        <div className='checkout-label'>
          <p>Estimated Total</p>
          <p>{`$${this.props.totalPrice.toFixed(2)}`}</p>
        </div>
        <button
          className={`checkout-btn`}
          onClick={() => this.handleCheckout()}
        >
          CHECKOUT
      </button>
        <p className='terms-of-service-disclaimer'>
          By checking out, I agree to the Terms of Use and acknowledge that I have read the Privacy Policy. Shipping and promotions calculated in checkout.
      </p>
      </div>
    )
  }
}

export default withRouter(CartModalCheckout);