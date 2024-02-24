import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const TableData = ({ data }) => {
    const fields = Object.keys(data[0]).filter(key=>key!=="date" && key!== "reportId" )
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            {data.map((element) => 
                            <TableCell key={element.reportId} align="right">{element.date}</TableCell>


            )}
           
          </TableRow>
        </TableHead>
        <TableBody>
            
             {
                fields.map((field)=>(
                    
                    <TableRow>
                       <TableCell component="th" style={{fontWeight:"bold", padding:"4px"}}>{field}</TableCell>
                       {data.map((element)=>(
                        <TableCell align="center">{element[field]}</TableCell>
                       ))}
                    </TableRow>
                ))
             }
            
          
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
