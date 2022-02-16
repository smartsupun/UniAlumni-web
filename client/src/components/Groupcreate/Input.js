import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';



const Input = ({ name, handleChange, label, half, autoFocus, type,defaultValue }) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      
      defaultValue={defaultValue}
      label={label}
      autoFocus={autoFocus}
      type={type}
      
    />
  </Grid>
);

export default Input;

