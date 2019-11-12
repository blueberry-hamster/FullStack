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

            <div>
              <span>{ product.tagline }</span>
              <span>{ product.size }</span>
            </div>
          </div>

          <div id='product-show-description'>
            <h2>{ description.title }</h2>

            <p>
              <strong>What it is:</strong>
              { description.what_it_is }
            </p>

            <p>
              <strong>Why it’s special:</strong>
            </p>

            <ul>
              { description.why_its_special.map(bullet => <li>{ bullet }</li>) }
            </ul>

            <p>
              <strong>Good to know: </strong>
              { description.good_to_know }
            </p>

          </div>
        </div>
        
        <Tags tags={tags} />
        <AddToCart product={this.props.product} />
      </div>
    )
  }
}
