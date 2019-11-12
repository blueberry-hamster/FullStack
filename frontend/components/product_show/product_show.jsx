import React, { Component } from 'react'

import BreadCrumbs from './breadcrumbs';
import ProductShowLeft from './product_show_left';
import ProductShowRight from './product_show_right';

export default class ProductShow extends Component {
  render() {
    return (
      <div>
        <BreadCrumbs />
        <ProductShowLeft />
        <ProductShowRight />
      </div>
    )
  }
}
