import React, { useEffect, useState } from "react";
import "./BarCharts.css";
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
import Meter from "./Meter";
import TableData from "./TableData";
import axios from "axios";

const BarCharts = () => {
    //Un Comment This For API CALL
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         try{
    //             const response = await axios.get("Past API ENDPOINT HERE")
    //             setData(response.data)

    //         }catch(error){
    //             console.error("ERROR fetching data",error)
    //         }
    //     }
    //     fetchData();
    // },[])

    //Comment below if api is called
  const data =[
    {
        "reportId": 1,
        "date": "11/06/2023",
        "hemoglobin": 15.34,
        "PackedCellVolume": 40.69,
        "RBCCount": 6.0,
        "MCV": 91.01,
        "MCH": 30.69,
        "MCHC": 33.05,
        "RDW": 34.99,
        "TLC": 31.82,
        "PlateletCount": 151.39,
        "MeanPlateletVolume": 11.83,
        "DLC_Neutrophils": 51.54,
        "DLC_Lymphocytes": 27.15,
        "DLC_Monocytes": 3.66,
        "DLC_Eosinophils": 4.07,
        "DLC_Basophils": 0.35
    },
    {
        "reportId": 2,
        "date": "04/10/2023",
        "hemoglobin": 16.65,
        "PackedCellVolume": 43.24,
        "RBCCount": 5.42,
        "MCV": 98.15,
        "MCH": 27.56,
        "MCHC": 31.71,
        "RDW": 34.41,
        "TLC": 31.49,
        "PlateletCount": 179.46,
        "MeanPlateletVolume": 6.89,
        "DLC_Neutrophils": 69.11,
        "DLC_Lymphocytes": 28.48,
        "DLC_Monocytes": 3.07,
        "DLC_Eosinophils": 4.75,
        "DLC_Basophils": 1.1
    },
    {
        "reportId": 3,
        "date": "13/09/2023",
        "hemoglobin": 15.13,
        "PackedCellVolume": 42.6,
        "RBCCount": 4.71,
        "MCV": 92.85,
        "MCH": 31.63,
        "MCHC": 32.16,
        "RDW": 33.29,
        "TLC": 31.99,
        "PlateletCount": 238.86,
        "MeanPlateletVolume": 9.8,
        "DLC_Neutrophils": 58.08,
        "DLC_Lymphocytes": 35.92,
        "DLC_Monocytes": 2.74,
        "DLC_Eosinophils": 1.62,
        "DLC_Basophils": 0.2
    },
    {
        "reportId": 4,
        "date": "02/11/2023",
        "hemoglobin": 13.06,
        "PackedCellVolume": 43.75,
        "RBCCount": 5.99,
        "MCV": 89.35,
        "MCH": 30.3,
        "MCHC": 33.12,
        "RDW": 32.81,
        "TLC": 33.86,
        "PlateletCount": 254.31,
        "MeanPlateletVolume": 8.99,
        "DLC_Neutrophils": 71.71,
        "DLC_Lymphocytes": 34.59,
        "DLC_Monocytes": 2.64,
        "DLC_Eosinophils": 1.21,
        "DLC_Basophils": 1.8
    },
    {
        "reportId": 5,
        "date": "06/02/2024",
        "hemoglobin": 15.35,
        "PackedCellVolume": 44.54,
        "RBCCount": 4.81,
        "MCV": 83.61,
        "MCH": 30.95,
        "MCHC": 31.89,
        "RDW": 34.79,
        "TLC": 34.23,
        "PlateletCount": 315.71,
        "MeanPlateletVolume": 9.64,
        "DLC_Neutrophils": 72.83,
        "DLC_Lymphocytes": 39.44,
        "DLC_Monocytes": 8.98,
        "DLC_Eosinophils": 4.34,
        "DLC_Basophils": 1.96
    },
    {
        "reportId": 6,
        "date": "21/02/2023",
        "hemoglobin": 15.16,
        "PackedCellVolume": 45.0,
        "RBCCount": 4.9,
        "MCV": 93.29,
        "MCH": 27.95,
        "MCHC": 31.35,
        "RDW": 31.78,
        "TLC": 34.67,
        "PlateletCount": 161.71,
        "MeanPlateletVolume": 8.92,
        "DLC_Neutrophils": 48.69,
        "DLC_Lymphocytes": 25.9,
        "DLC_Monocytes": 6.05,
        "DLC_Eosinophils": 3.64,
        "DLC_Basophils": 0.42
    },
    {
        "reportId": 7,
        "date": "28/01/2023",
        "hemoglobin": 13.78,
        "PackedCellVolume": 45.02,
        "RBCCount": 5.83,
        "MCV": 88.73,
        "MCH": 28.06,
        "MCHC": 32.06,
        "RDW": 31.97,
        "TLC": 33.34,
        "PlateletCount": 366.92,
        "MeanPlateletVolume": 10.26,
        "DLC_Neutrophils": 67.91,
        "DLC_Lymphocytes": 22.73,
        "DLC_Monocytes": 7.35,
        "DLC_Eosinophils": 5.78,
        "DLC_Basophils": 1.77
    },
    {
        "reportId": 8,
        "date": "09/07/2023",
        "hemoglobin": 15.11,
        "PackedCellVolume": 46.07,
        "RBCCount": 5.15,
        "MCV": 90.3,
        "MCH": 31.25,
        "MCHC": 31.37,
        "RDW": 33.14,
        "TLC": 34.49,
        "PlateletCount": 335.79,
        "MeanPlateletVolume": 10.03,
        "DLC_Neutrophils": 60.7,
        "DLC_Lymphocytes": 39.35,
        "DLC_Monocytes": 7.25,
        "DLC_Eosinophils": 1.71,
        "DLC_Basophils": 1.84
    },
    {
        "reportId": 9,
        "date": "21/08/2023",
        "hemoglobin": 16.37,
        "PackedCellVolume": 42.81,
        "RBCCount": 4.94,
        "MCV": 98.04,
        "MCH": 30.81,
        "MCHC": 33.81,
        "RDW": 33.14,
        "TLC": 31.7,
        "PlateletCount": 247.73,
        "MeanPlateletVolume": 8.84,
        "DLC_Neutrophils": 64.99,
        "DLC_Lymphocytes": 32.02,
        "DLC_Monocytes": 2.59,
        "DLC_Eosinophils": 5.27,
        "DLC_Basophils": 1.64
    },
    {
        "reportId": 10,
        "date": "25/09/2023",
        "hemoglobin": 15.33,
        "PackedCellVolume": 49.04,
        "RBCCount": 4.48,
        "MCV": 91.37,
        "MCH": 30.98,
        "MCHC": 34.15,
        "RDW": 34.26,
        "TLC": 32.67,
        "PlateletCount": 220.46,
        "MeanPlateletVolume": 11.83,
        "DLC_Neutrophils": 75.44,
        "DLC_Lymphocytes": 35.7,
        "DLC_Monocytes": 2.22,
        "DLC_Eosinophils": 1.66,
        "DLC_Basophils": 1.32
    }
]

  return (
    <>
      {/* <Meter></Meter> */}
      <div className="chart-container">
        {/* Apply container style */}
        <div className="grid-container">
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
              <Line type="monotone" dataKey="hemoglobin" stroke="#8884d8" />
            </LineChart>
          </div>
          <div className="chart">
            <AreaChart
              width={600}
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
                dataKey="RBCCount"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Legend/>
              
            </AreaChart>
          </div>
          <div className="chart">
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date"  />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line dataKey="PlateletCount" fill="#8884d8" />
            </LineChart>
          </div>
          <div className="chart">
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="PackedCellVolume" fill="#8884d8" />
            </LineChart>
          </div>
        </div>



      </div>
      <TableData data={data}></TableData>

    </>
  );
};

export default BarCharts;
