import React,{useEffect,useState} from 'react'
import { Container, Grow, Grid, Box } from '@material-ui/core';
import {useParams} from 'react-router-dom';
import Axios from 'axios';

const Grouphome = () => {
    const [groupDetails, setgroupDetails] = useState({groupname:' '});
    let param = useParams();
    console.log(param.id);

    useEffect(async()=>{
        let {data} = await Axios.get(`http://localhost:5000/group/get-group-details/${param.id}`);

        if(data.result){
            setgroupDetails(data.result);
        }

    },[])
    return (
        <Grow in>      

        <Container 
                  bgcolor="red"
                  marginTop="px" 
        >

            <Grid container justify="space-between" alignItems="stretch" spacing={3} >

                <Grid item xs={12} sm={7} md={12}>
                    <h1>{groupDetails.groupname}</h1>
                </Grid>
                
                <Grid item xs={12} sm={7} md={3}>         
                    <h2>members list</h2>            
                    <h2>create a event</h2>
                    <h2>invite members</h2>           
                </Grid>

                <Grid item xs={12} sm={7} md={6}>
                    <h2>events</h2>
                    <h2>job post</h2>
                </Grid>

                <Grid item xs={12} sm={4}md={3}>
                    <h2>verification status</h2>
                    <h2>submit proof document</h2>
                </Grid>
                
            </Grid>
        </Container>
       
      </Grow>
    )
}

export default Grouphome
