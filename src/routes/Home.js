import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import image from './cover.jpeg';
// MainFeaturedPost.propTypes = {
//     post: PropTypes.shape({
//       image: PropTypes.string.isRequired,
//       imageText: PropTypes.string.isRequired,
//       linkText: PropTypes.string.isRequired,
//     }).isRequired,
//   };

export default function Home() {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 1,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${image})`,
        height: '1100px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container justifyContent="flex-end" >
        <Grid item md={6}>
          <Box
            alignItems="center"
            sx={{
              position: 'relative',
              top: 100,
            //   p: { xs: 8,  sm: 10, md: 12, lg: 18 },
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h2" variant="h3" color="inherit" gutterBottom>
            I discovered my passion for sound engineering at a young age, starting when I was just fifteen, mixing high school plays.
            </Typography>
            <Typography component="h2" variant="h3" color="inherit" gutterBottom>
              Today, I am proud to be an international touring engineer, living my dream in the audio industry.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}