import React,{useEffect,useState} from 'react'
import  Axios  from 'axios';
import {  Button  } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


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
                <h1>{profile._id}</h1>
                {
                    groups.map((group)=>{
                        return(
                           
                            <Button onClick={()=>{handleSubmit(group.groupId)}} variant="contained" color="primary" >{group.groupName}</Button>
                        )

                    })
                }
                      
                

            </div>
  )
}

export default Profile