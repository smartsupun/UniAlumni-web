import React from 'react'
import { Grid,Button , TextField } from '@material-ui/core';
import image from '../../images/slide.jpg'
import Slider from './GeoupSuggestCard'
import SchoolSearchBar from './SchoolSearchBar'
import UniSearchBar from './UniSearchBar'
import Year from './Year'
import { Link} from 'react-router-dom';



const Joingroup = () => {
    
    return (
        <div>
            <Grid container>
                <Grid item xs={5} sm={5} >
                        <h1>form</h1>
                        <SchoolSearchBar /> <br></br>
                        <Year label="O/L year" /> <br></br>
                        <Year label="A/L year" /> <br></br>
                        <UniSearchBar /><br></br>
                        <Year label="Graduated year" /> <br></br>
                        <Button component={Link} to="/auth" variant="contained" color="primary">Next</Button>

                      
                        
                </Grid>

                <Grid item xs={7} sm={7} style={{backgroundImage:`url(${image})`,backgroundSize:"cover", backgroundPosition: "center",height:'100vh'}}>
                        <h1  style={{margin:'10px',color:"white"}}>Suggested Groups</h1>
                    <Grid container style={{margin:'10px'}}>
                            <Grid item xs={4} > <Slider /> </Grid>
                            <Grid item xs={4} > <Slider /> </Grid>
                            <Grid item xs={4} > <Slider /> </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Joingroup
