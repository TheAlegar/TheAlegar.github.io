import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import Paper from '@mui/material/Paper';

const importAll = (r) => {
    return r.keys().map(r);
}

const clients = importAll(require.context('./images/clients', false, /\.(png|jpe?g|svg)$/));

export default function Clients() {
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
            <ImageList sx={{ width: 1000, height: 1000 }} cols={5} rowHeight={300}>
            {clients.map((item) => (
                <ImageListItem key={item}>
                <img
                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                    loading="lazy"
                    alt=''
                />
                </ImageListItem>
            ))}
            </ImageList>
        </Grid>
    </Grid>
    </Paper>
  );
}