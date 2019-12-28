import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import NoUserSubnav from './no_user_subnav';
import UserSubnav from './user_subnav';
import Logo from './_logo';
import UserIcon from './_user_icon';
import CartIcon from './_cart_icon';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numCartItems: 0,
    };
    this.updateNum = this.updateNum.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();
    
    // set session to ip if not logged in
    let that = this;
    if (!this.props.session.id) {
      this.props.getIp().then(
        res => {
          if (that.props.session.id.split('.').length > 1) {
            // this.props.newCart(res.ip);
            that.props.getDefaultCart(that.props.session.id);
          }
        }
      );
    }
    
    if (this.props.user) this.props.getCart();
    if (this.props.cart.cartId) this.updateNum();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cart != this.props.cart) {
      this.updateNum();
    }
    if (this.props.user && !this.props.cart.cartId) this.props.getCart();

  }
  
  updateNum() {
    if (!this.props.cart.cartItems) return 0;
    
    const numItems = Object.values(this.props.cart.cartItems).length;
    let totalCount = 0;

    for (let i = 0; i < numItems; i++) {
      totalCount += (Object.values(this.props.cart.cartItems)[i].quantity);
    }

    if (totalCount > 99) {
      this.setState({ numCartItems: '99+' });
    } else {
      this.setState({ numCartItems: totalCount });
    }
  }
  
  render() {
    const subnav = this.props.user ? 
      <UserSubnav logoutUser={this.props.logoutUser} /> :
      <NoUserSubnav user={this.props.user} />;
      
      
    return (
      <div id='header'>
        <ul className='header_left_menu'>
          <div></div>
        </ul>
        <Link id='main_logo' to='/'><Logo /></Link>
        <ul id='header_right_menu'>
          <li id='user_icon'>
            <UserIcon />
            { subnav }
          </li>
          <li 
            id='cart_icon'
            onClick={() => this.props.openModal('cart')}
          >
            <p className='num-product'>{ this.state.numCartItems }</p>
            <CartIcon />
          </li>
        </ul>
      </div>
    )
  }
}
export default withRouter(Header);