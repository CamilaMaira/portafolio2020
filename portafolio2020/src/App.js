import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// components 
import Navbar from './components/navbar';
import SideBar from './components/hamburgerButton/sidebar'
import Backdrop from './components/backdrop/backdrop';

// views 
import About from './view/about';
import Projects from './view/projects';
import Contact from './view/contact';


class App extends Component {

    state = {
      sideBarOpen: false
      }

  hamburgerButtonClickHandler = () => {
    this.setState((prevState) => {
      return {sideBarOpen: !prevState.sideBarOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideBarOpen: false});
  }

  
  render () {
    let backdrop;

    if (this.state.sideBarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

  return ( 
    <BrowserRouter>
      <div style={{height: '100%'}}>
        <Navbar hamburgerClickHandler={this.hamburgerButtonClickHandler}/>
        <SideBar show={this.state.sideBarOpen}/>
        {backdrop}
        
          <main>
            <p>que muera piñera y no mi compañera</p>
          </main>

          <div> 
            <Switch>
            <Route exact path="/" component={""} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
      </div>
    </BrowserRouter>
  )};

}

export default App;


