import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';

const makeStyles=(status)=>{
    if (status === 'Approved'){
        return {backgroundColor: '#C2EDCA', color:'#43a047'};  //Green
    } else if(status === "Pending"){
        return {color:"red",
    backgroundColor: "#ffcdd2"};                     //Red
    }else{
        return {color: "white", backgroundColor: '#4BAFBF'};
    }
}

function createData(name, trackingId, date, status, detail) {
  return { name, trackingId, date, status, detail};
}

const rows = [
    createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved", "Good"),
    createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending", "Average"),
    createData("Mouth Freshner", 18908424, "2 March 2022", "Approved", "Excellent"),
    createData("Cupcake", 18908421, "2 March 2022", "Delivered", "Average"),
];

export default function BasicTable() {
  return (
    <div className="Table">
        <h3>Recent Orders</h3>
    <TableContainer component={Paper}
    style={{
        boxShadow:'0px 13px 20px 0px #80808029',
        background: 'linear-gradient(109.6deg, rgb(255, 230, 109, 0.3) 11.2%, rgb(87, 232, 107, 0.1) 80.2%)',
        
    }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Tracking Id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className="status" style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className="Details">{row.detail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}