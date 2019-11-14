import React, { Component } from 'react'
import ImageCarouselIcon from './image_carousel_icon';

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: null, //should be default img
      images: ['a', 'b', 'c'] // should be actual inages 
    }
    this.updateActiveImage = this.updateActiveImage.bind(this);
  }

  componentDidMount() {
    const { photoUrls } = this.props.product;
    this.setState({ activeImage: photoUrls[0] })
    this.setState({ images: photoUrls })
  }

  handleClick(e) {
    // this.updateActiveImage(e.target.image);
  }

  updateActiveImage(image) {
    this.setState({ activeImage: image })
  }
  
  render() {
    return (
      <div id='image-carousel'>
        <div id='carousel-main-image'>
          <img src={this.state.activeImage} alt="photo" />
        </div>
        <ul id='carousel-nav'>
          {
            this.state.images.map((image, i) => <ImageCarouselIcon 
              key={i}
              image={image} 
              updateActiveImage={this.updateActiveImage}
            />)
          }
        </ul>
      </div>
    )
  }
}
