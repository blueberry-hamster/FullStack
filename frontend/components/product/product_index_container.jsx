import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { getProducts } from '../../actions/product_actions';
import { getCategories } from '../../actions/category_actions';
import { selectProducts } from '../../reducers/selectors/product_selector';

const mapStateToProps = (state, ownprops) => {
  const category = ownprops.match.params.category ? ownprops.match.params.category : undefined;
  const categories = category ? [category] : Object.keys(state.entities.categories);
  let products = { category: selectProducts(state, category) };

  if (category === undefined) {
    products = {};
    categories.forEach(category => {
      products[category] = selectProducts(state, category)
    })
  }
  return {
  category,
  products
  }
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  getCategories: () => dispatch(getCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);