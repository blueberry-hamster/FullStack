import React from 'react'
import ProductCard from '../product_index/product_card';

export default function SkinFirst(props) {
  const products = Object.values(props.products).filter(product => product.category === 'Makeup').slice(0, 4);

  return (
    <div id='makeup-second-container'>
      <div id='makeup-second-header'>
        <h2>
          Makeup second.
        </h2>
        <p>
          Products that give you options but never cover you up, turn you into someone else, or over-complicate your routine. Because beauty should make you feel good.
        </p>
        <button>
          SHOP ALL Makeup
        </button>
      </div>
      <div id='makeup-second-show-container'>
        <div id='skin-fist-cards'>
          {
            products.map(product => <ProductCard product={product} />)
          }
        </div>
        <div id='makeup-second-img'>
          {/* FIXME IMG GOES HERE  */}
        </div>
      </div>
    </div>
  )
}
