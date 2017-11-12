import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import DataSheet from './DataSheet';
import { connect } from 'react-redux'
import { scaleRotate as LeftMenu } from 'react-burger-menu';
import offenceData from './offenceData';
import offenceTotal from './offenceTotal';
import ChangeFilters from '../containers/ChangeFilters';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: offenceData.data2014
    }
  }

  componentWillReceiveProps(nextProps){
    var all = offenceData.data2013.concat(offenceData.data2014)
    if (this.props !== nextProps){
      switch (nextProps.year){
        case '2013': 
        this.setState({dataset: offenceData.data2013})
        break;
        case '2014':
        this.setState({dataset: offenceData.data2014})
        break;
        case 'All':
        this.setState({dataset: offenceData.data2013.concat(offenceData.data2014)})
        break;
        default: 
        alert('Invalid option')
      }
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
            <Route exact path="/" render={()=><Chart data={offenceTotal}/>} />
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