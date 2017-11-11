import React, { Component } from 'react';
import './App.css';
import BarChart from './BarChart';
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
      <div className="App">
        <LeftMenu>
        <Link to="/">Home</Link>
        <Link to="/scatterplot">ScatterPlot</Link>
        </LeftMenu>
        <header className="App-header">
          
          <h1 className="App-title">Sydney Trains Offences 2013-2014</h1>
        </header>
        <Route exact path="/" component={BarChart}/>
        <Route exact path="/scatterplot" component={ScatterPlot}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </Router>
    );
  }
}

export default App;
