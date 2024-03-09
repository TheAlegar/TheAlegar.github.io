import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


export default function Notfound() {
    return (
      <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        height: '1000px',
      }}
    >
      <Grid container style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
          <Grid item>
          <div id="wrapper">
                <img src="https://i.imgur.com/qIufhof.png" alt=''/>
                <div id="info">
                    <h1>This page could not be found</h1>
                </div>
            </div >
          </Grid>
      </Grid>
      </Paper>
    );
  }