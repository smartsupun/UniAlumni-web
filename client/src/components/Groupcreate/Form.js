import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, Button, FormControl, InputLabel, TextField } from '@material-ui/core';
import Schooldata from '../Joingroup/Schooldata.json'

import { Link } from 'react-router-dom';
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
    const [state, setState] = React.useState(null);



    const handleChange = (event) => {
        const name = event.target.name;


        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        console.log(state);
        // e.preventDefault() //--temporary commented for testing
        // ... submit to API or something
    };




    return (
        <div style={{ border: "1px", borderStyle: "solid", borderRadius: "5px", margin: "10px", borderColor: "gray" }}>
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

            <br></br>
            <FormControl variant="outlined" className={classes.formControl}>


                <TextField
                    id="date"
                    onChange={handleChange}

                    name="olyear"
                    label="O/L,A/L,Intake Year"
                    // type="date"
                    // defaultValue="2017-05-24"
                    variant="outlined"
                />
            </FormControl>
            <br></br>
            <hr style={{ width: "80%" }}></hr>
            <FormControl variant="outlined" className={classes.formControl}>


                <TextField id="outlined-basic" label="Group Name" variant="outlined" />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>


                <TextField id="outlined-basic" label="Group Email" variant="outlined" />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>


                <TextField id="outlined-basic" label="Group Contact number" variant="outlined" />
            </FormControl><br></br>

            <br></br>
            <hr style={{ width: "80%" }}></hr>
            <br></br>
            <FormControl variant="outlined" className={classes.formControl}>

                <TextField id="outlined-basic" label="Contact person name" variant="outlined" />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>


                <TextField id="outlined-basic" label="Contact person Phone" variant="outlined" />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>


                <TextField id="outlined-basic" label="Contact person email" variant="outlined" />
            </FormControl>





            <br></br>


            <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>

                <Button component={Link} to='/grouphome' variant="contained" color="primary" onClick={handleSubmit}>Complete creation</Button>
            </div>
        </div>
    );
}
