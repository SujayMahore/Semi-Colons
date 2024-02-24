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

const AreaChartTemplate = ({data,datakey,isOdd}) => {
    console.log(datakey)
  return (
    <>
        <div className="chart">
            <AreaChart
              width={isOdd ? 1200: 600}
              height={300}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                
              </defs>
              <XAxis dataKey="date" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey={datakey}
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Legend/>
              
            </AreaChart>
          </div>
    </>
  )
}

export default AreaChartTemplate