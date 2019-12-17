import React, { Component } from 'react';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productCount: 1,
    };
    this.changeProductCount = this.changeProductCount.bind(this);
  }
  
  changeProductCount(change) {
    let oldCount = this.state.productCount;
    switch (change) {
      case 'add':
        this.setState({ productCount: oldCount + 1 });
        break;

      case 'subtract':
        const newCount = (oldCount - 1) < 0 ? 0 : (oldCount - 1);
        this.setState({ productCount: newCount });
        break;
    
      default:
        break;
    }
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
        <button className='add-to-bag-btn'>
          {`ADD TO BAG - $${this.props.product.price}`}
        </button>
      </div>
    )
  }
}