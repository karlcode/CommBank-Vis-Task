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

let data2013 = offenceTotal.map(key => ({
  offence: key.offence, short: key.short, penalties: key.penalties2013, fv: key.fv2013, average: (key.fv2013/key.penalties2013).toFixed(2)
}))
let data2014 = offenceTotal.map(key => ({
  offence: key.offence, short: key.short, penalties: key.penalties2014, fv: key.fv2014, average: (key.fv2014/key.penalties2014).toFixed(2)
}))

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: data2014,
      childVisible: false,
      x: 'short',
      y: 'penalties'
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps){
      switch (nextProps.year){
        case '2013': 
        this.setState({dataset: data2013, childVisible: false})
        break;
        case '2014':
        this.setState({dataset: data2014, childVisible: false})
        break;
        case 'All':
        if(nextProps.category == 'Penalties'){
          this.setState({dataset: offenceTotal, childVisible: true})
        }
        else if (nextProps.category == 'Face Value'){
          this.setState({dataset: offenceTotal, childVisible: true})
        }
        break;
        default: 
        alert('Invalid option')
      }
      switch (nextProps.category){
        case 'Penalties': 
        this.setState({y: 'penalties'})
        break;
        case 'Face Value':
        this.setState({y: 'fv'})
        break;
        default: 
        alert('Invalid option')
      }
      
    }  
  }
  render() {
    let chart = {data: this.state.datasheet, childVisible: this.state.childVisible, x: this.state}
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
            <Route exact path="/" render={()=><Chart data={this.state.dataset} childVisible={this.state.childVisible} y={this.state.y}/>} />
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