import React, { Component } from 'react';
import CartModalEdit from './cart_modal_edit';

class CartModalProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editOpen: false
    };
    this.openEdit = this.openEdit.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
  }

  openEdit() {
    this.setState({ editOpen: true });
  }

  closeEdit() {
    this.setState({ editOpen: false });
  }
  
  render() {
    const product = this.props.product,
      price = product.price,
      name = product.name,
      imgUrl = product.clear_photo,
      quantity = this.props.quantity;

    let edit = this.state.editOpen ? 
      <CartModalEdit 
        product={product}
        cartItemId={this.props.cartItemId}
        quantity={quantity}
        closeEdit={this.closeEdit} 
        destroyCartItem={this.props.destroyCartItem}
        updateCartItem={this.props.updateCartItem}
      /> :
      '';
    
    return (
      <div className='cart-modal-product-card'>
        { edit } 
        <div className='product-display'>

          <div className='product-description'>
            <p>{`${quantity}x ${name}`}</p>
            <span>{`$${price}`}</span>
          </div>

          <div className='product-photo'>
            <img src={imgUrl} alt={`photo of ${name}`} />
          </div>

        </div>
        
        <div className='edit-remove-buttons'>

          <button onClick={() => this.openEdit()}>
              Edit
          </button>

            <button onClick={() => this.props.destroyCartItem(this.props.cartItemId)}>
              Remove
          </button>

        </div>
      </div>
    )
  }
}

export default CartModalProductCard;