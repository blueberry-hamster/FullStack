import React, { Component } from 'react';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCount: 1,
    };
    this.changeProductCount = this.changeProductCount.bind(this);
  }

  componentDidMount() {
  }
  
  changeProductCount(change) {
    let oldCount = this.state.productCount;
    switch (change) {
      case 'add':
        let newCount = oldCount === 10 ? 10 : (oldCount + 1);
        this.setState({ productCount: newCount });
        break;

      case 'subtract':
        newCount = (oldCount - 1) < 1 ? 1 : (oldCount - 1);
        this.setState({ productCount: newCount });
        break;
    
      default:
        break;
    }
  }

  addItemsToCart() {
    const cartItems = this.props.cart.cartItems;
    const product = this.props.product;

    if (cartItems[product.id]) {
      let currentItem = cartItems[product.id];
      let newCount = this.state.productCount + currentItem.quantity;
      this.props.updateCartItem({ 
        quantity: newCount,
        product_id: product.id,
        cart_id: this.props.cart.cartId
      });
    } else {
        this.props.createCartItem({ 
          product_id: product.id, 
          cart_id: this.props.cart.cartId,
          quantity: this.state.productCount
        });
    }

    //reset number to 1
    this.setState({ productCount: 1 });
    this.props.openModal('cart')
  }
  
  render() {
    return (
      <div className='add-to-cart-container'>
        <div className='change-btn'>
          <button className='minus-btn' onClick={() => this.changeProductCount('subtract')}>
            -
          </button>

          <div className='num-display'>{ this.state.productCount }</div>

          <button className='plus-btn' onClick={() => this.changeProductCount('add')}>
            +
          </button>
        </div>
        <button 
          className='add-to-bag-btn'
          onClick={() => this.addItemsToCart()}
        >
          {`ADD TO BAG - $${ this.props.product.price * this.state.productCount }`}
        </button>
      </div>
    )
  }
}