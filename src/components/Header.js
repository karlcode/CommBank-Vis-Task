import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
    constructor(props) {
    super(props);
    this.state = {value: 1};
    }
    handleChange = (event, index, value) => {
        console.log(event)
        console.log(index)
        console.log(value)
    }
    render() {
        return (
        <div>
            <MuiThemeProvider >
            <DropDownMenu value={this.state.value} onChange={this.handleChange} labelStyle={{ backgroundColor: 'white' }}>
                <MenuItem value={1} primaryText="Number of Penalties" />
                <MenuItem value={2} primaryText="Face Value ($)" />
            </DropDownMenu>
            </MuiThemeProvider>
            <MuiThemeProvider >
            <DropDownMenu value={this.state.value} onChange={this.handleChange} labelStyle={{ backgroundColor: 'white' }}>
                <MenuItem value={1} primaryText="All Years" />
                <MenuItem value={2} primaryText="2013" />
                <MenuItem value={3} primaryText="2014" />
            </DropDownMenu>
            </MuiThemeProvider>
        </div>
        );
    }
}

export default Header;