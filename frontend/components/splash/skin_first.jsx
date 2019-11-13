import React from 'react'
import ProductCard from '../product_index/product_card';

export default function SkinFirst(props) {
  const products = Object.values(props.products).filter(product => product.category === 'Skincare').slice(0,4);
  
  return (
    <div id='skin-first-container'>
      <div id='skin-first-header'>
        <h2>
          Skin first.
        </h2>
        <p>
          Our skincare essentials are designed to make you look and feel your glowy, dewy best before you even think about makeup.
        </p>
        <button>
          SHOP ALL SKINCARE
        </button>
      </div>
      <div id='skin-first-show-container'>
        <div id='skin-first-img'>
          {/* FIXME IMG GOES HERE  */}
        </div>
        <div id='skin-fist-cards'>
          {
            products.map(product => <ProductCard product={product} />)
          }
        </div>
      </div>
    </div>
  )
}
