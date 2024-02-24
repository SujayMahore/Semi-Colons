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
    const fields = Object.keys(data[0]).filter(key=>key!=="date" )
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
            <TableRow>
                <TableCell className="heading">Hemoglobin</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.hemoglobin}</TableCell>
                ))}
            </TableRow>
            <TableRow >
                <TableCell className="heading">Packed Cell Volume</TableCell>
                {data.map((element)=>(
                    <TableCell  key={element.reportId} align="center">{element.PackedCellVolume}</TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="heading">RBC Count</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.RBCCount}</TableCell>
                ))}
            </TableRow>
          
            <TableRow>
                <TableCell className="heading">MCV</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.MCV}</TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="heading">MCH</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.MCH}</TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="heading">MCHC</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.MCHC}</TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="heading">RDW</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.RDW}</TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="heading">TLC</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.TLC}</TableCell>
                    
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="heading">PlateletCount</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.PlateletCount}</TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="heading">MeanPlateletVolume</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.MeanPlateletVolume}</TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="heading">DLC_Neutrophils</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.DLC_Neutrophils}</TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="heading">DLC_Lymphocytes</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.DLC_Lymphocytes}</TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="heading">DLC_Monocytes</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.DLC_Monocytes}</TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="heading">DLC_Eosinophils</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.DLC_Eosinophils}</TableCell>
                ))}
            </TableRow>
            <TableRow>
                <TableCell className="heading">DLC_Basophils</TableCell>
                {data.map((element)=>(
                    <TableCell key={element.reportId} align="center">{element.DLC_Basophils}</TableCell>
                ))}
            </TableRow>
            
             {/* {
                data.map((element)=>(
                    <TableRow key={element.reportId}>
                        {fields.map((field)=>(
                            <TableCell>{field}</TableCell>
                        ))}
                    </TableRow>
                ))
             } */}
             {
                
             }
            
          
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
