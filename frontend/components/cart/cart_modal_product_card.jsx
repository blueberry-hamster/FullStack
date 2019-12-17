import React from 'react';
import CartModalEdit from './cart_modal_edit';

export default class CartModalProductCard extends Component {
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
    const product = props.product,
      price = product.price,
      name = product.name,
      imgUrl = product.clear_photo,
      quantity = props.quantity;

    let edit = this.state.editOpen ? 
      <CartModalEdit 
        product={product}
        quantity={quantity}
        closeEdit={this.closeEdit} 
        removeFromCart={this.props.removeFromCart}
        addToCart={this.props.addToCart}
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

            <button onClick={props.removeFromCart(product, quantity)}>
              Remove
          </button>

        </div>
      </div>
    )
  }
}
