import { getCart, newCart } from '../actions/cart_actions';

export const defaultCart = ip => {
  dispatch(getCart()).then( res => {
    debugger
    res ? nil : newCart(ip);
  });
  // if (!existingCart) {
  //   return newCart(ip);
  // } else {
  //   return existingCart;
  // }
};

export const mergeDefaultCart = (defaultCartItems, userCartItems) => {
  const combinedCartItems = userCartItems;
  
  Object.values(defaultCartItems).forEach(cartItem => {
    const id = cartItem.product_id;
    if (userCartItems[id]) {
      cartItem[quantity] += userCartItems[id][quantity];
    }
    combinedCartItems[id] = cartItem[id];
  }); 
  return combinedCartItems;
};