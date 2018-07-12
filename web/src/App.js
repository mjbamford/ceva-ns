import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
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
  state = ({
    scannedUrl: null
  })

  handleScan = data => {
    console.dir(data)
    this.setState({ scannedUrl: data })
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Switch>
              <Route path='/products/scan' render={
                () => (<ProductsPage onScan={this.handleScan} />)}
              />
              <Route path='/products/:id' render={
                ({ match }) => (
                  <React.Fragment>
                    <p>Match={match.params.id}</p>
                    <p>State={this.state.scannedUrl}</p>
                    <Link to='/products/scan'>Scan Again</Link>
                  </React.Fragment>
                )}
              />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App