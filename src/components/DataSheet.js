import React from 'react';
import '../styles/App.css';
import Table from './Table';
import {Responsive, WidthProvider} from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const DataSheet = (props) => {
  var lg = [
    {i: 'table', x: 2, y: 0, w: 8, h: 1.5, minH: 1.5, maxH: 1.5}
  ];
  var md = [
    {i: 'table', x: 2, y: 0, w: 7, h: 1.5, minH: 1.5, maxH: 1.5}
  ];
  var sm = [
    {i: 'table', x: 1, y: 0, w: 7, h: 1.5, minH: 1.5, maxH: 1.5}
  ];
  var layout = {lg: lg, md: md, sm: sm};
  return (
    <ResponsiveReactGridLayout className="layout" layouts={layout} rowHeight={300}
    cols={{lg: 12, md: 12, sm: 12, xs: 4, xxs: 2}}
    breakpoints={{lg: 1900, md: 1600, sm: 1200, xs: 900, xxs: 0}}>
    <div className="card" key="table">
      <Table data={props.data}/>
    </div>
    </ResponsiveReactGridLayout>
  );
}


export default DataSheet;