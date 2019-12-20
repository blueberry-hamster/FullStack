import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = state => {
  let products = state.entities.products;

  return {
    products,
    user: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);