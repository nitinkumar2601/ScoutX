import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          Smart Lead Scouting
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/leads"
          >
            Leads
          </Button>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;