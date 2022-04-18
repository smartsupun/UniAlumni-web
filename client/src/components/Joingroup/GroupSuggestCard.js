import React, { useEffect, useState } from 'react'

import { Typography, Card, CardContent, CardActions, Grid, Button } from '@material-ui/core';
import background from "../../images/21310_Alumni_F.jpg";
import { Link } from 'react-router-dom';
import Axios from 'axios';



const GeoupSuggestCard = () => {

  const [groupDetails, setgroupDetails] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  useEffect(async () => {
    let { data } = await Axios.get(`http://localhost:5000/allgroup/get-all-group-details`);

    if (data.result) {
      setgroupDetails(data.result);
      // console.log(data.result)
    }

  }, [])

  const hadlesubmit = async (groupid) => {
    let user = JSON.parse(localStorage.getItem('profile'));
    
    let userid = user.result._id;
    let username = user.result.name;
    let useruni = user.result.university;

    console.log(userid, groupid)
    let { data } = await Axios.post(`http://localhost:5000/user/joinrequest`,{
      userid,groupid,username,useruni
    });
    


  }



  return (

    <div style={{ width: "200px", marginLeft: "50px" }}>

      {

        groupDetails.map((group) => {
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

  )
}

export default GeoupSuggestCard
