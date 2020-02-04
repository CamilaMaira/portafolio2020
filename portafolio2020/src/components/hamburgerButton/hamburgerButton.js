import React from 'react';
import './hamburgerButton.css';

const HamburgerButton = props => (
    <button className="the-button" onClick={props.click}> 
        <div className="button-line" />
        <div className="button-line" />
        <div className="button-line" />
    </button>

);

export default HamburgerButton; 