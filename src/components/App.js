import React, { Component } from 'react';
import './App.css';
import BarChart from './BarChart';
import ScatterPlot from './ScatterPlot';
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
        <header className="App-header">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/scatterplot">ScatterPlot</Link></li>
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
