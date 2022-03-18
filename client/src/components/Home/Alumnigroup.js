import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent,CardActions,CardMedia ,Button  ,Grid } from '@material-ui/core';
import Deva from "../../images/school1.png";
import Ana from "../../images/ananda.png";
import DS from "../../images/download.png";
import Royal from "../../images/Crest-030809.jpg";

const Alumnigroup = () => {

    return (
            <div style={{backgroundColor:"#d4e7ff",padding:"15px"}}>
        <Grid container spacing={1} >
            <Grid item xs={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345 }} style={{  backgroundSize:"cover", backgroundPosition: "center",backgroundColor:"lightblue"}}>
                        <CardMedia
                        component="img"
                        height="190px"
                        image={Deva}
                       
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Sri Dewananda College Mother OBA   
                        </Typography>                
                        </CardContent>     
                </Card>                    
            </Grid> 

            <Grid item xs={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345 }} style={{  backgroundSize:"cover", backgroundPosition: "center",backgroundColor:"lightblue"}}>
                        <CardMedia
                        component="img"
                        height="190"
                        image={Ana}
                      
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                        Ananda College colombo Mother OBA
                        </Typography>                
                        </CardContent>     
                </Card>                      
            </Grid>  

            <Grid item xs={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345 }} style={{  backgroundSize:"cover", backgroundPosition: "center",backgroundColor:"lightblue"}}>
                                <CardMedia
                                component="img"
                                height="190"
                                image={DS}
                               
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                DS Senanayake College Mother OBA
                                </Typography>                
                                </CardContent>     
                        </Card>                    
                </Grid>  

            <Grid item xs={6} md={4} lg={3}>
                <Card sx={{ maxWidth: 345 }} style={{  backgroundSize:"cover", backgroundPosition: "center",backgroundColor:"lightblue"}}>
                                <CardMedia
                                component="img"
                                height="190"
                                image={Royal}
                                
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                Royal College colombo Mother OBA
                                </Typography>                
                                </CardContent>     
                        </Card>                   
            </Grid>  
                                      
        </Grid>
<div style={{display:'flex',justifyContent:'center',margin:'30px'}}><Button style={{backgroundColor:"#5099f2"}} component={Link} to="/joingroup" variant="contained" >Find Your Group</Button></div>
        </div>

        
           
            
    )     
}

export default Alumnigroup
