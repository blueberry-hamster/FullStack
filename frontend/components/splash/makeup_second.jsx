import React from 'react'
import ProductCard from '../product_index/product_card';

export default function SkinFirst(props) {
  const products = Object.values(props.products).filter(product => product.category === 'Makeup').slice(0, 4);

  return (
    <div className='splash-product-container'>
      <div className='splash-product-header'>
        <h2>
          Makeup second.
        </h2>
        <p>
          Products that give you options but never cover you up, turn you into someone else, or over-complicate your routine. Because beauty should make you feel good.
        </p>
        <button onClick={() => props.history.push('/products/makeup')}>
          SHOP ALL Makeup
        </button>
      </div>
      <div className='splash-product-show-container'>
        <ul className='splash-product-cards'>
          {
            products.map(product => <ProductCard product={product} />)
          }
        </ul>
        <div className='splash-product-img'>
          <img src="https://glossier-demo-seeds.s3-us-west-1.amazonaws.com/_assets/makeup_second.jpg" alt="girl with lipstick"/>
        </div>
      </div>
    </div>
  )
}
