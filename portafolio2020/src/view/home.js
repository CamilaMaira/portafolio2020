import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (

            <div className="home">
                <div className="home-inside">
                    <p>diseño gráfico</p>
                    <p>& fron-ent developer</p>
                    <p id="mas">¿Quieres más?</p>
                    <p id="projects"><Link to="/projects">Proyectos</Link></p>
                </div>
            
                <div className="contact-me">
                
             </div>
        </div>
        
)
}

export default Home;