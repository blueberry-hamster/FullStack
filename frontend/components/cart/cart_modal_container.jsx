import { connect } from 'react-redux';
import CartModal from './cart_modal';
// import { getProducts } from '../../actions/product_actions';

const mapStateToProps = state => ({
  cart: state.entities.cart
});

const mapDispatchToProps = dispatch => ({
  getCart: () => dispatch(getCart()),
  removeFromCart: (product, quantity) => dispatch(removeFromCart(product, quantity)),
  addToCart: (product, quantity) => dispatch(addToCart(product, quantity)),
  // openCartModal: () => dispatch(openCartModal()),
  closeCartModal: () => dispatch(closeCartModal()),
  // checkout: cart => dispatch(checkout(cart))
});


export default connect(mapStateToProps, mapDispatchToProps)(CartModal);