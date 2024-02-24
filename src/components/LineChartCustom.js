import React from 'react'
import {
    BarChart,
    AreaChart,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceLine,
    LineChart,
    Line,
  } from "recharts";

const LineChartCustom = ({data,datakey}) => {
  return (
    <>
        <div className="chart">
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={datakey} stroke="#8884d8" />
            </LineChart>
          </div>
    </>
  )
}

export default LineChartCustom