import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <h1 className="header__title">Disease Informer</h1>

            <div className="header__left">
                <div className="header__option">
                    <a href="/">Home</a>
                </div>

                <div className="header__option">
                    <a href="/faqs">Faqs</a>
                </div>

                <div className="header__option">
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Header;
