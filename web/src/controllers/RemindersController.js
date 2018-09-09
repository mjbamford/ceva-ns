import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '../components/AppBar'

const styles = {
  appBar: {
      // flex: 'none'
  },
  scannedUrl: {
      marginTop: '2rem'
  },
  link: {
      color: 'inherit'
  },
  main: {
      flex: '1 0 auto',
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      justifyContent: 'center'
  }
}

function ProductsPage(props) {
  const { classes } = props
  return (
    <React.Fragment>
      <Switch>
        <Route path='/reminders/new' render={
          () => (
            <React.Fragment>
              <AppBar title="New Notification" />
              <main>
              </main>
            </React.Fragment>
          )
        }/>

        <Route path='/reminders/:id' render={
            ({ match }) => {
              const { id } = match.params
              // const product = productModel.find(id)
              const product = null
              return (
                  <React.Fragment>
                    <AppBar title={"Notification"} />
                    {/* <Product product={product} /> */}
                  </React.Fragment>
                )
            }}
        />

        <Route path='/reminders' render={
          () => (
            <React.Fragment>
              <AppBar title="Notifications" />
              {/* <main> */}
              {/*   <ProductList /> */}
              {/* </main> */}
            </React.Fragment>
          )}
        />
      </Switch>
    </React.Fragment>
  )
}

export default withStyles(styles)(ProductsPage)
