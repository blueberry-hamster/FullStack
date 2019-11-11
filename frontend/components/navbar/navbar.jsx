import React, { Component } from 'react';
import NavbarCategoryButton from './navbar_category_button';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'Shop All'
    }
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();
  }
  
  render() {
    const navbarCategories = ['Shop All'].concat(Object.keys(this.props.categories));
    
    return (
      <ul>
        {
          navbarCategories.map(category => <NavbarCategoryButton 
                                            category={category} 
                                            products={this.props.products[category]}
                                          /> )
        }
      </ul>
    )
  }
}

