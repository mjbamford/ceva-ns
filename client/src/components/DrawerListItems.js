import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import CheckCircle from '@material-ui/icons/CheckCircle'
import HelpIcon from '@material-ui/icons/LiveHelp'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import QrScanIcon from '@material-ui/icons/Fullscreen'
import Typography from '@material-ui/core/Typography';
import VialIcon from '../icons/VialIcon'
import Logo from './Logo'

const styles = {
  icon: {
    width: '24px',
    marginRight: '16px',
  }
}

const SmallVialIcon = withStyles(styles)(VialIcon)

export const drawerHeaderListItems = (
  <div>
    <ListItem>
      <Link to='/'><Logo /></Link>
    </ListItem>
    <ListItem>
      <div>
        <Typography variant="subheading">Ceva Care</Typography>
        <Typography variant="body1">Together, beyond animal health</Typography>
      </div>
    </ListItem>
  </div>
)

export const drawerListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <QrScanIcon />
      </ListItemIcon>
      <Link to='/products/scan'>
        <ListItemText primary="Scan QR Code"/>
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CheckCircle />
      </ListItemIcon>
      <Link to='/products/check'>
        <ListItemText primary="Stock Check"/>
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmallVialIcon />
      </ListItemIcon>
      <Link to='/products'>
        <ListItemText primary="Products"/>
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <Link to='/help'>
        <ListItemText primary="Help"/>
      </Link>
    </ListItem>
  </div>
)
