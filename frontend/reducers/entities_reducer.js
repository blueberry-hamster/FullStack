import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productReducer from './products_reducer';
import categoriesReducer from './categories_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productReducer,
  categories: categoriesReducer
});

export default entitiesReducer;