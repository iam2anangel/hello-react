import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// could apply (import Text from './Text.jsx') link above and then move class Text to that folder and export default at the end will be Text not App
class Text extends Component {
 constructor(props) {
   super(props);
 }
 render() {
   return <span style={{color: this.props.color }}>{this.props.value }</span>;
 }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>
          Hello, <Text value="Jen" color="green" />
        </p>
      </div>
    );
  }
}

export default App;
