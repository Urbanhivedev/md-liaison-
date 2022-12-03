import React, { useEffect, useState } from "react";

import Container from '@mui/material/Container';
import {Box, Grid, TextField, Paper, Button, Typography, ButtonBase} from '@mui/material';
import Layout from "../components/Layout/layout";
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink, useHistory,useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import JobLogo from '../assets/images/flutter-thumbnail.png';

/*REDUX AND FIREBASE IMPORTS */
import { useDispatch, useSelector } from 'react-redux';
import { fetchJob } from '../redux/actions/jobs.action';
import { fetchAllJobs } from '../redux/actions/jobs.action';
import { applyToJob } from '../redux/actions/jobs.action';
/*REDUX AND FIREBASE IMPORTS END */


const theme = createTheme();

export default function ViewJob() {
    const dispatch = useDispatch();
    const history = useHistory();
    const  {id } = useParams();
    console.log(id) 
    const [job,setJob] = useState();
    const [candidateId,setCandidateId] = useState();
    const [jobId,setJobId] = useState();
    const [applicant,setApplicant] = useState();
    const [jobDetails,setJobDetails] = useState();

    /*just makeshift loading boards */
    const [localLoading,setLocalLoading] = useState(false);
    const [localApplied,setLocalApplied] = useState(false);
     /*just makeshift loading boards END */

   /*const { singleJob, error,message, isLoading } = useSelector((state) => state.singleJob);*/
    const { allJobs, jobsError,jobsMessage, jobsIsLoading } = useSelector((state) => state.jobs);
    const { userDetails, loginError,loginMessage, loginIsLoading } = useSelector((state) => state.loggedIn);
    const { applyStatus, applyError,applyMessage, applyIsLoading } = useSelector((state) => state.apply);
    useEffect(() => {
      dispatch(fetchAllJobs());
      
      const singleJob = allJobs.filter((job)=>(job.id === id))
      console.log(singleJob)
      

      setJob(...singleJob)

      setCandidateId(userDetails.id)
      setApplicant({name:userDetails.name})
      setJobDetails({title:singleJob[0].title,jobNumber:singleJob[0].jobNumber})
      setJobId(id)
      
       
       
    }, [])

    const applyToRole= () => {
      dispatch(applyToJob(jobId,candidateId,applicant,jobDetails))
     console.log("hello")

     setLocalLoading(true);
    
     setTimeout(() => {
      setLocalLoading(false);
      setLocalApplied(true);
  }, 2000);
    }

    const myHeader = {
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '37px',
      lineHeight: '30px',
      color: 'black',
      marginLeft: '50px',
      marginTop: '10px'
    };
    const mystyle = {
      fontFamily: 'Arial',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '22px',
      color: 'black',
      marginTop: '5px'
    };

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });


  return (
      <Layout>

          

         <Container maxWidth="lg" sx={{ mt: 3, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
          <Paper
            sx={{
                border: '1px solid black',
                p: 1,
                margin: 'auto',
                // maxWidth: 2000,
                minWidth: 600,
                flexGrow: 1,
               
                 }}
             >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 148, height: 148 }}>
            <img alt="Job-Logo" src={JobLogo} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <br/><br/>
            <Grid item xs>
              <p style={myHeader}>
                 {job && job.company}
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Grid>              
         <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            >
                <br/>
          <p style={mystyle}>
          {job && job.location}
          </p>
          <p style={mystyle}>
          {job && job.rate}
          </p>
        </Grid>     
             <Grid item xs={12} md={6} lg={3}>
                <br/><br/>
             <Button
              type="submit"
              // fullWidth
              variant="contained"
              style={{backgroundColor: 'black', color: 'white', width: '70%',  fontSize:"15px"}}
              // sx={{ mt: 7, mb: 2 }}
              onClick={() => {history.push('/view-job');}}
            >
              PHARMACY
            </Button>
            </Grid>
             <Grid item xs={12} md={8} lg={8}>
             <br/><br/>
                <p>{job && job.description}
                </p>
            </Grid>

            
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
                <br/><br/>
             <Button
              type="submit"
              // fullWidth
              variant="contained"
              style={{backgroundColor: 'black', color: 'white', width: '40%',  fontSize:'15px',position:'relative', left:'30%'}}
               sx={{ mt: 7, mb: 2 }}
               
              onClick={applyToRole}
            >
              APPLY
            </Button>
          </Grid>
        </Container>
        {localLoading  && <div style={{display:"flex",justifyContent:"center"}}> <center style={{width:'30%',fontSize:"24px"}}>loading... </center></div>}
        {localApplied  && <div style={{display:"flex",justifyContent:"center"}}> <center style={{backgroundColor:'#D9E7E2',width:'30%',fontSize:"24px"}}>Applied Successfully! </center></div>}
      </Layout>
  );
}
