import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import {
  Box,
  Grid,
  TextField,
  Paper,
  Button,
  Typography,
  ButtonBase,
} from "@mui/material";
import Layout from "../components/Layout/layout";
import { useHistory } from "react-router-dom";
import RectangleIMG from "../assets/images/Rectangle.png";
import hardcode1 from "../assets/images/mdliaison3.png";
import hardcode2 from "../assets/images/mdliaison3.png";
import hardcode3 from "../assets/images/mdliaison3.png";
import hardcode4 from "../assets/images/mdliaison3.png";
import hardcode5 from "../assets/images/mdliaison3.png";

import PopupModal from "../components/Layout/modal";

export default function MyJobs() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const causePopUp = () => {
     setOpen(true)
    console.log(open)
  }

  const mystyle = {
    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: 200,
    fontSize: "18px",
    lineHeight: "30px",
    color: "black",
  };

  const myJobsArr = [
    {id: 1, title: 'MERN STACK',company:"Intuitive",location:"HOUSTON, TX",logo:hardcode1,},
    {id: 2, title: 'MERN STACK',company:"CVS",location:"HOUSTON, TX",logo:hardcode2,},
    {id: 3, title: 'MERN STACK',company:"Uptown Memorial",location:"HOUSTON, TX",logo:hardcode3,},
    {id: 3, title: 'MERN STACK',company:"Blue Cross",location:"HOUSTON, TX",logo:hardcode4,},
    {id: 3, title: 'MERN STACK',company:"Kings Cross",location:"HOUSTON, TX",logo:hardcode5,},
  ];

 

  return (
    <Layout title={"MY JOBS"}>
      <PopupModal open={open} setOpen={setOpen} />
      <Container
        maxWidth="lg"
        sx={{ mt: 4, mb: 4 }}
        style={{ border: "0px solid red" }}
      >
        <Grid container spacing={2}>
          {myJobsArr.map(job => {
            return (
                <Grid item xs={12} md={8} lg={4}>
            <Paper
              sx={{
                border: "1px solid black",
                p: 1,
                display: "flex",
                flexDirection: "column",
                // height: 240,
              }}
            >
              <Grid container spacing={1}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 178, pb: 8 }}>
                    <img alt="Job-Logo" src={job.logo} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <br />
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                        style={mystyle}
                      >
                        {job.company}
                      </Typography>
                      <Typography variant="body2" gutterBottom style={mystyle}>
                        {job.location}
                      </Typography>
                      <hr />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={mystyle}
                      >
                        <b>
                          ACTIVE <span style={{ color: "green" }}>•</span>
                          
                        </b>
                      </Typography>
                    </Grid>
                    <hr />
                    <Grid item>
                      <Button
                        type="submit"
                        // fullWidth
                        variant="contained"
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          width: "70%",
                          fontSize: "15px",
                        }}
                        onClick={()=>{setOpen(true)}}
                      >
                        CLOCK IN
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        );
          })}


        </Grid>
      </Container>
    </Layout>
  );
}
