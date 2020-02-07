import React from 'react';
import './projects.css';
import pruebauno from '../img/prueba-01.jpg';
import rickandmorty from '../img/rickandmorty.jpg'
import chuvalivre from '../img/chuvalivre2.gif'


const Projects = () => {

    return (

        <div className="project-container">

            <div className="project-inside">
                <img src={pruebauno} alt="BQ" />

                <div className="inside-info">
                    <h3>GO!</h3>
                        <p>Red social para conectar personas que buscan hacer deportes en compañía y generalmente no cuentan con quien hacerlo.  </p>
                        <p className="tecnologias">Javascript / Firebase / Design Responsive</p>

                    <div className="project-buttons">
                        <a href="https://camilamaira.github.io/SCL011-data-lovers/src/index.html/" target="_blank" rel="noopener noreferrer">
                        <button>Demo</button></a>
                    
                        <a href="https://github.com/CamilaMaira/SCL011-Social-Network/" target="_blank" rel="noopener noreferrer">
                        <button>Github</button></a>
                    </div>
                </div>
            </div>

            <div className="project-inside-right">
                <img src={rickandmorty} alt="RAM" />
            
                <div className="inside-info">
                    <h3>Rick & Morty</h3>
                    <p>Página web donde se pueden visualizar un conjunto de datos de Rick & Morty junto a trabajo de jerarquía de la información y una interfaz intuitiva.</p>
                        
                    <p className="tecnologias">Javascript / API / CSS</p>

                    <div className="project-buttons">
                    <a href="https://camilamaira.github.io/SCL011-data-lovers/src/index.html" target="_blank" rel="noopener noreferrer">
                        <button>Demo</button>
                    </a>
                    
                    <a href="https://github.com/CamilaMaira/SCL011-data-lovers/" target="_blank" rel="noopener noreferrer">
                        <button>Github</button></a>
                    </div>

                </div>
            </div>

            <div className="project-inside">
            <img src={pruebauno} alt="CL"/>
            <div className="inside-info">
            <h3>Burger Queen</h3>
                    <p>Aplicación para tablets desarrollada para restaurantes con la finalidad de agilizar el proceso de toma de pedidos.</p>
                        
                    <p className="tecnologias">React / Firebase</p>

                    <div className="project-buttons">
                    <a href="https://camilamaira.github.io/SCL011-data-lovers/src/index.html/" target="_blank" rel="noopener noreferrer">
                        <button>Demo</button></a>
                    
                    <a href="https://github.com/CamilaMaira/SCL011-Burger-Queen" target="_blank" rel="noopener noreferrer">
                        <button>Github</button></a>
                    </div>

                </div>
            </div>

            <div className="project-inside-right">
            <img src={chuvalivre} alt="CL" />
        
            <div className="inside-info">
            <h3>chuva.livre</h3>
                    <p>Portafolio digital de material audiovisual con especial foco en visuales interactivas.</p>
                        <br />
                    <p className="tecnologias">Premiere Pro / After Effects / Touchdesigner / Hydra</p>
                    <div className="project-buttons">
                    <a href="https://www.instagram.com/chuva.livre/" target="_blank" rel="noopener noreferrer">
                        <button>Ir</button></a>
                        </div>
                
                </div>
            </div>
        </div>
    )

}

export default Projects;