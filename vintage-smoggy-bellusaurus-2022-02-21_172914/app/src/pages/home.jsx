import * as React from "react";

// import material elements :)
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {ThemeProvider, createTheme} from '@mui/material/styles'

// import icons
import MenuIcon from '@mui/icons-material/Menu';

// import images and stuff

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function appBarLabel(label) {
  return (
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        {label}
      </Typography>
    </Toolbar>
  );
}

export default function Home() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          {appBarLabel("Banana Web Store")}
        </AppBar>
      </ThemeProvider>
      
      <img id="Slideshow" src="">
      </img>
    </>
  );
}