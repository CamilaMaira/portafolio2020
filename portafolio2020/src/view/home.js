import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import cami from '../img/cami-cara.gif'

const Home = () => {
    return (

            <div className="home">
                  <div className="titles">
                    <p>diseño gráfico</p>
                    <p>& front-end developer</p>
                    <p id="mas">¿Quieres más?</p>
                    <button id="projects"><Link to="/projects">Proyectos</Link></button>
                    </div>
                    <div className="contact-me">
                    <img src={cami} alt=""></img>
                  </div>
                </div>          
)
}

export default Home;