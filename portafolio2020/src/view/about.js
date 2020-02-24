import React from 'react';
import './about.css';
import cv from '../img/cv_camilamaira.pdf';

const About = () => {
    return (

        <div className="about-inside">
        
            <p>Soy front-end developer y diseñadora gráfica. 
                Me entusiasma mezclar estas dos disciplinas en interacciones más visuales como 
                el código creativo y las diversas posibilidades de interacción multimodal que abre 
                la programación. Me apasiona todo lo que promueva la experimentación, la curiosidad y 
                la creatividad. Estoy en constante búsqueda de nuevas herramientas y lenguajes que 
                sumar a mi trayectoria profesional.
            </p>

            <section>
                <h4>TECNOLOGÍAS</h4>
                <p>Javascript</p>
                <p>React</p>
                <p>CSS</p>
                <p>·</p>
                <p>Adobe Creative Suite</p>
                <p>Indesign · Photoshop · Premiere Pro · After Effects</p>
                <p>Touchdesigner</p>
                <p>Hydra</p>
            </section>

            <a href={cv} target="_blank" rel="noopener noreferrer">
            <button>Descarga mi CV</button></a>

        </div>
    )


}

export default About;