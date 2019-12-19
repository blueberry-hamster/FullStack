import React, { Component } from 'react';

export default class CartModalEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.setState({ quantity: this.props.quantity });
  }

  changeProductCount(change) {
    let oldCount = this.state.quantity;
    switch (change) {
      case 'add':
        let newCount = oldCount === 100 ? 100 : (oldCount + 1);
        this.setState({ quantity: newCount });
        break;

      case 'subtract':
        newCount = (oldCount - 1) < 0 ? 0 : (oldCount - 1);
        this.setState({ quantity: newCount });
        break;

      default:
        break;
    }
  }

  handleUpdate() {
    if (this.state.quantity > 0){
      this.props.updateCartItem({
        quantity: this.state.quantity,
        product_id: this.props.product.id,
        cart_id: this.props.cartId
      });
    } else {
      this.props.destroyCartItem(this.props.cartItemId);
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
      <div className='cart-modal-edit-container .slide-in-bottom'>
        <div className='edit-header'>
          <div className='left'>
            <p className='product-name'>{name}</p>
            <p>{`$${price}`}</p>
          </div>
          <button onClick={() => this.props.closeEdit()}>
            <svg id="base-ui-close" viewBox="0 0 16 16"><path clipRule="evenodd" d="M15.78.22a.75.75 0 0 1 0 1.06L9.06 8l6.72 6.72a.75.75 0 1 1-1.06 1.06L8 9.06l-6.72 6.72a.75.75 0 0 1-1.06-1.06L6.94 8 .22 1.28A.75.75 0 1 1 1.28.22L8 6.94 14.72.22a.75.75 0 0 1 1.06 0z" fillRule="evenodd"></path></svg>
          </button>
        </div>

        <div className='product-display'>
          <img src={imgUrl} alt={`photo of ${name}`} />
          <div className='product-display-description'>
            <p className='product_name'>{name}</p>
            <p>{product.tagline}</p>
          </div>
          <div className='divider'></div>
        </div>

        <div className='add-to-cart-container'>
          <div className='change-btn'>
            <button 
              className='minus-btn'
              onClick={() => this.changeProductCount('subtract')}
            >
              -
            </button>
            <div className='num-display'>{this.state.quantity}</div>
            <button 
              className='plus-btn'
              onClick={() => this.changeProductCount('add')}
            >
              +
            </button>
          </div>

          <button 
            className='update-btn'
            onClick={this.handleUpdate}
          >
            {`UPDATE SELECTION - $${price * this.state.quantity}`}
          </button>

        </div>
      </div>
    )
  }
}

