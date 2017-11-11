import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
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
          <LeftMenu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <Link to="/">Home</Link>
          <Link to="/scatterplot">ScatterPlot</Link>
          </LeftMenu>
          <div id="page-wrap">
            <h2 className="sideTitle">Charts</h2>
            <header className="App-header">
            <Header/>
            </header>
            <Route exact path="/" render={()=><Chart data={offenceData.data2013}/>} />
            <Route path="/table" render={()=><Chart data={offenceData}/>} />
          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
