import React from 'react';
import '../styles/App.css';
import {Responsive, WidthProvider} from 'react-grid-layout';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import BarGraph from './BarGraph';
import PieGraph from './PieGraph';
import Table from './Table';
import layout from '../utils/layout.js';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const Chart = (props) => {
  return (
    <ResponsiveReactGridLayout className="layout" layouts={layout} rowHeight={300}
    cols={{lg: 12, md: 12, sm: 12, xs: 4, xxs: 2}}
    breakpoints={{lg: 1600, md: 1200, sm: 1024, xs: 720, xxs: 0}}>
    <div className="card" key="bar">
      <h4>{props.category} vs Sydney Trains Offences for {props.year}</h4>
      <BarGraph {...props} />
    </div>
    <div className="card" key="pie">
      <h4>{props.category} distribution (%) for {props.year}</h4>
      <PieGraph {...props}/>
    </div>
    <div className="card" key="table">
      <Table {...props}/>
    </div>
    </ResponsiveReactGridLayout>
  );
}

Chart.propTypes = {
  category: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  y: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  const map = { 
      year: state.filters.year,
      category: state.filters.category
   };
  return map;
}

export default connect(mapStateToProps)(Chart);