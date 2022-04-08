import React, { useEffect, useState } from 'react'

import { Typography, Card, CardContent, CardActions, Grid, Button } from '@material-ui/core';
import background from "../../images/21310_Alumni_F.jpg";
import { Link } from 'react-router-dom';
import Axios from 'axios';



const GeoupSuggestCard = () => {

  const [groupDetails, setgroupDetails] = useState([]);
    
    

    useEffect(async () => {
        let { data } = await Axios.get(`http://localhost:5000/allgroup/get-all-group-details`);

        if (data.result) {
            setgroupDetails(data.result);
            console.log(data.result)
        }

    }, [])

  return (

    <div style={{ width: "200px", marginLeft: "50px" }}>

    {
    
      groupDetails.map((group) =>{
        if(group){
        return(
        
          <Card sx={{ maxWidth: 345 }} style={{  backgroundColor: "lightblue",marginBottom:"10px" }}>
        
        <CardContent>
          <Typography variant="h6" component="div">            
            {group.name}
        </Typography>

        </CardContent>
        <CardActions>
          <Button component={Link} to = {`/grouphome/${group._id}`} variant="contained" color="primary">Join Group</Button>
        </CardActions>
      </Card>
      
        )}
        return <h1 style={{  color:"lightblue" }}>No Groups Found!</h1>
      })
    }

      
    </div>

  )
}

export default GeoupSuggestCard
