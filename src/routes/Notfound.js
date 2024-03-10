import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


export default function Notfound() {
    return (
      <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        // height: '1000px',
      }}
    >
      <Grid container style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
        <Grid item>
          <div id="info">
          <Typography variant="h2"  align="center" gutterBottom>
              This page could not be found
            </Typography>
          </div>
          <div id="wrapper">
                <img src="https://i.imgur.com/qIufhof.png" alt=''/>
            </div >
          </Grid>
      </Grid>
      </Paper>
    );
  }