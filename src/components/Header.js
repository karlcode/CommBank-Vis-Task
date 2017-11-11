import React, { Component } from 'react';
import './App.css';
import ReactGridLayout from 'react-grid-layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
class Header extends Component {
constructor(props) {
    super(props);
    this.state = {value: 1};
    }
    handleChange = (event, index, value) => this.setState({value});
  render() {
    return (
      <div>
        <MuiThemeProvider >
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Header;