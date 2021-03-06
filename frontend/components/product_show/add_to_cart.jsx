import React, { Component } from 'react';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCount: 1,
    };
    this.changeProductCount = this.changeProductCount.bind(this);
    this.addToDatabase = this.addToDatabase.bind(this);
    this.addToTemp = this.addToTemp.bind(this);
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

  addToDatabase(cartItems, product) {
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
  }

  addToTemp(cartItems, product) {
    const currentItem = cartItems[product.id];
    const currentQuantity = currentItem ?  currentItem.quantity : 0;
    const newCount = this.state.productCount + currentQuantity;

    this.props.updateTempCartItem({
      [product.id] : {
        product: this.props.product,
        quantity: newCount,
        product_id: product.id,
        cart_id: this.props.cart.cartId
      }
    });
    
  }

  addItemsToCart() {
    const cartItems = this.props.cart.cartItems;
    const product = this.props.product;
    
    if (this.props.currentUser) {
      this.addToDatabase(cartItems, product);
    } else {
      this.addToTemp(cartItems, product);
    }
    //reset number to 1
    this.setState({ productCount: 1 });
    this.props.openModal('cart');
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