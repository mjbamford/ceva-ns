import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import HelpIcon from '@material-ui/icons/LiveHelp'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import AppBar from '../components/AppBar'
import QrScanner from '../components/QrScanner'
import QrChecker from '../components/QrChecker'
import Logo from '../components/Logo'
import ProductList from '../components/ProductList'
import Product from '../components/Product'
import productModel from '../models/Product'

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
  const { classes, onScan, products, scannedUrl } = props
  return (
    <React.Fragment>
      <Switch>
        <Route path='/products/scan' render={
          () => (
            <React.Fragment>
              <AppBar title="Products" >
                <Link className={classes.link} to='/help'>
                  <IconButton color="inherit">
                    <HelpIcon />
                  </IconButton>
                </Link>
              </AppBar>
              <main className={classes.main}>
                <QrScanner onScan={onScan} redirectTo='/products/666' />
                <Logo />
              </main>
            </React.Fragment>
          )}
        />

        <Route path='/products/check' render={
          () => (
            <React.Fragment>
              <AppBar title="Stock Check" />
              <main className={classes.main}>
                <QrChecker />
                <Logo />
              </main>
            </React.Fragment>
          )}
        />

        <Route path='/products/:id' render={
            ({ match }) => {
              const { id } = match.params
              const product = productModel.find(id)
              return (
                scannedUrl ? (
                  <React.Fragment>
                    <AppBar title="Ceva" />
                    <Typography className={classes.scannedUrl} align="center" variant='body1'>
                      {scannedUrl}
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <AppBar title={product.name} />
                    <Product product={product} />
                  </React.Fragment>
                )
            )}}
        />

        <Route path='/products' render={
          () => (
            <React.Fragment>
              <AppBar title="Products" />
              <main>
                <ProductList products={products} />
              </main>
            </React.Fragment>
          )}
        />
      </Switch>
    </React.Fragment>
  )
}

export default withStyles(styles)(ProductsPage)
