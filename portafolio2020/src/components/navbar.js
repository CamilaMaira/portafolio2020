import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';


// views
import About from '../view/about';
import Projects from '../view/projects';
import Contact from '../view/contact';


const Navbar = () => ( 

    <div className="navbar">
    <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/projects">Proyectos</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/contact">Contacto</Link> </li>
      </ul>
    

  <Switch>
  <Route exact path="/" component={""} />
  <Route exact path="/projects" component={Projects} />
  <Route exact path="/about" component={About} />
  <Route exact path="/contact" component={Contact} />
  </Switch>
  </div>
      
)

export default Navbar;