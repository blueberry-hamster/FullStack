import React, { Component } from 'react';
import MainFrame from './main_frame';
import Inspired from './inspired';
import About from './about';
import SkinFirst from './skin_first';
import MakeupSecond from './makeup_second';
import Base from './base';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }
  
  render() {
    return (
      <div id='splash-container'>
        <MainFrame history={this.props.history} />
        <Inspired history={this.props.history} 
          cart={this.props.cart}
          products={this.props.products}
          currentUser={this.props.currentUser}
          createCartItem={this.props.createCartItem}
          updateCartItem={this.props.updateCartItem}
          updateTempCartItem={this.props.updateTempCartItem}
          openModal={this.props.openModal}
        />
        <About />
        <SkinFirst history={this.props.history} 
          cart={this.props.cart}
          products={this.props.products}
          currentUser={this.props.currentUser}
          createCartItem={this.props.createCartItem}
          updateCartItem={this.props.updateCartItem}
          updateTempCartItem={this.props.updateTempCartItem}
          openModal={this.props.openModal}
        />
        <MakeupSecond history={this.props.history} 
          cart={this.props.cart}
          products={this.props.products}
          currentUser={this.props.currentUser}
          createCartItem={this.props.createCartItem}
          updateCartItem={this.props.updateCartItem}
          updateTempCartItem={this.props.updateTempCartItem}
          openModal={this.props.openModal}
        />
        <Base />
      </div>
    )
  }
}
