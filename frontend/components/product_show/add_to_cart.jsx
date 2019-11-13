import React, { Component } from 'react'

export default class AddToCart extends Component {
  render() {
    return (
      <div className='add-to-cart-container'>
        <div className='adding-button'>
          <button className='minus-button'>-</button>
          <div className='num-display'>0</div>
          <button className='plus-button'>+</button>
        </div>
        <button className='add-to-bag-btn'>
          `ADD TO BAG - ${this.props.product.price}`
      </button>
      </div>
    )
  }
}