import React from 'react';
import "./AboutBanner.css";

function AboutBanner({ title, bodyInfo }) {
    return (
        <div className="aboutBanner">
            <h1 className="banner__title">{ title }</h1>
            <div className="banner__body">
                <h3>{ bodyInfo }</h3>
            </div>
        </div>
    )
}

export default AboutBanner;
