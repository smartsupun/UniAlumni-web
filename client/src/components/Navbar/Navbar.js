import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/memories.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';



const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();

  const classes = useStyles();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history('/auth');

    setUser(null);
  };

  // console.log(user);
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    
    <AppBar className={classes.appBar} position="sticky" color="inherit" >
      <div className={classes.brandContainer}>
        <img className={classes.image} src={memories} alt="icon" height="60" />
        <Typography component={Link} to="/" className={classes.heading} variant="h5" align="center">UniAlumni</Typography>
      <div className={classes.tabContainer} >
        <Typography component={Link} to="/" className={classes.tabs} variant="h6" align="center">Home</Typography>
        {/* <Typography component={Link} to="/" className={classes.tabs} variant="h6" align="center">Features</Typography>
        <Typography component={Link} to="/" className={classes.tabs} variant="h6" align="center">Top Alumnies</Typography> */}
       

      </div>
      </div>

      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <>
          <Button component={Link} to="/profile" className={classes.profile}>
            
            <Avatar style={{marginRight:'10px'}} className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            
          </Button>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
            </>
        ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
          )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;

