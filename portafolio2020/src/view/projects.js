import React from 'react';
import './projects.css';
import pruebauno from '../img/prueba-01.jpg';


const Projects = () => {

    return (

        <div className="project-container">

            <div className="project-inside">
                <img src={pruebauno} alt="BQ" />

                <div className="inside-info">
                    <h3>Burguer Queen</h3>
                        <p>este proyecto blablabla
                        <br />
                        react, css</p>
                        <p className="tecnologias">react, css, juanito</p>
                            <button>IR</button>
                </div>
            </div>

            <div className="project-inside-right">
            <img src={pruebauno} alt="BQ" />
            <div className="inside-info">
            <h3>burguer queen</h3>
                    <p>este proyecto blablabla
                        <br />
                        react, css</p>
                    <p className="tecnologias">react, css, juanito</p>
                    <button>IR</button>
                </div>
            </div>

            <div className="project-inside">
            <img src={pruebauno} alt="BQ" />
            <div className="inside-info">
            <h3>burguer queen</h3>
                    <p>este proyecto blablabla
                        <br />
                        react, css</p>
                    <p className="tecnologias">react, css, juanito</p>
                    <button>IR</button>
                </div>
            </div>

            <div className="project-inside">
            <img src={pruebauno} alt="BQ" />
            <div className="inside-info">
            <h3>chove.chuva</h3>
                    <p>este proyecto blablabla
                        <br />
                        react, css</p>
                    <p className="tecnologias">react, css, juanito</p>
                    <button>IR</button>
                </div>
            </div>





        </div>
    )

}

export default Projects;