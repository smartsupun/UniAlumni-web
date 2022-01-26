import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, Button, FormControl, InputLabel, TextField } from '@material-ui/core';
import Schooldata from './Schooldata.json'
import Unidata from './Unidata.json'
import { Link} from 'react-router-dom';


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
    const [state, setState] = React.useState({
        school: '',
        olyear: '',
        alyear: '',
        university: '',
        graduateyear: ''

    });

    const handleChange = (event) => {
        const name = event.target.name;


        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        console.log(state);
        // e.preventDefault() --temporary commented for testing
        // ... submit to API or something
    };
    return (
        <div>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Enter School Name</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label="Enter School Name"
                    inputProps={{
                        name: 'school',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {Schooldata.map((result) => (<option name="university" text={result.id}>{result.title}</option>))}

                </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>


                <TextField
                    id="date"
                    onChange={handleChange}
                    native
                    name="alyear"
                    label="/L Year"
                    type="date"
                    defaultValue="2017-05-24"
                    variant="outlined"
                />
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>


                <TextField
                    id="date"
                    onChange={handleChange}
                    native
                    name="olyear"
                    label="O/L Year"
                    type="date"
                    defaultValue="2017-05-24"
                    variant="outlined"
                />
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">Enter University</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label="Enter School Name"
                    inputProps={{
                        name: 'university',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {Unidata.map((result) => (<option text={result.id}>{result.title}</option>))}

                </Select>
            </FormControl>

            <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                    id="date"
                    onChange={handleChange}
                    native
                    name="graduateyear"
                    label="Graduated Year"
                    type="date"
                    defaultValue="2017-05-24"
                    variant="outlined"
                />
            </FormControl>

            <br></br>



            <Button component={Link} to='/auth' variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    );
}
