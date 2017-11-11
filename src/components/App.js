import React, { Component } from 'react';
import './App.css';
import Chart from './Chart';
import ScatterPlot from './ScatterPlot';
import { scaleRotate as LeftMenu } from 'react-burger-menu';
import offenceData from './offenceData';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }
  handleChange = (event, index, value) => this.setState({value});
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
            <MuiThemeProvider >
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={1} primaryText="Never" />
              <MenuItem value={2} primaryText="Every Night" />
              <MenuItem value={3} primaryText="Weeknights" />
              <MenuItem value={4} primaryText="Weekends" />
              <MenuItem value={5} primaryText="Weekly" />
            </DropDownMenu>
            </MuiThemeProvider>
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
