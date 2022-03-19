import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from './Input';
import { InputLabel , Button, Paper, Grid, MenuItem , Container,FormControl,Select   } from '@material-ui/core';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import { group } from '../../actions/group';
import  Axios  from 'axios';


const initialState = { name: '', year: '', groupname: '', groupemail: '', groupphone: '',contactpersonname:'',contactpersonphone:'',contactpersonemail:'' };

const Group = () => {
  const [form2, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useNavigate();

  
  const  handleSubmit = async (e) => {
    e.preventDefault();  
    // dispatch(group(form2, history));
    
    let id = JSON.parse(localStorage.getItem('profile')).result._id;
    
   let {data} = await Axios.post("http://localhost:5000/groupauth",{...form2,admin:id});
   console.log(data.result);
   if (data.result._id){
     history(`/grouphome/${data.result._id}`)
   }
  };  

  const handleChange = (e) => setForm({ ...form2, [e.target.name]: e.target.value });

  // const test = ()=>{
  //   console.log(JSON.parse(localStorage.getItem('profile')));
  // }
    
  

  return (
    <Container component="main" maxWidth="xs">
      
            <h1>Create Your Group</h1>
      <Paper className={classes.paper} elevation={3}>       
  
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>


                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Institute</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          variant="outlined"                
                          onChange={handleChange}
                        >
                            <MenuItem value={10}>O/L School</MenuItem>
                            <MenuItem value={20}>A/L School</MenuItem>
                            <MenuItem value={30}>University</MenuItem>
                        </Select>
                    </FormControl>


          
              <Input name="name" label="Institute Name" handleChange={handleChange} autoFocus  />
              <Input name="year" label="O/L,A/L,Intake year" handleChange={handleChange}  half/>
              <Input name="groupname" label="Group Name" handleChange={handleChange}  />
              <Input name="groupemail" label="Group Email" handleChange={handleChange}  />
              <Input name="groupphone" label="Group Phone" handleChange={handleChange} half />
              <Input name="contactpersonname" label="contact Person Name" handleChange={handleChange}  />
              <Input name="contactpersonphone" label="contact Person Phone" handleChange={handleChange} half />
              <Input name="contactpersonemail" label="contact Person Email" handleChange={handleChange}  />
              {/* <input type="hidden" name="admin" value={id} /> */}
                        
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Create Group
          </Button>
          {/* <Button onClick={test} fullWidth variant="contained" color="primary" >
            Create Group
          </Button> */}
                 
        </form>
      </Paper>
    </Container>
  );
};

export default Group;
