import * as ProductApiUtil from "../util/product_api_util";

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
})

const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
})

export const getProducts = () => dispatch => ProductApiUtil.getProducts()
  .then(products => dispatch(receiveProducts(products)));

export const getProduct = name => dispatch => ProductApiUtil.getProduct(name)
  .then(product => dispatch(receiveProduct(product)));