import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/styles';

import {  ThemeProvider, createTheme, alpha, getContrastRatio } from '@mui/material/styles';

import {Link as RouterLink } from "react-router-dom"
import logo from './Logo.png'



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

const useStyles = makeStyles({
    logo: {
      maxWidth: 90,
    },
  });


export default function Navbar() {
      const classes = useStyles();
    const [moreanchorEl, setMoreAnchorEl] = React.useState(null);

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
        // sx={{ bgcolor: 'violet.dark', borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        style={{ background: 'transparent', boxShadow: 'none'}}
        >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
             <img src={logo} alt="Phenom Productions LLC" className={classes.logo} />
        </Typography>
        <nav>
            <Link
            variant="button"
            color="inherit"
            component={RouterLink} to="/"
            sx={{ my: 1, mx: 1.5 }}
            >
            Home
            </Link>
            <Link
            variant="button"
            color="inherit"
            component={RouterLink} to="/about"
            sx={{ my: 1, mx: 1.5 }}
            >
            About
            </Link>

            <Link  
            variant="button"
            color="inherit" 
            component={RouterLink} to="/clients"
            sx={{ my: 1, mx: 1.5 }}
            >
            Clients
            </Link>

            <Link  
            variant="button"
            color="inherit" 
            component={RouterLink} to="/shows"
            sx={{ my: 1, mx: 1.5 }}
            >
            Shows
            </Link>
            <Link
                aria-controls="more-menu"
                aria-haspopup="true" onClick={handleMoreClick}
                variant="button"
                component={RouterLink}
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
                <MenuItem component={RouterLink} to="/media" onClick={handleMoreClose}>Media</MenuItem>
                <MenuItem  component={RouterLink} to="/extra" onClick={handleMoreClose}>Extra</MenuItem>
            </Menu>
        </nav>
        </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}