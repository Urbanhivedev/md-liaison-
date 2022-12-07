import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";


import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom'

const mystyle = {
  color: 'black',
  // color: '#FFFFFF',
  fontSize: '18px',
  fontWeight: '600',
  fontFamily: "Roboto",
  lineHeight: '30px'
};
const mystyle2 = {
  color: 'black',
  // color: '#FFFFFF',
  fontSize: '17px',
  fontWeight: '600',
  fontFamily: "Roboto",
  lineHeight: '25px'
};



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper
    backgroundColor: '#60A1EC'
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  nestedSecondLevel: {
    paddingLeft: theme.spacing(8)
  }
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const history = useHistory(); 
  const location = useLocation();
  const [openSecondLevel, setOpenSecondLevel] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickSecondLevel = () => {
    setOpenSecondLevel(!openSecondLevel);
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={() => history.push('/')} style={{backgroundColor: location.pathname === '/' && 'white'}}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        {/* <ListItemText primary="Sent mail" /> */}
        <ListItemText style={{border: '0px solid red'}} primary={<Typography type="body2" style={mystyle}>HOME</Typography>} />
      </ListItem>
      {/*<ListItem button onClick={() => history.push('/jobs')} style={{backgroundColor: location.pathname === '/jobs' && 'white'}}>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary={<Typography type="body2" style={mystyle}>JOBS</Typography>} />
  </ListItem>*/}
      {/* <ListItem button onClick={handleClick}> */}
      <ListItem button onClick={() => history.push('/jobs')} style={{backgroundColor: location.pathname === '/jobs' && 'white'}}>
        <ListItemIcon>
           <PeopleAltIcon />
        </ListItemIcon>
        <ListItemText primary={<Typography type="body2" style={mystyle}>JOBS</Typography>} />
        {open ? <ExpandLess onClick={handleClick} /> : <ExpandMore  onClick={handleClick}/>}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            className={classes.nested}
            // onClick={handleClickSecondLevel}
            onClick={() => history.push('/my-jobs')}
            style={{backgroundColor: location.pathname === '/my-jobs' && 'white'}}>
            <ListItemIcon>
              <WorkHistoryIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography type="body2" style={mystyle2}>MY JOBS</Typography>} />
            {/* {openSecondLevel ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem>
          {/* <Collapse in={openSecondLevel} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nestedSecondLevel}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="MIS Report" />
              </ListItem>
            </List>
          </Collapse> */}
        </List>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} 
          onClick={() => history.push('/applied-jobs')}
          style={{backgroundColor: location.pathname === '/applied-jobs' && 'white'}}>
            <ListItemIcon>
              <WorkOffIcon />
            </ListItemIcon>
            <ListItemText primary={<Typography type="body2" style={mystyle2}>APPLIED JOBS</Typography>} />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={<Typography type="body2" style={mystyle}>INBOX</Typography>} />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary={<Typography type="body2" style={mystyle}>SETTINGS</Typography>} />
      </ListItem>
    </List>
  );
}
