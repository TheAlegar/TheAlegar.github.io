import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {  ThemeProvider, createTheme, alpha, getContrastRatio } from '@mui/material/styles';



const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);

const theme = createTheme({
  palette: {
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});


export default function Navbar() {
    const [workanchorEl, setWorkAnchorEl] = React.useState(null);
    const [moreanchorEl, setMoreAnchorEl] = React.useState(null);

    const handleWorkClick = (event) => {
        setWorkAnchorEl(event.currentTarget);
    };
  
    const handleWorkClose = () => {
        setWorkAnchorEl(null);
    };

    const handleMoreClick = (event) => {
        setMoreAnchorEl(event.currentTarget);
      };
    
      const handleMoreClose = () => {
        setMoreAnchorEl(null);
      };

      
    return(
        <ThemeProvider theme={theme}>
        <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: 'violet.dark', borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            LOGO
        </Typography>
        <nav>
            <Link
            variant="button"
            color="inherit"
            href="/"
            sx={{ my: 1, mx: 1.5 }}
            >
            Home
            </Link>
            <Link
            variant="button"
            color="inherit"
            href="/about"
            sx={{ my: 1, mx: 1.5 }}
            >
            About
            </Link>

            <Link
            aria-controls="works-menu"
            aria-haspopup="true" onClick={handleWorkClick}
            variant="button"
            color="inherit"
            sx={{ my: 1, mx: 1.5 }}
            >
            Works
        </Link>
        <Menu
            id="works-menu"
            anchorEl={workanchorEl}
            keepMounted
            open={Boolean(workanchorEl)}
            onClose={handleWorkClose}
        >
            <MenuItem component={Link} href="/clients" onClick={handleWorkClose}>Clients</MenuItem>
            <MenuItem component={Link} href="#" onClick={handleWorkClose}>Shows</MenuItem>
        </Menu>
        <Link
            aria-controls="more-menu"
            aria-haspopup="true" onClick={handleMoreClick}
            variant="button"
            href="#"
            color="inherit"
            sx={{ my: 1, mx: 1.5 }}
            >
            More
        </Link>
        <Menu
            id="more-menu"
            anchorEl={moreanchorEl}
            keepMounted
            open={Boolean(moreanchorEl)}
            onClose={handleMoreClose}
        >
            <MenuItem component={Link} href="#" onClick={handleMoreClose}>Media</MenuItem>
            <MenuItem component={Link} href="#" onClick={handleMoreClose}>Extra</MenuItem>
        </Menu>
        </nav>
        </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}