import React from 'react'
import { Link } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import CheckCircle from '@material-ui/icons/CheckCircle'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import QrScanIcon from '@material-ui/icons/Fullscreen'
import Typography from '@material-ui/core/Typography'

import AppBar from '../components/AppBar'

const styles = {
  root: {
    marginTop: '2rem'
  },
  tile: {
    '& p': {
      whiteSpace: 'nowrap',
      textAlign: 'center'
    },
    '& svg': {
      display: 'block',
      margin: '0 auto'
    }
  }
}

function Dashboard(props) {
  const { classes } = props
  const tiles = [
    { 
      icon: <QrScanIcon style={{ fontSize: 56 }} />,
      caption: 'Scan QR Code',
      path: '/products/scan'
    },
    {
      icon: <CheckCircle style={{ fontSize: 56 }} />,
      caption: 'Stock Check',
      path: '/products/check'
    }
  ]

  return (
    <React.Fragment>
      <AppBar >
        {/* TODO: <Logo /> */}
        <Typography variant="title" color="inherit">
          Notification System
        </Typography>
      </AppBar>
      <main className={classes.root}>
        <GridList cellHeight='auto' className={classes.gridList} col={3}>
          {
            tiles.map((tile, index) => (
              <GridListTile key={index} className={classes.tile} cols={1}>
                <Link to={tile.path}>
                  <ListItemIcon>{tile.icon}</ListItemIcon>
                  <Typography>{tile.caption}</Typography>
                </Link>
              </GridListTile>
            ))
          }
        </GridList>
      </main>
    </React.Fragment>
  )
}

export default withStyles(styles)(Dashboard)