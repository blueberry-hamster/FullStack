import React, { Component } from 'react'
import MainFrame from './main_frame';
import About from './about';
import SkinFirst from './skin_first';
import MakeupSecond from './makeup_second';
import Base from './base';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts()
  }
  
  render() {
    const products = this.props.products;
    return (
      <div id='splash-container'>
        <MainFrame />
        <About />
        <SkinFirst products={products} />
        <MakeupSecond products={products} />
        <Base />
      </div>
    )
  }
}
