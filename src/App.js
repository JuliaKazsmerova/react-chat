import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _MessageContainer from './MessageContainer.js';
import { Connector, subscribe } from 'mqtt-react';

const MessageContainer = subscribe({topic: 'upjs/ds/tutorial/react'})(_MessageContainer);


class App extends Component {
  render() {
    return (
      <Connector mqttProps="ws://broker.hivemq.com:8000/mqtt">
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tutorial</h2>
        </div>
        <MessageContainer/>
      </div>
      </Connector>
    );
  }
}

export default App;
