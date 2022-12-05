import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SettingIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom'
import { textAlign } from '@mui/system';

const mystyle = {
  color: '#FFFFFF',
  fontSize: '20px',
  fontWeight: '600',
  // marginRight: '20px',
  // paddingLeft: "50px",
  // fontFamily: "Cabin",
  lineHeight: '35px'
};

const substyle = {
  color: '#FFFFFF',
  fontSize: '15px',
  fontWeight: '500',
  // marginRight: '20px',
  // paddingLeft: "50px",
  // fontFamily: "Cabin",
  lineHeight: '35px',
  textAlign:'left',
};


export const mainListItems = (
  <>
    <div style={{color: 'wheat'}}>
    <NavLink exact to='/' activeClassName="activeNav"  style={{color: 'black', border: '0px solid red', width: '100%'}}>
   <center style={{position:"relative",left:"-8%"}}>
   <ListItemButton>
      <ListItemText primary={<Typography type="body2" style={mystyle}>HOME</Typography>} />
    </ListItemButton>
   </center>
    </NavLink>
      <br/>
    <NavLink to='/jobs' activeClassName="activeNav" style={{color: 'black', border: '0px solid red', width: '100%'}}>
    <center style={{position:"relative",left:"-8%"}}>
    <ListItemButton>
      <ListItemText primary={<Typography type="body2" style={mystyle}>JOBS</Typography>} />
    </ListItemButton>
    </center>
    </NavLink>
    <br/>

    <div style={{position:"relative",left:"15%"}}>
    <NavLink to='/my-jobs' activeClassName="activeNav" style={{color: 'black', border: '0px solid red', width: '100%'}}>
    <center style={{position:"relative",left:"-8%"}}>
    <ListItemButton >
      <ListItemText primary={<Typography type="body2" style={substyle}>MY JOBS</Typography>} />
    </ListItemButton>
    </center>
    </NavLink>
    <br/>
    <NavLink to='/applied-jobs' activeClassName="activeNav" style={{color: 'black', border: '0px solid red', width: '100%'}}>
    <center style={{position:"relative",left:"0%"}}>
    <ListItemButton >
      <ListItemText primary={<Typography type="body2" style={substyle}>APPLIED JOBS</Typography>} />
    </ListItemButton>
    </center>
    </NavLink>
   </div>


    {/*<NavLink to='#' activeClassName="activeNav" >*/}
    <center style={{color: 'black', border: '0px solid red', width: '100%', position:"relative",left:"-8%"}}>
    <ListItemButton >
      <ListItemText primary={<Typography type="body2" style={mystyle}>INBOX</Typography>} />
    </ListItemButton>
    </center>
    {/*</NavLink>*/}
    


     {/*<NavLink to='#' activeClassName="activeNav" >*/}
     <center style={{color: 'black', border: '0px solid red', width: '100%'}}>
    <ListItemButton >
      <ListItemText primary={<Typography type="body2" style={mystyle}>SETTINGS</Typography>} />
    </ListItemButton>
    </center>
    {/*</NavLink>*/}
    <br/>
    
    

    </div>
  </>
);
