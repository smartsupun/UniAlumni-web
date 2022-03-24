import React from 'react';
import "./style1.css"
import { Typography, Grid, Button } from '@material-ui/core';


import { Link } from 'react-router-dom';



const Contact = () => {

    return (
        <div class="box">
            <div class="container">

                <div class="row">
                    <h4 class="h4" style={{ textalign: 'center' }}>We'd love to hear from you!</h4>
                </div>
                <div class="row input-container">
                    <div class="col-xs-12">
                        <div class="styled-input wide">
                            <input class="input" type="text" required />
                            <label class="label">Name</label>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="styled-input">
                            <input class="input" type="text" required />
                            <label class="label">Email</label>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="styled-input" style={{ float: 'right' }}>
                            <input class="input" type="text" required />
                            <label class="label">Phone Number</label>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="styled-input wide">
                            <textarea class="textarea" required></textarea>
                            <label class="label" >Message</label>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class=" submit-btn">Send Message</div>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Contact
