import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { getProducts } from '../../actions/product_actions';

const mapStateToProps = state => {
  return {
  category: 'All',
  categories: Object.values(state.entities.categories),
  products: Object.values(state.entities.products)
  }
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);