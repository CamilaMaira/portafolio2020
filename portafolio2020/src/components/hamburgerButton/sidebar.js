import React from 'react';
import { Link } from 'react-router-dom';

import './sidebar.css';

const sideBar = props => { 

    let sidebarClasses = 'sidebar';
    if (props.show) {
        sidebarClasses = 'sidebar open';
    }

    return (
    <nav className={sidebarClasses}>
        <ul>
            <li> <Link to="/">home</Link> </li>
            <li> <Link to="/projects">proyectos</Link> </li>
            <li> <Link to="/about">about</Link> </li>
            <li> <Link to="/contact">contacto</Link> </li>
        </ul>
        
    </nav>
    )


};

export default sideBar;