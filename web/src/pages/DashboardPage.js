import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import CheckCircle from '@material-ui/icons/CheckCircle'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import QrScanIcon from '@material-ui/icons/Fullscreen'
import Typography from '@material-ui/core/Typography'
import VialIcon from '../icons/VialIcon'
import AppBar from '../components/AppBar'

const styles = {
  root: {
    marginTop: '2rem'
  },
  flex: {
    flex: 1
  },
  link: {
    color: 'inherit'
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
  },
  icon: {
    width: '56px',
    height: '56px',
    display: 'block',
    margin: '0 auto',
    '-webkit-filter': 'grayscale(100%)',
    filter: 'grayscale(100%)',
    opacity: 0.75
  }
}

const DashboardVialIcon = withStyles(styles)(VialIcon)

function DashboardPage(props) {
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
    },
    {
      icon: <DashboardVialIcon />,
      caption: 'Products',
      path: '/products'
    }
  ]

  return (
    <React.Fragment>
      <AppBar>
        {/* TODO: <Logo /> */}
        <Typography variant="title" color="inherit" className={classes.flex}>
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

export default withStyles(styles)(DashboardPage)
