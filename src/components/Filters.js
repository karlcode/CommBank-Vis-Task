import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types'

class Filters extends Component{
  render(){
    return (
      <div>
        <MuiThemeProvider >
        <DropDownMenu onChange={(this.handleChange)} labelStyle={{ backgroundColor: 'white' }}>
        <MenuItem value={1} primaryText="Number of Penalties" />
        <MenuItem value={2} primaryText="Face Value ($)" />
        </DropDownMenu>
        </MuiThemeProvider>
        <MuiThemeProvider >
        <DropDownMenu  onChange={(this.props.changeTime)} labelStyle={{ backgroundColor: 'white' }}>
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