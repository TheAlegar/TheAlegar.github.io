import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          <IconButton href="https://www.instagram.com/jonthephenomenon/">
            <InstagramIcon/>
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/jonmleblanc/">
            <LinkedInIcon/>
          </IconButton>
          <IconButton href="https://twitter.com/Jon_ThePhenom">
            <TwitterIcon/>
          </IconButton>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="">
            Phenom Productions LLC
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}
