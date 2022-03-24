import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, Button, FormControl, InputLabel, TextField } from '@material-ui/core';
import Schooldata from './Schooldata.json'
import Unidata from './Unidata.json'
import { Link,useNavigate } from 'react-router-dom';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';




const filter = createFilterOptions();


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function NativeSelects() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [state, setState] = React.useState(null);
    const [state2, setState2] = React.useState(null);

    // let id = JSON.parse(localStorage.getItem('profile')).result._id;
    // console.log(id)

    const handleChange = (event) => {
        const name = event.target.name;


        setState({
            ...state, ...state2,
            [name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        // console.log(state);
        // navigate('/joingroup',{state : ['lyear','olyear','graduateyear','school','university']});
        navigate('/auth',{state :state});
        e.preventDefault() //--temporary commented for testing
        // ... submit to API or something
    };




    return (
        <form>


            <FormControl variant="outlined" className={classes.formControl}>
                <Autocomplete
                    value={state}
                    onChange={(event, newValue) => {
                        if (typeof newValue === 'string') {
                            setState({
                                school: newValue,
                            });
                        } else if (newValue && newValue.inputValue) {
                            // Create a new value from the user input
                            setState({
                                school: newValue.inputValue,
                            });
                        } else {
                            setState(newValue);
                        }
                    }}
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        // Suggest the creation of a new value
                        if (params.inputValue !== '') {
                            filtered.push({
                                inputValue: params.inputValue,
                                school: `Add "${params.inputValue}"`,
                            });
                        }

                        return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={Schooldata}

                    getOptionLabel={(option) => {
                        // Value selected with enter, right from the input
                        if (typeof option === 'string') {
                            return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                            return option.inputValue;
                        }
                        // Regular option
                        return option.school;
                    }}

                    renderOption={(option) => option.school}
                    style={{ width: 300 }}
                    freeSolo
                    renderInput={(params) => (
                        <TextField {...params} label="Select Your School" variant="outlined" />
                    )
                    }
                />

            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>


                <TextField
                    id="date"
                    onChange={handleChange}
                    
                    name="alyear"
                    label="O/L Year"
                    type="year"
                    // defaultValue="2017"
                    variant="outlined"
                />
                
             
    
  
            </FormControl>
<br></br>
            <FormControl variant="outlined" className={classes.formControl}>


                <TextField
                    id="date"
                    onChange={handleChange}
                    
                    name="olyear"
                    label="A/L Year"
                    // type="date"
                    // defaultValue="2017-05-24"
                    variant="outlined"
                />
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <Autocomplete
                    value={state2}
                    onChange={(event, newValue) => {
                        if (typeof newValue === 'string') {
                            setState2({
                                university: newValue,
                            });
                        } else if (newValue && newValue.inputValue) {
                            // Create a new value from the user input
                            setState2({
                                university: newValue.inputValue,
                            });
                        } else {
                            setState2(newValue);
                        }
                    }}
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params);

                        // Suggest the creation of a new value
                        if (params.inputValue !== '') {
                            filtered.push({
                                inputValue: params.inputValue,
                                university: `Add "${params.inputValue}"`,
                            });
                        }

                        return filtered;
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={Unidata}

                    getOptionLabel={(option) => {
                        // Value selected with enter, right from the input
                        if (typeof option === 'string') {
                            return option;
                        }
                        // Add "xxx" option created dynamically
                        if (option.inputValue) {
                            return option.inputValue;
                        }
                        // Regular option
                        return option.university;
                    }}

                    renderOption={(option) => option.university}
                    style={{ width: 300 }}
                    freeSolo
                    renderInput={(params) => (
                        <TextField {...params} label="Select Your University" variant="outlined" />
                    )
                    }
                />

            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                    id="date"
                    onChange={handleChange}
                    
                    name="graduatedyear"
                    label="Graduated Year"
                    // type="date"
                    // defaultValue="2017-05-24"
                    variant="outlined"
                />
            </FormControl>

            <br></br>

                    
            
                <Button component={Link} to='/groupauth' variant="contained" color="primary" onClick={handleSubmit}>Next</Button>
           

            </form>
    );
}
