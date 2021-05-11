import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import memories from '../../images/1001371442.jpg';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = ({setFormVisibility}) => {
  

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const upload = () => {
    setFormVisibility((prevformVisibility) => !prevformVisibility);
  };
  

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Pictorial</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl || user?.result.profilepic }>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button className={classes.upload} onClick={upload}>
            <AddBoxOutlinedIcon fontSize="default" />
            </Button>
            <Button variant="contained" className={classes.logout} color="dark" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button className={classes.logout} component={Link} to="/auth" variant="contained" >Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;