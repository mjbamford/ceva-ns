import React from 'react'

export default function (props) {
  const className = props.className || {}
  return (
    <div className='dashboard-icon' >
      <img className={className} src='/images/icons/vial-icon.png' alt='Vial Icon'/>
    </div>
  )
}
