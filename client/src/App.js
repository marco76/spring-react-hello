import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Backend from './service/backend';

class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            greetings : ''
        }
    }
    
    componentDidMount() {
        console.log('componentDidMount');
        Backend.getJson().then(response => {
            this.setState({
                greetings: response
            })
        })
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React and Spring</h2>
        </div>
        <p className="App-intro">
          Getting a message from the server :  {this.state.greetings}
        </p>
      </div>
    );
  }
}

export default App;
