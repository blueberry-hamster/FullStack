import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = props => {
  const product = props.product;
  const productUrlName = product.name.split(' ').join('-');
  return (
    <li className='product_card'>
      <div className='product_card_image'>
        {/* UNFINISHED quickview function */}
      </div>
      <div className='product_card_info'>
        <Link to={`/products/${productUrlName}`}>
          <p className='product_name'>{ product.name }</p>
          <p className='product_tagline'>{ product.tagline }</p>
        </Link>
        <div>
          {/* onClick={ props.addToBag(productUrlName) } */} 
          <button> 
            <div>{`ADD TO BAG - $${product.price}`}</div>
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
