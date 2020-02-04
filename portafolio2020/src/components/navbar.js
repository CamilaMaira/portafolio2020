import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

// components
import HamburgerButton from './hamburgerButton/hamburgerButton'


const Navbar = props => ( 

    <header className="container-navbar">
      <nav className="navbar-navigation">
          <div className="navbar-hamburgerbutton">
            <HamburgerButton click={props.hamburgerClickHandler}/>
          </div>
        <div className="logo"><a href="/">EL LOGO</a></div>
          <div className="spacer" />
            <div className="navbar">
              <ul>
                <li> <Link to="/">home</Link> </li>
                <li> <Link to="/projects">proyectos</Link> </li>
                <li> <Link to="/about">about</Link> </li>
                <li> <Link to="/contact">contacto</Link> </li>
            </ul>
          </div>
         </nav>
      </header>      
)

export default Navbar;