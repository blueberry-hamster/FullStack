import React from 'react'
import ProductCard from '../product_index/product_card';

export default function SkinFirst(props) {
  const products = Object.values(props.products).filter(product => product.category === 'Skincare').slice(0,4);
  
  return (
    <div className='splash-product-container'>
      <div className='splash-product-header'>
        <h2>
          Skin first.
        </h2>
        <p>
          Our skincare essentials are designed to make you look and feel your glowy, dewy best before you even think about makeup.
        </p>
        <button onClick={() => props.history.push('/products/skincare')}>
          SHOP ALL SKINCARE
        </button>
      </div>
      <div className='splash-product-show-container'>
        <div className='splash-product-img'>
          {/* FIXME IMG GOES HERE  */}
        </div>
        <ul className='splash-product-cards'>
          {
            products.map(product => <ProductCard product={product} />)
          }
        </ul>
      </div>
    </div>
  )
}
