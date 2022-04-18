import React, { useEffect, useState } from 'react'
import { Typography, Card, CardContent, CardActions, Grid, Button } from '@material-ui/core';
import Axios from 'axios';


const Request =({requestDetails})=>{

const handlesubmit = async (groupid,userid) =>{
  alert(`do yo want to accept this user ?`)
  window.location.reload(false);
  let request  = await Axios.post(`http://localhost:5000/user/requeststatus`,{groupid,userid});
  // console.log(request.data)
  

  
}
const handlereject = async(groupid,userid) =>{
  alert(`do yo want to reject this user ?`)

  window.location.reload(false);
  let groupdata = await Axios.post(`http://localhost:5000/user/requeststatusreject`,{groupid,userid});

}

    return(
        <div>
            {/* <Typography variant="h6" component="div">Requests</Typography> */}
      
          {
            requestDetails.map((request)=>{
              return(
            <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: "lightblue", marginBottom: "10px" }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                  {request.username}
                    
                  </Typography>
                  <Typography   component="div">
                    Name : {request.username}<br/>
                    University:{request.useruni}<br/>

                  </Typography>


                </CardContent>
                <CardActions text-align="center">
                  <Button onClick={()=>{handlesubmit(request.groupid,request.userid)}} variant="contained" style={{ backgroundColor: "green",color:"white" }}>Accept</Button>
                  <Button onClick={()=>{handlereject(request.groupid,request.userid)}} variant="contained" style={{ backgroundColor: "red",color:"white" }}>Reject</Button>
                </CardActions>
              </Card>
              )
            })
          }

                
              </div>
    )
}

export default Request;