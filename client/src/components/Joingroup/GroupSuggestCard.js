import React, { useEffect, useState } from 'react'

import { Typography, Card, CardContent, CardActions, Grid, Button,TextField } from '@material-ui/core';
import background from "../../images/21310_Alumni_F.jpg";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '19ch',
      '&:focus': {
        width: '26ch',
      },
    },
  },
}));


const GeoupSuggestCard = () => {

  const [groupDetails, setgroupDetails] = useState([]);
  const [groupDetailsnew, setgroupDetailsnew] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const classes = useStyles();
  useEffect(async () => {
    let { data } = await Axios.get(`http://localhost:5000/allgroup/get-all-group-details`);

    if (data.result) {
      setgroupDetails(data.result);
      setgroupDetailsnew(data.result)
      // console.log(data.result)
    }

  }, [])


  

  const hadlesubmit = async (groupid) => {
    let user = JSON.parse(localStorage.getItem('profile'));

    let userid = user.result._id;
    let username = user.result.name;
    let useruni = user.result.university;

    console.log(userid, groupid)
    let { data } = await Axios.post(`http://localhost:5000/user/joinrequest`, {
      userid, groupid, username, useruni
    });



  }

  const filterContent = (searchTerm) => {
    const result = groupDetails.filter(
      (post) =>
        post.groupname.toLowerCase().includes(searchTerm)

    );
    setgroupDetailsnew(result);

  }

  const handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    console.log(searchTerm);
    filterContent(searchTerm);
  }



  return (
    <div>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
       
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search your group..."
              onChange={handleTextSearch}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>






      

      <div style={{ width: "200px", marginLeft: "50px" }}>


        {

          groupDetailsnew.map((group) => {
            if (group) {
              return (

                <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "lightblue", marginBottom: "10px" }}>

                  <CardContent>
                    <Typography variant="h6" component="div">
                      {group.groupname}
                    </Typography>

                  </CardContent>
                  <CardActions>
                    {/* <Button component={Link} to = {`/grouphome/${group._id}`} variant="contained" color="primary">Join Group</Button> */}
                    <Button onClick={() => { hadlesubmit(group._id) }} variant="contained" color="primary">Join Group</Button>
                  </CardActions>
                </Card>

              )
            }
            return <h1 style={{ color: "lightblue" }}>No Groups Found!</h1>
          })
        }


      </div>
    </div>

  )
}

export default GeoupSuggestCard
