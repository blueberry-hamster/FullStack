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
    const products = this.props.products;
    return (
      <div id='splash-container'>
        <MainFrame history={this.props.history} />
        <Inspired history={this.props.history} products={products} />
        <About />
        <SkinFirst history={this.props.history} products={products} />
        <MakeupSecond history={this.props.history} products={products} />
        <Base />
      </div>
    )
  }
}
