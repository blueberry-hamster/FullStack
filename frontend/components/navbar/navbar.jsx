import React, { Component } from 'react';
import FlyoutProductCards from './flyout_product_cards';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: null
    }
  }

  componentDidMount() {
    if(activeCategory) {

    }
  }
  
  render() {
    const navbarCategories = ['Shop All'].concat(this.props.categories);
    
    return (
      <ul>
        {
          navbarCategories.map(category => (
            <FlyoutProductCards
              category={this.state.activeCategory}
              // FIXME filter out products later
              products={this.props.products}
            />
          ))
        }
      </ul>
    )
  }
}

