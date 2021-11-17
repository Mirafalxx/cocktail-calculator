import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  mainLink: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#fff',
    marginRight: theme.spacing(9),
  },
  appBarColor: {
    color: '#21262D',
  },
  activeMainLink: {
    color: 'darkorchid',
  },
  staticToolbar: {
    marginBottom: theme.spacing(2),
  },
}));

const ToolBar = () => {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              <NavLink to="/" className={classes.mainLink}>
                Cocktails
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div">
              <NavLink to="/ingredients" className={classes.mainLink}>
                Ingredients
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Toolbar className={classes.staticToolbar} />
    </>
  );
};

export default ToolBar;
