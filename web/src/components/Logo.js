import React from 'react'
import logo from '../logo-96x96.png'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    medium: {
        width: '56px',
        height: '56px'
    },
    large: {
        width: '96px',
        height: '96px'
    }
}

function Logo ({ size, classes }) {
    return (
        <img className={classes[size]} src={logo} alt="Ceva Logo" />
    )
}

export default withStyles(styles)(Logo)