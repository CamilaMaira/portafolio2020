import React from 'react';
import './footer.css';
import githubLogo from '../img/github-alt-brands.svg';
import linkedinLogo from '../img/linkedin-in-brands.svg';


const Footer = () => {

    return (

        <div className="footer">
            <div className="footer-info">
                <p>me gusta el cafe</p>
                <p>+569 3235 8702</p>
            
                <div className="footer-logo">
                     <a href="https://github.com/CamilaMaira" target="_blank" rel="noopener noreferrer">
                     <img src={githubLogo} alt=""/></a>

                      <a href="https://linkedin.com/in/CamilaMaira" target="_blank"rel="noopener noreferrer">
                     <img src={linkedinLogo} alt=""/></a>
                 </div>
            </div>

            <div className="footer-mobile">
                <a href="https://github.com/CamilaMaira" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt=""/></a>

                <a href="https://linkedin.com/in/CamilaMaira" target="_blank" rel="noopener noreferrer">
                 <img src={linkedinLogo} alt=""/></a>
            </div>

            
        </div>
    )

}

export default Footer;