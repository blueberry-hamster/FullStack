import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
  
  addItemToCart() {
    const cartItems = this.props.cart.cartItems;
    const product = this.props.product;
    
    if (cartItems[product.id]) {
      let currentItem = cartItems[product.id];
      let newCount = 1 + currentItem.quantity;
      this.props.updateCartItem({
        quantity: newCount,
        product_id: product.id,
        cart_id: this.props.cart.cartId
      });
    } else {
      this.props.createCartItem({
        product_id: product.id,
        cart_id: this.props.cart.cartId,
        quantity: 1
      });
    }
    this.props.openModal('cart');
  }
  
  render() {
    if(!this.props.product) return null;
    
    const product = this.props.product;
    const productUrlName = product.name.split(' ').join('-');

    const { photoUrls } = product;
    return (
      <li className='product_card' key={product.id}>
        <Link to={`/product/${productUrlName}`} className='product_card_image'>
          <img src={photoUrls[0]} alt={`photo of ${product.name}`} />
        </Link>
        <div className='product_card_info'>
          <Link to={`/product/${productUrlName}`}>
            <p className='product_name'>{product.name}</p>
            <p className='product_tagline'>{product.tagline}</p>
          </Link>
          <div>
            {/* onClick={ props.addToBag(product.id) } */}
            <button onClick={() => this.addItemToCart()}>
              <div>{`ADD TO BAG - $${product.price}`}</div>
            </button>
          </div>
        </div>
      </li>
    );
  }
}
