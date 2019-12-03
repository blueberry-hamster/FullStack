import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productsReducer from './products_reducer';
import productReducer from './product_reducer';
import categoriesReducer from './categories_reducer';
import productCategoriesReducer from './product_categories_reducer';
import cartReducer from './cart_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  product: productReducer,
  products: productsReducer,
  categories: categoriesReducer,
  productCategories: productCategoriesReducer,
  cart: cartReducer
});

export default entitiesReducer;