import { Button } from '@material-ui/core';
import React from 'react';
import "./Contact.css"

function Contact() {
    return (
        <div className="contact">
            <p>WARNING: This page is still in production.</p>
            <div className="contact__box">
                <h1 className="contact__title">Contact</h1>
                <div className="contact__field">
                    <label for="fname">Name</label>
                    <input type="text" placeholder="Enter name" />
                </div>

                <div className="contact__field">
                    <label for="email">Email</label>
                    <input type="text" placeholder="Enter email" />
                </div>

                <div className="contact__field">
                    <label>Contents</label>
                    <textarea />
                </div>

                <div className="contact__button">
                    <Button variant="contained" color="primary">Send</Button>
                </div>
            </div>
        </div>
    )
}

export default Contact;
