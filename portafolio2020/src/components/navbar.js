import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import logo from '../img/logocami3.gif'

// components
import HamburgerButton from './hamburgerButton/hamburgerButton'


const Navbar = props => ( 

    <header className="container-navbar">
      <nav className="navbar-navigation">
          <div className="navbar-hamburgerbutton">
            <HamburgerButton click={props.hamburgerClickHandler}/>
          </div>
        <div className="logo">
          <a href="/"> <img src={logo} alt=""/> </a>
          </div>
          <div className="spacer" />
            <div className="navbar">
              <ul>
                
                <li> <Link to="/projects">proyectos</Link> </li>
                <li> <Link to="/about">sobre mí</Link> </li>
                <li> <Link to="/contact">contacto</Link> </li>
                
            </ul>
          </div>
         </nav>
      </header>      
)

export default Navbar;

