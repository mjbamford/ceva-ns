import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
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
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route path='/products/scan' component={ProductsPage} />
              <Route path='/products/:id' render={
                ({ match }) => (<h1>SUCCESS! {match.params.id}</h1>)}
              />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App