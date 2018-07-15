import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import ProductsPage from './pages/ProductsPage'
import DashboardPage from './pages/DashboardPage'
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
    scannedUrl: null
  })

  handleScan = data => {
    this.setState({ scannedUrl: data })
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route path='/products' render={
                () => (<ProductsPage onScan={this.handleScan} scannedUrl={this.state.scannedUrl} />)
              }/>
              <Route path='/' component={DashboardPage} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App