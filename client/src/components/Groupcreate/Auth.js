import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from './Input';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';
import { group } from '../../actions/group';





const initialState = { name: '', year: '', groupname: '', groupemail: '', groupphone: '',contactpersonname:'',contactpersonphone:'',contactpersonemail:'' };

const Group = () => {
  const [form2, setForm] = useState(initialState);
    const dispatch = useDispatch();
   const classes = useStyles();
  const history = useNavigate();





  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch(group(form2, history));

  
  };
  // console.log(form2)

  

  const handleChange = (e) => setForm({ ...form2, [e.target.name]: e.target.value });



  return (
    <Container component="main" maxWidth="xs">
      
      <Paper className={classes.paper} elevation={3}>       
  
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          
              <Input name="name" label="Institute Name" handleChange={handleChange} autoFocus  />
              <Input name="year" label="O/L,A/L,Intake year" handleChange={handleChange}  half/>
              <Input name="groupname" label="Group Name" handleChange={handleChange}  />
              <Input name="groupemail" label="Group Email" handleChange={handleChange}  />
              <Input name="groupphone" label="Group Phone" handleChange={handleChange} half />
              <Input name="contactpersonname" label="contact Person Name" handleChange={handleChange}  />
              <Input name="contactpersonphone" label="contact Person Phone" handleChange={handleChange} half />
              <Input name="contactpersonemail" label="contact Person Email" handleChange={handleChange}  />
                        
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            Create Group
          </Button>
                 
        </form>
      </Paper>
    </Container>
  );
};

export default Group;
