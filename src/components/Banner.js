import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import React from 'react';
import "./Banner.css";

function Banner({ title, text }) {
    const history = useHistory()

    return (
        <div className="banner">
            <h1 className="banner__title">{ title }</h1>
            <div className="banner__body">
                <Button onClick={() => history.push("/about")} variant="contained" color="primary">{ text }</Button>
            </div>
        </div>
    )
}

export default Banner;
