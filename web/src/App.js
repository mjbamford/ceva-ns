import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p> */}
          <Switch>
            <Route path='/products/scan' component={ProductsPage} />
            <Route path='/products/:id' render={
              ({ match }) => (<h1>SUCCESS! {match.params.id}</h1>)}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;