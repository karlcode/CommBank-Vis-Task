import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import ScatterPlot from './ScatterPlot';
import { scaleRotate as LeftMenu } from 'react-burger-menu';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="outer-container">
          <LeftMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <Link to="/">Home</Link>
          <Link to="/scatterplot">ScatterPlot</Link>
          </LeftMenu>
          <div id="page-wrap">

            <header className="App-header">
              <h1 className="App-title">Sydney Trains Offences 2013-2014</h1>
            </header>
            <Route exact path="/" component={Chart}/>
            <Route path="/scatterplot" component={ScatterPlot}/>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
