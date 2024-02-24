import React, { useEffect, useState } from "react";
import "./ChartTemplate.css";
import LineChartCustom from "./LineChartCustom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
import AreaChartTemplate from "./AreaChartTemplate";

const ChartTemplate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataKeys, setDataKeys] = useState(["protein","SGOT"]);
  const [isOdd,setIsOdd] = useState(false);

  //Un Comment This For API CALL
  // const [data,setData]=useState([])
  // useEffect(()=>{
  //     const fetchData = async()=>{
  //         try{
  //             const response = await axios.get("Past API ENDPOINT HERE")

  //             setData(response.data)
  //              setIsLoading(false)

  //         }catch(error){
  //             console.error("ERROR fetching data",error)
  //              setIsLoading(false)
  //              setError(error)

  //         }
  //     }
  //     fetchData();
  // },[])

  //Comment below if api is called

  const data = [
    {
      reportId: 1,
      date: "2024-02-24",
      user: {
        id: 123,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        address: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCode: "12345",
        age: "56",
      },
      reportName: "Liver Function Test",
      bilirubin: 1.5,
      SGOT: 30.5,
      SGPT: 25.2,
      alkalinePhosphate: 80.3,
      protein: 7.2,
      globulin: 3.8,
      A_G_Ratio: 1.9,
      GGTP: 40.0,
    },
    {
      reportId: 2,
      date: "2024-02-24",
      user: {
        id: 124,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        address: "456 Oak St",
        city: "Othertown",
        state: "NY",
        zipCode: "54321",
        age: "56",
      },
      reportName: "Liver Function Test",
      bilirubin: 1.8,
      SGOT: 35.2,
      SGPT: 27.9,
      alkalinePhosphate: 85.6,
      protein: 7.5,
      globulin: 4.0,
      A_G_Ratio: 2.1,
      GGTP: 45.0,
    },
    {
      reportId: 2,
      date: "2024-02-24",
      user: {
        id: 124,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        address: "456 Oak St",
        city: "Othertown",
        state: "NY",
        zipCode: "54321",
        age: "56",
      },
      reportName: "Liver Function Test",
      bilirubin: 1.8,
      SGOT: 35.2,
      SGPT: 27.9,
      alkalinePhosphate: 85.6,
      protein: 7.5,
      globulin: 4.0,
      A_G_Ratio: 2.1,
      GGTP: 45.0,
    },
  ];

  const fields = Object.keys(data[0]).filter(
    (key) =>
      key !== "date" &&
      key !== "user" &&
      key !== "reportName" &&
      key !== "reportId"
  );
  const filteredData = data.map(({ user, reportName, ...rest }) => rest);
  const handleAddChart = () => {
    setDataKeys([...dataKeys, ""]);

  };
  useEffect(()=>{
    setIsOdd(dataKeys.length % 2 !== 0)


  },[dataKeys])
  const handleChange = (index, e) => {
    const updatedKeys = [...dataKeys];
    updatedKeys[index] = e.target.value;
    setDataKeys(updatedKeys);
  };

  return (
    <>
      {/* <Meter></Meter> */}
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error:{error.message}</p>
      ) : data.length === 0 ? (
        <p>No Data Available</p>
      ) : (
        <>
          <div className="user-info-container">
            <h2>Patient Information</h2>
            <div className="user-info">
              <div>
                <p>First Name:{data[0].user.firstName}</p>
                <p>Last Name:{data[0].user.lastName}</p>
                <p>Age :{data[0].user.age}</p>
                <p>Email:{data[0].user.email}</p>
              </div>
              <div>
                <p>Address:{data[0].user.address}</p>
                <p>City:{data[0].user.city}</p>
                <p>State:{data[0].user.state}</p>
                <p>Zip code:{data[0].user.zipCode}</p>
              </div>
            </div>
          </div>
          <div className="chart-container">
            {/* Apply container style */}
            

            <div className={isOdd ?"grid-odd-container"  : "grid-container"}>
              {/* {[...Array(chartCount)].map((_, idx) => (
                <div>
                  <AreaChartTemplate
                    data={data}
                    datakey={dataKeys[idx]}
                  ></AreaChartTemplate>
                  <div className="input-select">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Chart Data{idx}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={dataKeys[idx]}
                        label="Select Chart"
                        onChange={handleChange}
                      >
                        {fields.map((field) => (
                          <MenuItem key={field} value={field}>
                            {field}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              ))} */}
              {dataKeys.map((key, index) => (
                <div key={index}>
                  <AreaChartTemplate
                    data={data}
                    datakey={key}
                    isOdd={isOdd}
                  ></AreaChartTemplate>
                  <div className="input-select">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Chart {index + 1}
                      </InputLabel> 
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={key}
                        label="Select Chart"
                        onChange={(e)=> handleChange(index,e)}
                      >
                        {fields.map((field) => (
                          <MenuItem key={field} value={field}>
                            {field}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              ))}
            </div>
            <button  onClick={handleAddChart} className="add-chart-button">
              Add Chart
            </button>
          </div>
         
          <div
            className="table-container"
            style={{ width: "100%", marginTop: "10px", marginLeft: "40px" }}
          >
            <TableData data={data}></TableData>
          </div>
        </>
      )}
    </>
  );
};

export default ChartTemplate;
