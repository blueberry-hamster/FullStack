import React from 'react'

export default function RequiredFieldWarning(props) {
  return (
    <p className='session_errors'>
      {
        `${ props.field } is required`
      }
    </p>
  )
}
