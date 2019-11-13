import React from 'react'

export default function Tags(props) {
  debugger
  return (
    <div>
      {
        props.tags.map(tag => <Tag name={tag.name} />)
      }
    </div>
  )
}
