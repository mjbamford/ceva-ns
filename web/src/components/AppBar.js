import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// import AccountCircle from '@material-ui/icons/AccountCircle'
import AppBar from '@material-ui/core/AppBar'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { drawerHeaderListItems, drawerListItems } from './DrawerListItems'

const styles = {
  root: {
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: '16rem'
  }
}

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { drawer: false }
  }

  handleMenu = event => { }

  toggleDrawer = open => () => {
    this.setState({ drawer: open })
  }

  render() {
    const { classes } = this.props

    const drawerList = (
      <div className={classes.list}>
        <List>
          {drawerHeaderListItems}
          <Divider />
          {drawerListItems}
        </List>
      </div>
    )

    return (
      <React.Fragment>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              onClick={this.toggleDrawer(true)}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Products
            </Typography>
            <IconButton
              color="inherit"
              aria-owns={this.state.drawer ? 'menu-appbar' : null}
              aria-haspopup="true" >
              {/* <AccountCircle /> */}
            </IconButton>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer open={this.state.drawer}
          onOpen={this.toggleDrawer(true)}
          onClose={this.toggleDrawer(false)}
          onClick={this.toggleDrawer(false)}>
          <div>{drawerList}</div>
        </SwipeableDrawer>
      </React.Fragment>
    )
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MenuAppBar)