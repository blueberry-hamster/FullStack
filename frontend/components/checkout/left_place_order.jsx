import React, { Component } from 'react';

export default class PlaceOrder extends Component {
  constructor(props) {
    super(props);

    this.handleOrder = this.handleOrder.bind(this);
  }
  
  handleOrder(e) {
    this.props.newOrder({
      total: this.props.cart.totalPrice,
      user_id: this.props.currentUser.id
    });
  }
  
  render() {
    return (
      <div className='place-order-container'>
        <h3>Everything look good?</h3>
        <section className='bottom'>
          <p>
            By selecting “Place Order”, I agree to the Terms of Use and acknowledge that I have read the Privacy Policy. Shipping and promotions calculated in checkout.
          </p>
          <button onClick={this.handleOrder}>
            Place Order
          </button>
        </section>
      </div>
    )
  }
}
