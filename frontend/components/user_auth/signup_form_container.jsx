import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { createNewUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  createNewUser: user => dispatch(createNewUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);