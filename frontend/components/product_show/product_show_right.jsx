import React, { Component } from 'react';
import Tags from './tags';
import AddToCart from './add_to_cart';

export default class ProductShowRight extends Component {

  render() {
    const product = this.props.product;
    const tags = product.tags;
    const description = product.description;
    return (
      <div id='product-show-right-container'>
        <div id='product-show-main-info'>

          <div id='product-show-title'>
            <h1>{ product.name }</h1>

            <div id='product-under-title'>
              <span>{ product.tagline }</span>
              <span>{ product.size }</span>
            </div>
          </div>

          <div id='product-show-description'>
            <h2>{ description.title }</h2>

            <p id='what-it-is'>
              <strong>What it is:</strong>
              { description.what_it_is }
            </p>

            <p id='why-its-special'>
              <strong>Why it’s special:</strong>
            </p>

            <ul>
              { description.why_its_special.map((bullet, i) => <li key={i}>{ bullet }</li>) }
            </ul>

            <p id='good-to-know'>
              <strong>Good to know: </strong>
              { description.good_to_know }
            </p>

          </div>
        </div>
        
        <Tags tags={tags} />
        <AddToCart 
          product={product}
          cart={this.props.cart}
          createCartItem={this.props.createCartItem}
          updateCartItem={this.props.updateCartItem}
          openModal={this.props.openModal}
        />
      </div>
    )
  }
}
