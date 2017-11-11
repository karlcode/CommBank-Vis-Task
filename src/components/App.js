import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import { scaleRotate as LeftMenu } from 'react-burger-menu';
import offenceData from './offenceData';
import Header from './Header';
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
            <h2 className="sideTitle">Charts</h2>
            <header className="App-header">
            <Header/>
            </header>
            <Route exact path="/" render={()=><Chart data={offenceData}/>} />
            <Route path="/table" render={()=><Chart data={offenceData}/>} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
