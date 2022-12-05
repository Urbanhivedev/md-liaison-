import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './title';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


function preventDefault(event) {
  event.preventDefault();
}

export default function HomeBox({type, BoxIcon}) {

  return (
    <React.Fragment>
      {/* <Title>...........................<span className='wave'>💸</span></Title> */}
      <Divider />
      <br/><br/>
      <Link color="primary" to="/jobs" >
      <center>
      <BoxIcon />
      <br/><br/>
        <Typography
            color="textPrimary"
            variant="h6"
            component="p"
          >
           
        <b>{type}</b>
        
      </Typography></center>
      </Link>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
      </Typography>
     {/* <div>
        <Link color="primary" to="/transactions" onClick={preventDefault}>
          View
        </Link>
      </div>*/}
    </React.Fragment>
  );
}