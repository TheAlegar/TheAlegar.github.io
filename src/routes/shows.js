// import * as React from 'react';
import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { makeStyles } from '@material-ui/styles';

const importAll = (r) => {
    return r.keys().map(r);
}

const shows = importAll(require.context('./images/shows', false, /\.(png|jpe?g|svg)$/));

const festivals = importAll(require.context('./images/festivals', false, /\.(png|jpe?g|svg)$/));

export default function Shows() {

  const useStyles = makeStyles({
    root: {
      maxWidth: 310,
      transition: "transform 0.15s ease-in-out",
      "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
  });


  // const titleFormat = (title) =>{
  //   const url = title.split('/static/media/');
  //   return url[1].split('.')[0];
  // }

  const handleClose = () =>{
    setMode('')
  }
  const [mode, setMode] = useState('');
  const classes = useStyles();
  return (
    <Paper
    sx={{
      position: 'relative',
      backgroundColor: 'grey.800',
      color: '#fff',
      mb: 1,
      // height: '1000px',
    }}
  >
    <Grid container>
        <Grid item >
            <Typography variant="h2" gutterBottom>
              SHOWS
            </Typography>
            <ImageList sx={{ width: 1000, height: 1000 }} cols={3} rowHeight={300}>
            {shows.map((item) => (
                <ImageListItem key={item}>
                <img 
                    srcSet={`${item}`}
                    src={`${item}`}
                    loading="lazy"
                    alt=''
                    className={classes.root} 
                    onClick={() => (setMode(item))}
                /> 
                {/* {mode === item && 
                 <ImageListItemBar
                  key={item}
                  title={titleFormat(item)}
                />} */}
                </ImageListItem>
            ))}
            </ImageList>
        </Grid>
        <Grid item>
            <Typography variant="h2" gutterBottom>
              FESTIVALS
            </Typography>
            <ImageList sx={{ width: 1000, height: 1000 }} cols={3} rowHeight={300}>
            {festivals.map((item) => (
                <ImageListItem key={item}>
                <img
                    srcSet={`${item}`}
                    src={`${item}`}
                    loading="lazy"
                    alt=''
                    className={classes.root} 
                    onClick={() => (setMode(item))}
                /> 
                {/* {mode === item && 
                 <ImageListItemBar
                  key={item}
                  title={titleFormat(item)}
                />} */}
                </ImageListItem>
            ))}
            </ImageList>
        </Grid>
        <Dialog
          open={mode !== ''}
          onClose={handleClose}
          hasCloseButton
          style={{ maxWidth: "200%", maxHeight: "200%" }}
        >
          <img
            // style={{ maxWidth: "100%", maxHeight: "calc(100vh - 64px)" }}
            src={`${mode}`}
            alt=""
          />
        </Dialog>
    </Grid>
    </Paper>
  );
}