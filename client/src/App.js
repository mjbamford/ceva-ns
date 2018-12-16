import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import HelpPage from './pages/HelpPage'
import DashboardPage from './pages/DashboardPage'
import NotFoundPage from './pages/NotFoundPage'
import ProductsPage from './pages/ProductsPage'
import './App.css';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#7C8aaa',
      main: '#46598a',
      dark: '#374876',
      contrastText: '#fff'
    },
    secondary: {
      light: '#55bde5',
      main: '#1a94ce',
      dark: '#1282bb',
      contrastText: '#fff'
    }
  }
})

class App extends Component {
  state = ({
    products: [],
    scannedUrl: null
  })

  handleScan = data => {
    this.setState({ scannedUrl: data })
  }

  fetch(endpoint) {
    return window.fetch(endpoint)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  getProducts () {
    this.fetch('/api/products')
      .then(products => {
        if (products.length) {
          this.setState({ products: products })
        } else {
          this.setState({ products: [] })
        }
      })
  }

  componentDidMount () {
    this.getProducts()
  }

  render() {
    const { products, scannedUrl } = this.state
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route path='/products' render={
                () => (<ProductsPage onScan={this.handleScan} products={products} scannedUrl={scannedUrl} />)
              }/>
              <Route path='/help' component={HelpPage} />
              <Route path='/' component={DashboardPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App
