import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Filters extends Component{
  changeTime = (event, index, value) => {
    this.props.changeTime(value)
  }
  changeCategory = (event, index, value) => {
    this.props.changeCategory(value)
  }
  render(){
    return (
      <div>
        <MuiThemeProvider >
        <DropDownMenu value={this.props.category} onChange={(this.changeCategory)} labelStyle={{ backgroundColor: 'white' }}>
        <MenuItem value={1} primaryText="Number of Penalties" />
        <MenuItem value={2} primaryText="Face Value ($)" />
        </DropDownMenu>
        </MuiThemeProvider>
        <MuiThemeProvider >
        <DropDownMenu value={this.props.year} onChange={this.changeTime} labelStyle={{ backgroundColor: 'white' }}>
        <MenuItem value={1} primaryText="All Years" />
        <MenuItem value={2} primaryText="2013" />
        <MenuItem value={3} primaryText="2014" />
        </DropDownMenu>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Filters;