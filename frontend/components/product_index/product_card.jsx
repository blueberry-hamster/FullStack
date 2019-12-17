import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }
  
  addItemToCart() {
    if (this.props.cart[this.props.product.id]) {
      let currentItem = this.props.cart[this.props.product.id];
      let newCount = 1 + currentItem.quantity;
      this.props.updateCartItem({
        quantity: newCount,
        product_id: this.props.product.id,
        cart_id: this.props.cart.id
      });
    } else {
      this.props.createCartItem({
        product_id: this.props.product.id,
        cart_id: this.props.cart.id,
        quantity: 1
      });
    }
  }
  
  render() {
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
