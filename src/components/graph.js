import React from 'react'
import { Graph } from 'react-d3-graph'

const config = {
  nodeHighlightBehavior: true,
  hu_site_limit: {
    color: 'lightgreen',
    size: 120,
    highlightStrokeColor: 'blue'
  },
  point_latitude: {
    highlightColor: 'lightblue'
  }
}

export default props => (
  <div>
    <Graph 
    id='graph-id'
    config={config}
    data={props.data}
  />
  </div>
)