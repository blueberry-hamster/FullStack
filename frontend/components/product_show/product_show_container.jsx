import { connect } from 'react-redux';
import ProductShow from './product_show';
import { getProduct } from '../../actions/product_actions';
import { getCart } from "../../actions/cart_actions";
import { createCartItem, updateCartItem } from "../../actions/cart_item_actions";
// import getImages

const mapStateToProps = (state, ownProps) => {
  const name = ownProps.match.params.name.replace(/-/g, ' ');
  return {
  product: state.entities.product[name],
  cart: state.entities.cart,
  };
};

const mapDispatchToProps = dispatch => ({
  getProduct: name => dispatch(getProduct(name)),
  getCart: () => dispatch(getCart()),
  createCartItem: (cart_item) => dispatch(createCartItem(cart_item)),
  updateCartItem: (cart_item) => dispatch(updateCartItem(cart_item)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);