import React, { Component } from 'react';
import NavbarCategoryButton from './navbar_category_button';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'Shop All',
      scrollY: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const point = 50;
    const $flyoutMenu = $('.flyout_product_container');
    const $menu = $('#navbar_container');

    
    if (window.scrollY < point) {
      // $menu.attr('margin-top', `${48 + 44 + window.scrollY}px`);
      $menu.removeClass('slide_up_enter');
      $flyoutMenu.removeClass('slide_up_enter');
    } else if (window.scrollY >= point) {
      $flyoutMenu.addClass('slide_up_enter');
      $menu.addClass('slide_up_enter');
    }
  }
  
  render() {
    const navbarCategories = ['Shop All'].concat(this.props.categories);
    return (
      <ul id='navbar_container' className='.slide_up'>
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

