import React, {useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import User from "../../assets/images/profile.png";

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

export default function TableComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const menuHandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <TableContainer component={Paper} style={{marginTop: "50px", height: "75vh", marginLeft: "50px", width: "auto", padding: "0px 30px"}}>
      <div className='headerTop'>
      <h1> Registered Users </h1>
      <button
        className='addUserBtn'
      >
        Add User
      </button>
      <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={menuHandleClick}
        className='menuBtn'
      >
        All
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>All</MenuItem>
        <MenuItem onClick={handleClose}>Parents</MenuItem>
        <MenuItem onClick={handleClose}>Child</MenuItem>
      </Menu>
    </div>
      <input type="text" placeholder='Search Users' />
      </div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize: "1.5rem", fontWeight: 600}} >User</TableCell>
            <TableCell sx={{fontSize: "1.5rem", fontWeight: 600}}  align="right">User ID</TableCell>
            <TableCell sx={{fontSize: "1.5rem", fontWeight: 600}}  align="right">Type</TableCell>
            <TableCell sx={{fontSize: "1.5rem", fontWeight: 600}}  align="right">Register Time</TableCell>
            <TableCell sx={{fontSize: "1.5rem", fontWeight: 600}}  align="right">Register Date</TableCell>
            <TableCell sx={{fontSize: "1.5rem", fontWeight: 600}}  align="right">Total Points</TableCell>
            <TableCell sx={{fontSize: "1.5rem", fontWeight: 600}}  align="right">Action</TableCell>
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
              <TableCell sx={{fontSize: "1.1rem"}}  align="right">{row.protein}</TableCell>
              <TableCell sx={{fontSize: "1.1rem"}}  align="right">{row.protein}</TableCell>
              <TableCell sx={{fontSize: "1.1rem"}}  align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
