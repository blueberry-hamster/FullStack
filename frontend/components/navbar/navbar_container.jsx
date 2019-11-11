import { connect } from 'react-redux';
import Navbar from './navbar';
import { getProducts } from '../../actions/product_actions';
import { getCategories } from '../../actions/category_actions';
import { selectProducts } from '../../reducers/selectors/product_selector';

const mapStateToProps = state => {
  const products = {};
  const categories = Object.keys(state.entities.categories);
  categories.forEach(category => {
    products[category] = selectProducts(state, category)
  })
  return {
    categories,
    products,
    allProducts: Object.values(state.entities.products)
  }
  };

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  getCategories: () => dispatch(getCategories())
});


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);