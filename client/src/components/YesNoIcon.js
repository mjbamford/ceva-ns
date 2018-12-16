import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

export default function YesNo ({ yes, classes }) {
  return (
    <span className={classes.yesNoBox} >
      { !!yes ? <SweetAlert.SuccessIcon /> : <SweetAlert.ErrorIcon /> }
    </span>
  )
}