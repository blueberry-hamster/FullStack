import React from 'react'
import GLogo from './g_logo';

export default function MainFrame(props) {
  return (
    <div id='main-frame'>
      <GLogo />
      <div id='splash-img'>
        {/* FIXME IMG GOES HERE */}
      </div>
      <div id='splash-right'>
        <h2 id='splash-title'>
          The new beauty essentials
        </h2>
        <p id='splash-subtitle'>
          Find your makeup and skincare favorites, and save with sets
        </p>
        <button onClick={() => props.history.push('/products')}>
          SHOP ALL
        </button>
      </div>
    </div>
  )
}
