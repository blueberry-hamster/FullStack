import React from 'react'

export default function ImageCarouselIcon(props) {
  const imageUrl = props.image;
  return (
    <li onClick={e => props.updateActiveImage(e.target.src)}>
      <img src={imageUrl} alt="photo" />
    </li>
  )
}
