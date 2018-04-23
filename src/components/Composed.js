import React from 'react'
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, Line } from 'recharts'
export default props => (
  <div>
    <ComposedChart width={730} height={250} data={props.data}>
      <XAxis />
      <YAxis dataKey="Revenue" />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#f5f5f5" />
      <Area type="monotone" dataKey="Revenue" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="Revenue" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="Revenue" stroke="#ff7300" />
    </ComposedChart>
  </div>
)