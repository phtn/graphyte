import React from 'react'
import { LineChart, Line, CartesianGrid, Tooltip, YAxis, XAxis, Legend } from 'recharts'

export default props => (
  <div>
    <LineChart width={window.innerWidth-20} height={400} data={props.data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <XAxis />
      <YAxis label={{ value: 'percentage', angle: -90, position: 'insideLeft' }} />
      <Legend />
      <Tooltip />
    </LineChart>
  </div>
)