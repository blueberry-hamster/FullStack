import React from 'react';
import ProductCard from '../product_index/product_card';

const Inspired = props => {
  const products = Object.values(props.products).slice(0, 4);
  return (
    <div id='inspired-container'>
      <h2>Beauty inspired by real life.</h2>
      <p>
        Glossier is a new approach to beauty. It’s about fun and freedom and being OK with yourself today. We make intuitive, uncomplicated products designed to live with you.
      </p>
      <ul>
        {
          products.map((product, i) => <ProductCard 
            key={i} 
            product={product} 
            cart={props.cart}
            currentUser={props.currentUser}
            createCartItem={props.createCartItem}
            updateCartItem={props.updateCartItem}
            updateTempCartItem={props.updateTempCartItem}
            openModal={props.openModal}
           />)
        }
      </ul>
    </div>
  );
}

export default Inspired;
