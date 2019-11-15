import { connect } from 'react-redux';
import CartModal from './cart_modal';
// import { getProducts } from '../../actions/product_actions';

const mapStateToProps = state => ({
  cart: state.entities.cart
});

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart()),
  removeFromCart: product => dispatch(removeFromCart(product)),
  addToCart: product => dispatch(addToCart(product)),
  // checkout: cart => dispatch(checkout(cart))
});


export default connect(mapStateToProps, mapDispatchToProps)(CartModal);