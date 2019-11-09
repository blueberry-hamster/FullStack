import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productReducer from './products_reducer';
import categoriesReducer from './categories_reducer';
import productCategoriesReducer from './product_categories_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productReducer,
  categories: categoriesReducer,
  productCategories: productCategoriesReducer
});

export default entitiesReducer;