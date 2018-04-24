import React from 'react'
import { LineChart, Line, CartesianGrid, Tooltip, YAxis, XAxis, Legend } from 'recharts'

export default props => (
  <div>
    <LineChart width={window.innerWidth-20} height={400} data={props.data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="File" stroke="orange" />
      <Line type="monotone" dataKey="Revenue" stroke="teal" />
      <XAxis dataKey="Day"  label={{ value: 'day', angle: 0, position: 'insideLeft' }} />
      <YAxis  label={{ value: 'percentage', angle: -90, position: 'insideLeft' }} />
      <Legend />
      <Tooltip />
    </LineChart>
  </div>
)