import React, { Component } from 'react'

export default class AddToCart extends Component {
  render() {
    return (
      <div className='add-to-cart-container'>
        <div className='adding-btn'>
          <button className='minus-btn'>-</button>
          <div className='num-display'>1</div>
          <button className='plus-btn'>+</button>
        </div>
        <button className='add-to-bag-btn'>
          { `ADD TO BAG - ${this.props.product.price}` }
      </button>
      </div>
    )
  }
}