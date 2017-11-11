import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import DataSheet from './DataSheet';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { scaleRotate as LeftMenu } from 'react-burger-menu';
import offenceData from './offenceData';
import Header from './Header';
import reducer from '../reducers'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App" id="outer-container">
          <LeftMenu className="menu" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <Link to="/" style={{ textDecoration: 'none' }}><div className="cards">Charts</div></Link>
          <Link to="/datasheet" style={{ textDecoration: 'none' }}><div className="cards">Tables</div></Link>
          </LeftMenu>
          <div id="page-wrap">
            <h2 className="sideTitle">Charts</h2>
            <header className="App-header">
            <Header/>
            </header>
            <Route exact path="/" render={()=><Chart data={offenceData.data2013}/>} />
            <Route path="/datasheet" render={()=><DataSheet data={offenceData.data2013}/>} />
          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
