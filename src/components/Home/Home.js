import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

import selfie from '../pictures/red_shirt_selfie.png'


import './Home.css';

//    border: 1px solid black;

export default function Home() {
  
  return (
    <div>
      <div className="Header">
        <Grid className="Row" container spacing={3}>
          <Grid item xs={12} className="gridBox">
            <Typography variant="h3">Tyler Kirkpatrick</Typography>
            <br />
            <Typography variant="p">Doftware Developer. Runner. Computer Science & MBA Graduate.</Typography>
          </Grid>
        </Grid>

        <Grid className="Row" container spacing={3}>
          <Grid item xs={4}>
            <Button variant="outlined" color="primary">Resume</Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" color="default">Github</Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="outlined" color="primary">LinkedIn</Button>
          </Grid>
        </Grid>
          
        
      </div>
      
      <div className="Body">
        <Typography variant="h3">Career</Typography>
        <br />
        <Grid className="Row" container spacing={3}>
          <Grid item xs={3}>
            <SchoolIcon fontSize="large" />
            <br />
            <Typography variant="p" className="title">Bachelor's Degree in Computer Science</Typography>
            <br />
            <Typography variant="p">Southern Methodist University</Typography>
            
            <Typography variant="subtitle2">Dallas, TX</Typography>
            <Typography variant="subtitle2">August 2013 - May 2017</Typography>
            <br />
          </Grid>
          <Grid item xs={3}>
            <WorkIcon fontSize="large" />
            <br />
            <Typography variant="p" className="title">Software Developer Intern</Typography>
            <br />
            <Typography variant="p">Anderson Merchandisers</Typography>
            <br />
            <Typography variant="subtitle2">Plano, TX</Typography>
            <Typography variant="subtitle2">August 2017 - September 2017</Typography>
            <br />

          </Grid>
          <Grid item xs={3}>
            <WorkIcon fontSize="large" />
            <br />
            <Typography variant="p" className="title">Software Developer III</Typography>
            <br />
            <Typography variant="p">Walmart</Typography>
            <br />
            <Typography variant="subtitle2">Bentonville, AR</Typography>
            <Typography variant="subtitle2">November 2017 - July 2020</Typography>
            <br />
          </Grid>
          <Grid item xs={3}>
            <SchoolIcon fontSize="large" />
            <br />
            <Typography variant="p" className="title">Masters in Business Administration</Typography>
            <br />
            <Typography variant="p">Texas A&M Mays Business School</Typography>
            <br />
            <Typography variant="subtitle2">College Station, TX</Typography>
            <Typography variant="subtitle2">July 2020 - December 2021</Typography>
            <br />
            
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
