import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { scaleRotate as LeftMenu } from 'react-burger-menu';
import ChangeFilters from '../containers/ChangeFilters';
import Chart from './Chart';
import DataSheet from './DataSheet';
import offenceTotal from './offenceTotal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 'penalties2014',
      y2: '',
      showAll: false
    }
  }

  componentWillReceiveProps(nextProps){
    switch(nextProps.category){
      case 'Penalties':
      if(nextProps.year == 'All'){
        return this.setState({x: 'short', y: 'penalties2013', y2: 'penalties2014', showAll: true})
      }else return this.setState({x: 'short', y: `penalties${nextProps.year}`, y2: '', showAll: false})
      break;
      case 'Face Value ($)':
      if(nextProps.year == 'All'){
        return this.setState({x: 'short', y: 'fv2013', y2: 'fv2014', showAll: true})
      }else return this.setState({x: 'short', y: `fv${nextProps.year}`, y2: '', showAll: false})
      break;
      default: alert('Invalid Input')
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
            <Route exact path="/" render={()=><Chart data={offenceTotal} y={this.state.y} y2={this.state.y2} showAll={this.state.showAll}/>} />
            <Route path="/datasheet" render={()=><DataSheet data={offenceTotal}/>} />
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