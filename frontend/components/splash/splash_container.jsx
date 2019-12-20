import { connect } from 'react-redux';
import Splash from './splash';
import { getProducts } from '../../actions/product_actions';
import { getIpAddress } from '../../actions/session_actions';
import { getDefaultCart } from "../../actions/cart_actions";

const mapStateToProps = state => {
  let products = state.entities.products;

  return {
    products,
    user: state.entities.users[state.session.id],
    session: state.entities.session
  };
};

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  getIp: () => dispatch(getIpAddress()),
  getDefaultCart: ip => dispatch(getDefaultCart(ip)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);