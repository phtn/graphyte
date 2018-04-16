import React from 'react'
import { LineChart, Line, CartesianGrid, Tooltip, YAxis, XAxis, Legend } from 'recharts'

export default props => (
  <div>
    <LineChart width={window.innerWidth} height={400} data={props.data}>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <XAxis />
      <YAxis label={{ value: 'Occupancy Percentage', angle: -90, position: 'insideLeft' }} />
      <Legend />
      <Tooltip />
    </LineChart>
  </div>
)