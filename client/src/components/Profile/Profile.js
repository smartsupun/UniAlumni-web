import React,{useEffect,useState} from 'react'
import  Axios  from 'axios';
import {  Button  } from '@material-ui/core';
import { useNavigate,Link } from 'react-router-dom';


const Profile = () => {

    let [profile,setProfile] = useState({_id:' ',email:' ', firstName:' ', lastName:' ',university:' ',school:' ',olyear:' ',alyear:' ',graduatedyear:' '});
    
    let [groups,setGroups] =useState([{groupName:' ', groupId:' '}])

    useEffect(() => {
        let profileDetails = JSON.parse(localStorage.getItem('profile'));
        // console.log(profileDetails.result);
        setProfile(profileDetails.result);
        setGroups(profileDetails.result.groups)
        },[]);
        
        const history = useNavigate();

        const handleSubmit = (groupid) =>{            
                  history(`/grouphome/${groupid}`)
                
        }     
  
        return (
            <div>
            
                <h1>{profile.name}</h1>
                <h1>{profile.email}</h1>
                <h1>{profile.school}</h1>
                <h1>{profile.alyear}</h1>
                <h1>{profile.olyear}</h1>
                <h1>{profile.university}</h1>
                <h1>{profile.graduatedyear}</h1>

                {
                    groups.map((group)=>{
                        return(                           
                            <Button onClick={()=>{handleSubmit(group.groupId)}} variant="contained" color="primary" >{group.groupName}</Button>
                        )                            
                    })
                } 

                <Button component={Link} to="/joingroup" variant="contained" color="primary" >Join for group</Button>

            </div>
  )
}

export default Profile