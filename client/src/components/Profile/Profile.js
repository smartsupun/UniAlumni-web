import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Button, Container, Grid, Grow, Box } from '@material-ui/core';
import { useNavigate, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


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
            <Container style={{ backgroundColor: "lightblue", marginTop: "20px", padding: '20px', border: "solid black", borderRadius: "10px" }}>

                <Grid container >
                    <Grid item xs={4} sm={4} lg={4} style={{ backgroundColor: "lightgreen", padding: '20px', border: "solid black", borderRadius: "10px" }}>
                        <h1>prfile pic</h1>
                        <h1>{profile.name}</h1>
                    </Grid>
                    <Grid item xs={8} sm={8} lg={8} style={{ backgroundColor: "lightpink", padding: '20px', border: "solid black", borderRadius: "10px" }}>
                        <h3>personal Details</h3><br />

                        <span>User Name: </span><input type="text" value={profile.name} /><br />
                        <span>Email: </span><input type="text" value={profile.email} /><br /><br />
                        <h3>School Details</h3><br />
                        <span>School: </span><input type="text" value={profile.school} /><br />
                        <span>A/L Year: </span><input type="text" value={profile.alyear} /><br />
                        <span>O/L Year: </span><input type="text" value={profile.olyear} /><br /><br />
                        <h3>University Details</h3><br />
                        <span>University: </span><input type="text" value={profile.university} /><br />
                        <span>Graduated Year: </span><input type="text" value={profile.graduatedyear} /><br /><br />
                        <h3>Joined Groups</h3><br />



                        {
                            groups.map((group) => {
                                return (
                                    <>
                                        <li style={{ listStyle: "none" }}><Button style={styles} onClick={() => { handleSubmit(group.groupId) }} variant="contained" color="primary" >{group.groupName}</Button></li>
                                    </>
                                )
                            })
                        }

                        <br /><br /><br />
                        <Box className={classes.btns}>
                            <Button  variant="contained" color="primary" >Join for group</Button>
                            <Button component={Link} to="/groupauth" variant="contained" color="secondary" >Create group</Button> </Box>
                    </Grid>
                </Grid>


            </Container></Grow>
    )
}

export default Profile