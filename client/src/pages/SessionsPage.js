import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '../components/AppBar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  container: {
    padding: theme.spacing.unit * 2
  },
  button: {
    float: "right"
  }
})

class SessionsPage extends React.Component {
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
  }

  handleSubmit = event => {
    console.log(event)
  }

  render() {
    const { classes } = this.props
    return (
        <Route path='/sessions/new' render={
          () => (
            <React.Fragment>
              <AppBar title="Login" />
              <Grid container spacing={24} className={classes.container}>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    Log in to your account
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth type="email" label='Email' onChange={this.handleChange('email')} autoFocus/>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth type="password" label='Password' onChange={this.handleChange('password')}/>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}>
                    Log In
                  </Button>
                </Grid>
              </Grid>
            </React.Fragment>
          )}
        />
    )
  }
}

export default withStyles(styles)(SessionsPage)
