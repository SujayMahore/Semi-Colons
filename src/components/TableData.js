import React from "react";
import "./TableData.css"
 
const TableData = ({ data }) => {
  const fields = Object.keys(data[0]).filter(key => key !== "date" && key !== "user" && key !== "reportName");
  const filteredData = data.map(({user,reportName,...rest}) => rest)
 
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            {filteredData.map((element) => (
                <th key={element.reportId}> {element.date}</th>

            ))}
          </tr>
        </thead>
        <tbody>
          {fields.map((field) => (
            <tr  key={field}>
              <td className="heading">{field}</td>
              {filteredData.map((element) => (
                <td key={`${field}`}>
                  {element[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default TableData;
