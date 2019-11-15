import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = props => {
  const product = props.product;
  const productUrlName = product.name.split(' ').join('-');

  // if (!product.photoUrls) return null;
  const { photoUrls } = product;
  return (
    <li className='product_card' key={product.id}>
      <Link to={`/product/${productUrlName}`} className='product_card_image'>
        <img src={ photoUrls[0] } alt={`photo of ${ product.name }`} />
      </Link>
      <div className='product_card_info'>
        <Link to={`/product/${productUrlName}`}>
          <p className='product_name'>{ product.name }</p>
          <p className='product_tagline'>{ product.tagline }</p>
        </Link>
        <div>
          {/* onClick={ props.addToBag(product.id) } */} 
          <button> 
            <div>{`ADD TO BAG - $${product.price}`}</div>
          </button>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
