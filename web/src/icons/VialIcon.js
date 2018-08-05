import React from 'react'

export default function (props) {
  const classes = props.classes || {}
  return (
    <div className='dashboard-icon' >
      <img className={classes.icon} src='/images/icons/vial-icon.png' alt='Vial Icon'/>
    </div>
  )
}
