import { connect } from 'react-redux';
import ProductShow from './product_show';
import { getProduct } from '../../actions/product_actions';
import { createCartItem, updateCartItem, updateTempCartItem } from "../../actions/cart_item_actions";
import { openModal } from "../../actions/modal_actions";

// import getImages

const mapStateToProps = (state, ownProps) => {
  const name = ownProps.match.params.name.replace(/-/g, ' ');
  return {
  product: state.entities.product[name],
  cart: state.entities.cart,
  currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  getProduct: name => dispatch(getProduct(name)),
  createCartItem: (cart_item) => dispatch(createCartItem(cart_item)),
  updateCartItem: (cart_item) => dispatch(updateCartItem(cart_item)),
  updateTempCartItem: (cart_item) => dispatch(updateTempCartItem(cart_item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);