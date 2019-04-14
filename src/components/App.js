import React, { Component } from 'react';
import './App.scss';
import LeftSide from './left-side'
import RightSide from './right-side'
import Header from './header'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-content">
          <div className="content-left">
            <LeftSide />
          </div>
          <div className="content-right">
            <RightSide />
          </div>
        </div>

      </div>

    );
  }
}

export default App;
