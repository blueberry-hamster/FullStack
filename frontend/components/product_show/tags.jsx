import React from 'react'
import Tag from './tag';

export default function Tags(props) {
  return (<div id='tags-container'>
    {
      props.tags.map(tag => {
        return (
          <div className='tag'>
            <Tag name={tag.name} />
            <p>{ tag.name }</p>
          </div>
        )
      })
    }
  </div>)
}
