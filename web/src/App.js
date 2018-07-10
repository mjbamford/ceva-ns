import React, { Component } from 'react'
import SimpleAppBar from './SimpleAppBar'
import Test from './Test'
// import logo from './logo.svg';
import logo from './Ceva-96_96.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div className='QrScanner'>
          <Test />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
