import { connect } from 'react-redux';
import LoginForm from './login_form';
import { loginUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  cart: state.entities.cart,
});

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);