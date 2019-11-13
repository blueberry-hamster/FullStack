import React from 'react'

export default function ImageCarouselIcon(props) {
  // const image = props.image;
  return (
    <li onClick={e => props.updateActiveImage(e.target.src)}>
      {/* put image here */}
      
    </li>
  )
}
