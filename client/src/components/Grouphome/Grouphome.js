import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Button } from '@material-ui/core';
import { useParams,Link } from 'react-router-dom';
import Axios from 'axios';

// ff
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/Posts';
import Posts from '../Posts/posts';
import Form from '../Form/Form';

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
  
    SidebarContent,
    } from "react-pro-sidebar";
  
  //import icons from react icons
  import { FaList } from "react-icons/fa";
  import {  FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
  
  
  
  //import sidebar css from react-pro-sidebar module and our custom css 
  import "react-pro-sidebar/dist/css/styles.css";
  import "./style.css";

// ff

const Grouphome = () => {

    const [groupDetails, setgroupDetails] = useState({ groupname: ' ' });
    let param = useParams();
    console.log(param.id);

    useEffect(async () => {
        let { data } = await Axios.get(`http://localhost:5000/group/get-group-details/${param.id}`);

        if (data.result) {
            setgroupDetails(data.result);
        }

    }, [])

    // ff
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


    // ff
    return (
        <Grow in>

            <Container>

                <Grid style={{marginTop:'10px'}} container justify="space-between" alignItems="stretch" spacing={3} >

                    <Grid item xs={12} sm={7} md={3}>
                         <>
                                <div id="header">
                                    {/* collapsed props to change menu size using menucollapse state */}
                                    <ProSidebar collapsed={menuCollapse}>
                                    <SidebarHeader>
                                    <div className="logotext">
                                        {/* small and big change using menucollapse state */}
                                        <p>{groupDetails.groupname}</p>
                                        </div>
                                        <div className="closemenu" onClick={menuIconClick}>
                                            {/* changing menu collapse icon on click */}
                                        {menuCollapse ? (
                                            <FiArrowRightCircle/>
                                        ) : (
                                            <FiArrowLeftCircle/>
                                        )}
                                        </div>
                                    </SidebarHeader>
                                    <SidebarContent>
                                        <Menu iconShape="square">
                                        
                                        <Button  component={Link} to="/Groupauth">

                                        <MenuItem icon={<FaList />}  >Create Group</MenuItem>
                                        </Button>
                                        <Button >

                                        <MenuItem icon={<FaList />}  >Create post</MenuItem>
                                    
                                        </Button>
                                        
                                        <Button  >

                                        <MenuItem icon={<FaList />}  >Create Event</MenuItem>
                                    
                                        </Button>

                                    
                                        </Menu>
                                    </SidebarContent>
                                    
                                    </ProSidebar>
                                </div>
                         </>
                    </Grid>

                    <Grid item xs={12} sm={7} md={6}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>

                    <Grid item xs={12} sm={4} md={3}>
                        {/* <Right currentId={currentId} setCurrentId={setCurrentId} /> */}
                         <Form currentId={currentId} groupid={param.id} setCurrentId={setCurrentId} />

                    </Grid>

                </Grid>
            </Container>

        </Grow>
    )
}

export default Grouphome





