
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
 function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
            <AccessibilityIcon/>
            <a href="TodoApp.js" style={{color:"white"}}>
            <MenuIcon />
            </a>
          </IconButton>
          <Button color="inherit"><a href="https://www.indiatoday.in/programmes/news-today" style={{color:"white"}}>News</a></Button>
          <Button color="inherit"><a href="Form.js" style={{color:"white"}}>Login</a></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default  HeaderBar