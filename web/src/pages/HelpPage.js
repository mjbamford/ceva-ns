import React from 'react'

import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import AppBar from '../components/AppBar'

function HelpPage (props) {
  return (
    <React.Fragment>
      <AppBar title="Help" />
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="subheading">What is the meaning of life?</Typography>
            <Typography paragraph>42</Typography>
            <Divider/>
          </ListItemText>
        </ListItem>
      </List>
    </React.Fragment>
  )
}

export default HelpPage