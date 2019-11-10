import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { getProducts } from '../../actions/product_actions';
import { getCategories } from '../../actions/category_actions';
import { selectProducts } from '../../reducers/selectors/product_selector';

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const mapStateToProps = (state, ownprops) => {
  const category = ownprops.match.params.category ? ownprops.match.params.category : undefined;
  const categories = category ? [category] : Object.keys(state.entities.categories);
  console.log(`category: ${category}`);
  console.log(`categories: ${categories}`);
  console.log(`keys: ${Object.keys(state.entities.categories)}`);
  return {
  category,
  categories,
  products: selectProducts(state, category)
  }
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  getCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);