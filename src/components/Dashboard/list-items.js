import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SettingIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom'

const mystyle = {
  color: '#FFFFFF',
  fontSize: '20px',
  fontWeight: '600',
  // marginRight: '20px',
  // paddingLeft: "50px",
  // fontFamily: "Cabin",
  lineHeight: '35px'
};


export const mainListItems = (
  <>
    <div style={{color: 'wheat'}}>
    <NavLink exact to='/' activeClassName="activeNav"  style={{color: 'black', border: '0px solid red', width: '100%'}}>
   <center>
   <ListItemButton>
      <ListItemText primary={<Typography type="body2" style={mystyle}>HOME</Typography>} />
    </ListItemButton>
   </center>
    </NavLink>
      <br/>
    <NavLink to='/jobs' activeClassName="activeNav" style={{color: 'black', border: '0px solid red', width: '100%'}}>
    <center>
    <ListItemButton>
      <ListItemText primary={<Typography type="body2" style={mystyle}>JOBS</Typography>} />
    </ListItemButton>
    </center>
    </NavLink>
    <br/>
    <NavLink to='/view-job' activeClassName="activeNav" style={{color: 'black', border: '0px solid red', width: '100%'}}>
    <center>
    <ListItemButton >
      <ListItemText primary={<Typography type="body2" style={mystyle}>INBOX</Typography>} />
    </ListItemButton>
    </center>
    </NavLink>
    <br/>
    <NavLink to='/my-jobs' activeClassName="activeNav" style={{color: 'black', border: '0px solid red', width: '100%'}}>
    <center>
    <ListItemButton >
      <ListItemText primary={<Typography type="body2" style={mystyle}>MY JOBS</Typography>} />
    </ListItemButton>
    </center>
    </NavLink>
    <br/>
    <NavLink to='/applied-jobs' activeClassName="activeNav" style={{color: 'black', border: '0px solid red', width: '100%'}}>
    <center>
    <ListItemButton >
      <ListItemText primary={<Typography type="body2" style={mystyle}>APPLIED JOBS</Typography>} />
    </ListItemButton>
    </center>
    </NavLink>
    

    </div>
  </>
);
