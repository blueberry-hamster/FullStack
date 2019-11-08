import { connect } from 'react-redux';
import FlyoutMenu from './flyout_product_cards';
import { getProducts } from '../../actions/product_actions';

const mapStateToProps = state => ({
  categories: state.entities.categories,
  products: Object.values(state.products)
});

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlyoutMenu);