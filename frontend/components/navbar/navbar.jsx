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
    const navbarCategories = ['Shop All'].concat(this.props.categories);
    return (
      <ul id='navbar_container'>
        {
          navbarCategories.map(category => {
            const products = category === 'Shop All' ? this.props.allProducts : this.props.products[category];
          
            return <NavbarCategoryButton 
              key={category}
              category={category} 
              products={products}
            />
          })
        }
      </ul>
    )
  }
}

