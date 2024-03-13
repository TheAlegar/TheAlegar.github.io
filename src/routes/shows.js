// import * as React from 'react';
import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const importAll = (r) => {
    return r.keys().map(r);
}

const shows = importAll(require.context('./images/shows', false, /\.(png|jpe?g|svg)$/));

const festivals = importAll(require.context('./images/festivals', false, /\.(png|jpe?g|svg)$/));

export default function Shows() {

  const useStyles = makeStyles({
    root: {
      // maxWidth: 310,
      transition: "transform 0.15s ease-in-out",
      "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
  });


  // const titleFormat = (title) =>{
  //   const url = title.split('/static/media/');
  //   return url[1].split('.')[0];
  // }

  const handleShowsClose = () =>{
    setShowsOpen(false);
  }
  const handleFestivalClose = () =>{
    setFestivalOpen(false);
  }
  const handleShowsOpen = (index) =>{
    setShowsOpen(true);
    setIndex(index)
  }
  const handlefestivalOpen = (index) =>{
    setFestivalOpen(true);
    setIndex(index)
  }
  // const [mode, setMode] = useState('');
  const [showsOpen, setShowsOpen] = useState(false);
  const [festivalOpen, setFestivalOpen] = useState(false);
  const [test, setIndex] = useState(0);
  const classes = useStyles();
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
    <Grid container  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Grid item >
            <Typography variant="h2" align="center" >
              SHOWS
            </Typography>
            <ImageList   cols={6}>
            {shows.map((item, index) => (
              <>
                <ImageListItem key={item}>
                  <img 
                      src={`${item}`}
                      loading="lazy"
                      alt=''
                      className={classes.root} 
                      onClick={() => (handleShowsOpen(index))}
                  />
                  {/* {mode === item && 
                  <ImageListItemBar
                    key={item}
                    title={titleFormat(item)}
                  />} */}
                </ImageListItem>
                {showsOpen  && 
                  <Lightbox
                  mainSrc={shows[test]}
                  nextSrc={shows[(test + 1) % shows.length]}
                  prevSrc={shows[(test + shows.length - 1) % shows.length]}
                  onCloseRequest={handleShowsClose}
                  onMoveNextRequest={() => setIndex((test + 1) % shows.length)}
                  onMovePrevRequest={() => setIndex((test + shows.length - 1) % shows.length)}
                  />
                }
                </>
            ))}
            </ImageList>
        </Grid>
        <Grid item>
            <Typography variant="h2" align="center"> 
              FESTIVALS
            </Typography>
            <ImageList  cols={6}>
            {festivals.map((item,index) => (
               <>
                <ImageListItem key={item}>
                <img
                    srcSet={`${item}`}
                    src={`${item}`}
                    loading="lazy"
                    alt=''
                    className={classes.root} 
                    onClick={() => (handlefestivalOpen(index))}
                /> 
                {/* {mode === item && 
                 <ImageListItemBar
                  key={item}
                  title={titleFormat(item)}
                />} */}
                </ImageListItem>
                {festivalOpen  && 
                  <Lightbox
                  mainSrc={festivals[test]}
                  nextSrc={festivals[(test + 1) % festivals.length]}
                  prevSrc={festivals[(test + festivals.length - 1) % festivals.length]}
                  onCloseRequest={handleFestivalClose}
                  onMoveNextRequest={() => setIndex((test + 1) % festivals.length)}
                  onMovePrevRequest={() => setIndex((test + festivals.length - 1) % festivals.length)}
                  />
                }
                </>
            ))}
            </ImageList>
        </Grid>
        {/* <Dialog
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
        </Dialog> */}
    </Grid>
    </Paper>
  );
}