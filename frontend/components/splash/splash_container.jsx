import { connect } from 'react-redux';
import Splash from './splash';
import { getProducts } from '../../actions/product_actions';

const mapStateToProps = state => {
  let products = state.entities.products;

  return {
    products
  }
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);