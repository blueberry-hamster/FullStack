import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = state => {
  return {
    products: state.entities.products,
    cart: state.entities.cart,
    user: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);