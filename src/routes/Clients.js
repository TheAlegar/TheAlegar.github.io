// import * as React from 'react';
import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Paper from '@mui/material/Paper';
// import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles({
//   root: {
//     // maxWidth: 310,
//     transition: "transform 0.15s ease-in-out",
//     "&:hover": { transform: "scale3d(1.05, 1.05, 1)", },
//   },
//   active: {
//     transition: "transform 0.15s ease-in-out",
//     transform: "scale3d(1.05, 1, 1)",
//   },
// });


const importAll = (r) => {
    return r.keys().map(r);
}

const clients = importAll(require.context('./images/clients', false, /\.(png|jpe?g|svg)$/));

export default function Clients() {
  // const classes = useStyles();

  const titleFormat = (title) =>{
    const url = title.split('/static/media/');
    return url[1].split('-')[0];
  }
  const [mode, setMode] = useState('');
  return (
    <Paper
    sx={{
      position: 'relative',
      backgroundColor: 'grey.800',
      color: '#fff',
      // mb: 1,
      // height: '1000px',
    }}
  >
    <Grid container style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
        <Grid item>
            <ImageList  cols={5} rowHeight={800}>
            {clients.map((item) => (
                <ImageListItem key={item}  >
                <img
                    srcSet={`${item}`}
                    src={`${item}`}
                    loading="lazy"
                    alt=''
                    onMouseOver={() => (setMode(item))}
                    onMouseLeave={() => (setMode(''))}
                /> 
                {mode === item && 
                 <ImageListItemBar
                  key={item}
                  align="center"
                  title={titleFormat(item)}
                />}
                </ImageListItem>
            ))}
            </ImageList>
        </Grid>
    </Grid>
    </Paper>
  );
}