import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import DataSheet from './DataSheet';
import { connect } from 'react-redux'
import { scaleRotate as LeftMenu } from 'react-burger-menu';
import offenceData from './offenceData';
import ChangeFilters from '../containers/ChangeFilters'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: offenceData.data2013
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps){
      console.log(nextProps.year);
      this.setState({dataset: offenceData})
    }
  }
  render() {
    return (
      <Router>
        <div className="App" id="outer-container">
          <LeftMenu className="menu" pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
          <Link to="/" style={{ textDecoration: 'none' }}><div className="cards">Charts</div></Link>
          <Link to="/datasheet" style={{ textDecoration: 'none' }}><div className="cards">Tables</div></Link>
          </LeftMenu>
          <div id="page-wrap">
            <h2 className="sideTitle">{this.props.category} - {this.props.year}</h2>
            <header className="App-header">
            <ChangeFilters/>
            </header>
            <Route exact path="/" render={()=><Chart data={this.state.dataset}/>} />
            <Route path="/datasheet" render={()=><DataSheet data={this.state.dataset}/>} />
          </div>
        </div>
      </Router>
    );
  }
}


function mapStateToProps(state) {
  const map = { 
      year: state.filters.year,
      category: state.filters.category
   };
  return map;
}

export default connect(mapStateToProps)(App);