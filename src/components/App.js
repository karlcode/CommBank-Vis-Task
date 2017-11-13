import React, { Component } from 'react';
import '../styles/App.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { scaleRotate as LeftMenu } from 'react-burger-menu';
import ChangeFilters from '../containers/ChangeFilters';
import Chart from './Chart';
import DataSheet from './DataSheet';
import offenceTotal from '../utils/offenceTotal';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 'penalties2014',
      y2: '',
      p: `penaltiesPercentage2014`,
      p2: '',
      showAll: false
    }
    this.transformData(this.props.year)
  }
  transformData(year){
    for (var i = 0; i<offenceTotal.length; i++){
      offenceTotal[i][`fvPercentage${year}`] = Math.round((offenceTotal[i][`fv${year}`]/offenceTotal[i][`fv${year}Total`])* 100) / 100
      offenceTotal[i][`penaltiesPercentage${year}`] = Math.round((offenceTotal[i][`penalties${year}`]/offenceTotal[i][`penalties${year}Total`])* 100) / 100
      offenceTotal[i][`average${year}`] = (offenceTotal[i][`fv${year}`]/offenceTotal[i][`penalties${year}`]).toFixed(2)
    }
  }
  componentWillReceiveProps(nextProps){
    this.transformData(nextProps.year)
    switch(nextProps.category){
      case 'Penalties':
      if(nextProps.year == 'All'){
        return this.setState({x: 'short', y: 'penalties2013', y2: 'penalties2014', showAll: true, p: `penaltiesPercentage${nextProps.year}`})
      }else return this.setState({x: 'short', y: `penalties${nextProps.year}`, y2: '', showAll: false, p: `penaltiesPercentage${nextProps.year}`})
      break;
      case 'Face Value ($)':
      if(nextProps.year == 'All'){
        return this.setState({x: 'short', y: 'fv2013', y2: 'fv2014', showAll: true, p: `fvPercentage${nextProps.year}`})
      }else return this.setState({x: 'short', y: `fv${nextProps.year}`, y2: '', showAll: false, p: `fvPercentage${nextProps.year}`})
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
            <Route exact path="/" render={()=><Chart data={offenceTotal} {...this.state}/>} />
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