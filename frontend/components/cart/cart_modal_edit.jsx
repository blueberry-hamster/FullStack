import React, { Component } from 'react';

export default class CartModalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originalQuantity: this.props.quantity,
      quantity: this.props.quantity,
    };
  }

  addItem() {
    if (this.state.quantity <= 50) this.setState({ quantity: this.state.quantity + 1 });
  }

  removeItem() {
    if (this.state.quantity > 0) this.setState({ quantity: this.state.quantity - 1 });
  }

  handleUpdate() {
    const difference = this.state.originalQuantity = this.state.quantity;

    if (difference > 0){
      this.props.addToCart(this.props.product, difference);
    } else {
      this.props.removeFromCart(this.props.product, difference);
    }

    this.props.closeEdit();
  }
  
  render() {
    const product = this.props.product,
      price = product.price,
      name = product.name,
      imgUrl = product.clear_photo,
      quantity = this.props.quantity;
    
    return (
      <div id='cart-modal-edit-container'>
        <div className='edit-header'>
          <div className='left'>
            <p>{name}</p>
            <p>{`$${price}`}</p>
          </div>
          <button onClick={() => props.closeEdit()}>
            <svg id="base-ui-close" viewBox="0 0 16 16"><path clipRule="evenodd" d="M15.78.22a.75.75 0 0 1 0 1.06L9.06 8l6.72 6.72a.75.75 0 1 1-1.06 1.06L8 9.06l-6.72 6.72a.75.75 0 0 1-1.06-1.06L6.94 8 .22 1.28A.75.75 0 1 1 1.28.22L8 6.94 14.72.22a.75.75 0 0 1 1.06 0z" fillRule="evenodd"></path></svg>
          </button>
        </div>

        <div className='product-display'>
          <img src={imgUrl} alt={`photo of ${name}`} />
          <div className='product-display-description'>
            <p>{name}</p>
            <p>{product.tagline}</p>
          </div>
        </div>

        <div className='update-section'>
          <div className='adding-btn'>
            <button 
              className='minus-btn'
              onClick={this.addItem}
            >
              -
            </button>
            <div className='num-display'>{quantity}</div>
            <button 
              className='plus-btn'
              onClick={this.removeItem}
            >
              +
            </button>
          </div>
          <button 
            className='update-btn'
            onClick={handleUpdate}
          >
            {`UPDATE SELECTION - ${price * quantity}`}
          </button>
        </div>
      </div>
    )
  }
}

