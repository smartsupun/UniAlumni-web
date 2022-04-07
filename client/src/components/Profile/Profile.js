import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Button, Container, Grid, Grow, Box } from '@material-ui/core';
import { useNavigate, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '../../images/Profile-PNG-Clipart.png'


const Profile = () => {

    let [profile, setProfile] = useState({ _id: ' ', email: ' ', firstName: ' ', lastName: ' ', university: ' ', school: ' ', olyear: ' ', alyear: ' ', graduatedyear: ' ' });

    let [groups, setGroups] = useState([{ groupName: ' ', groupId: ' ' }])

    const useStyles = makeStyles((theme) => ({

        btns: {
            '& > *': {
                margin: theme.spacing(1),
            }
        }
    }));

    useEffect(() => {
        let profileDetails = JSON.parse(localStorage.getItem('profile'));
        // console.log(profileDetails.result);
        setProfile(profileDetails.result);
        setGroups(profileDetails.result.groups)
    }, []);

    const history = useNavigate();

    const handleSubmit = (groupid) => {
        history(`/grouphome/${groupid}`)

    }
    const styles = {
        backgroundColor: 'white',
        // width: '0px',
        marginBottom: '10px',
        padding: '10px',
        color: 'green',
        boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px',
    };
    const classes = useStyles();
    return (
        <Grow in>
            <Container style={{  marginTop: "20px", padding: '20px', border: "solid black", borderRadius: "10px",fontSize:'17px',fontFamily:'Roboto' }}>

                <Grid container >
                    <Grid item xs={4} sm={4} lg={4} style={{ backgroundColor: "lightgreen",alignItems:'center', textAlign:'center' , padding: '20px', border: "solid black", borderRadius: "10px" }}>
                        <img src={Icon} height='200px'></img>
                        <h1>{profile.name}</h1>
                        <br /><br /><br />
                        <Box className={classes.btns}>
                            <Button  variant="contained" color="primary" >Join for group</Button>
                            <Button component={Link} to="/groupauth" variant="contained" color="secondary" >Create group</Button> </Box>
                    </Grid>
                    <Grid item xs={8} sm={8} lg={8} style={{  padding: '20px', border: "solid black", borderRadius: "10px" }}>
                        <h3>personal Details</h3><br />
                        <table>
                            
                        <tr>  <td> <span>User Name: </span></td><td><input style={{  fontSize:'17px',fontFamily:'Roboto'  }} type="text" value={profile.name} /></td></tr>
                        <tr> <td>   <span>Email: </span></td><td><input  style={{  fontSize:'17px',fontFamily:'Roboto'  }} type="text" value={profile.email} /></td></tr><br/>
                        
                        {/* </table> */}
                        <h3>School Details</h3><br />
                        {/* <table> */}
                        <tr>  <td><span>School: </span></td><td><input  style={{  fontSize:'17px',fontFamily:'Roboto'  }} type="text" value={profile.school} size="35" /></td></tr>
                        <tr>  <td>  <span>A/L Year: </span></td><td><input  style={{  fontSize:'17px',fontFamily:'Roboto'  }} type="text" value={profile.alyear} /></td></tr>
                        <tr>  <td> <span>O/L Year: </span></td><td><input  style={{  fontSize:'17px',fontFamily:'Roboto'  }} type="text" value={profile.olyear} /></td></tr><br/>
                        {/* </table> */}
                        <h3>University Details</h3><br />
                        {/* <table> */}
                        <tr>  <td><span>University: </span></td><td><input  style={{  fontSize:'17px',fontFamily:'Roboto'  }} type="text" value={profile.university} size="30"/></td></tr>
                        <tr>  <td> <span>Graduated Year: </span></td><td><input  style={{  fontSize:'17px',fontFamily:'Roboto'  }} type="text" value={profile.graduatedyear} /></td></tr><br/>
                        </table>
                        <h3>Groups</h3><br />



                        {
                            groups.map((group) => {
                                return (
                                    <>
                                        <li style={{ listStyle: "none" }}><Button style={styles} onClick={() => { handleSubmit(group.groupId) }} variant="contained" color="primary" >{group.groupName}</Button></li>
                                    </>
                                )
                            })
                        }

                       
                    </Grid>
                </Grid>


            </Container></Grow>
    )
}

export default Profile