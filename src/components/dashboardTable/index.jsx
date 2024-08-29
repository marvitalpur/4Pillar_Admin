import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import User from "../../assets/images/profile.png"

function createData(name, calories, fat, carbs, protein, email) {
  return { name, calories, fat, carbs, protein, email };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 'test@gmail.com'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'test@gmail.com'),
  createData('Eclair', 262, 16.0, 24, 6.0, 'test@gmail.com'),
  createData('Cupcake', 305, 3.7, 67, 4.3, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'test@gmail.com'),
];

export default function DashboardTable({title}) {
  return (
    <TableContainer component={Paper} style={{marginTop: "50px", height: "40vh", marginLeft: "50px", width: "45vw", padding: "0px 30px"}}>
        <h1 style={{color: "#000", fontSize: "2.0rem", fontWeight: "bold", margin: "30px 10px"}}> {title} </h1>
        <hr />
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize: "1.2rem", fontWeight: 600}} >User</TableCell>
            <TableCell sx={{fontSize: "1.2rem", fontWeight: 600}}  align="right"> Time</TableCell>
            <TableCell sx={{fontSize: "1.2rem", fontWeight: 600}}  align="right"> Date</TableCell>
            <TableCell sx={{fontSize: "1.2rem", fontWeight: 600}}  align="right">Total Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{'&:last-child td, &:last-child th': { border: 0 },  }}
            >
              <TableCell component="th" scope="row" sx={{fontSize: "1.1rem", display: "flex"}}>
              <img
              style={{marginRight: "10px"}}
            src={User}
            className="trader-profile-navbar_right_user-wrapper_image"
            alt="profile_pic"
          />
          <span sx={{flexDirection: "column", marginLeft: '5px'}}> 
                {row.name} <br />
                <span sx={{color: "#bfbfbf"}}>
                {row.email}
                </span>
                </span>

              </TableCell>
              <TableCell sx={{fontSize: "1.1rem"}}  align="right">{row.calories}</TableCell>
              <TableCell sx={{fontSize: "1.1rem"}}  align="right">{row.fat}</TableCell>
              <TableCell sx={{fontSize: "1.1rem"}}  align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
