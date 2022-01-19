import React from 'react'
import { Link } from 'react-router-dom';
import {Typography} from '@material-ui/core';

const Auth = () => {
  return (
    <div>
     <h1>Create Group</h1>
     <h2>instituion/school/University</h2>
     <h2>Year/intake/OL/AL year</h2>
     <h2>sudjested alumni groups</h2>
     <h2>join a group</h2>
     <h2>create a group</h2>
     <h2>name</h2>
     <h2>secretary name</h2>
     <h2>contact person email</h2>
     <h2>comtact person phone</h2>
     

      <Typography  component={Link} to="/Grouphome">

              <h1>complete creation</h1>
              </Typography>
    </div>
  )
}

export default Auth
