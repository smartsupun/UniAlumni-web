import * as React from 'react';
import Alumnigroupcard from './Alumnigroupcard'
import {  Grid,Button } from '@material-ui/core';
import { Link } from 'react-router-dom';









const Alumnigroup = () => {

    return (
            <div>
        <Grid container spacing={1} >
            <Grid item xs={6} md={4} lg={3}>
                    <Grid item><Alumnigroupcard />  </Grid>                    
            </Grid>  
            <Grid item xs={6} md={4} lg={3}>
                    <Grid item><Alumnigroupcard />  </Grid>                    
            </Grid>  
            <Grid item xs={6} md={4} lg={3}>
                    <Grid item><Alumnigroupcard />  </Grid>                    
            </Grid>  
            <Grid item xs={6} md={4} lg={3}>
                    <Grid item><Alumnigroupcard />  </Grid>                    
            </Grid>  
                                      
        </Grid>
<div style={{display:'flex',justifyContent:'center',margin:'10px'}}><Button style={{backgroundColor:"lightcoral"}} component={Link} to="/joingroup" variant="contained" >Find Your Group</Button></div>
        </div>

        
           
            
    )     
}

export default Alumnigroup
