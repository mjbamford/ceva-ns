import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import QrScanIcon from '@material-ui/icons/Fullscreen'
import CheckCircle from '@material-ui/icons/CheckCircle'
import Logo from './Logo'
import Typography from '@material-ui/core/Typography';

export const drawerHeaderListItems = (
  <div>
    <ListItem>
      <Logo />
    </ListItem>
    <ListItem>
      <div>
        <Typography variant="subheading">Notification System</Typography>
        <Typography variant="body1">Together, beyong animal health</Typography>
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
  </div>
)