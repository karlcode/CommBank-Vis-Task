import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import DataSheet from './DataSheet';
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { scaleRotate as LeftMenu } from 'react-burger-menu';
import offenceData from './offenceData';
import Filters from './Filters';
import ChangeFilters from '../containers/ChangeFilters'
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
          <LeftMenu className="menu" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <Link to="/" style={{ textDecoration: 'none' }}><div className="cards">Charts</div></Link>
          <Link to="/datasheet" style={{ textDecoration: 'none' }}><div className="cards">Tables</div></Link>
          </LeftMenu>
          <div id="page-wrap">
            <h2 className="sideTitle">Charts</h2>
            <header className="App-header">
            <ChangeFilters/>
            </header>
            <Route exact path="/" render={()=><Chart data={offenceData.data2013}/>} />
            <Route path="/datasheet" render={()=><DataSheet data={offenceData.data2013}/>} />
          </div>
        </div>
      </Router>
    );
  }
}


const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps)(App);