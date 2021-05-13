import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './Home.css';

export default function Home() {
  
  return (
    <div>
      <div className="Header">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            Hello, my name is Tyler Kirkpatrick
          </Grid>
        </Grid>
      </div>
      <div className="Body">
        <h2>Links</h2>
        <Grid className="Row" container spacing={3}>
          <Grid item xs={4}>
            <Paper className="Test">Resume</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="Test">Github</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="Test">LinkedIn</Paper>
          </Grid>
        </Grid>

        <h2>Strengths</h2>
        <Grid className="Row" container spacing={3}>
          <Grid item xs={4}>
            <Paper className="Test">One</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="Test">Two</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="Test">Three</Paper>
          </Grid>
        </Grid>

        <h2>Projects</h2>
        <Grid className="Row" container spacing={3}>
          <Grid item xs={4}>
            <Paper className="Test">One</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="Test">Two</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="Test">Three</Paper>
          </Grid>
        </Grid>

        <h2>Books</h2>
        <Grid className="Row" container spacing={3}>
          <Grid item xs={4}>
            <Paper className="Test">Born to Run</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="Test">The Organized Mind</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className="Test">Unbroken</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
