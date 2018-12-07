import React from 'react';
import './footer.css'
import logo_twitter from '../../Images/twitter.png'
import logo_facebook from '../../Images/facebook.png'

const Footer = () => (
        <footer className="footer" id="contato">
            <div>
                <ul className="footer__socialmedia">
                <li>
                <a href="https://twitter.com" 
                    rel="noopener noreferrer"
                    className="footer__twitter">
                <img 
                    src={logo_twitter} 
                    alt="Logotipo do Twitter" />
                </a>
            </li>
            <li>
                <a href="https://facebook.com" 
                    className="footer__facebook">
                <img 
                    src={logo_facebook} 
                    alt="Logotipo do Facebook"/>
                </a>
            </li>
            </ul>
        </div>

            <div className = "footer__copyright">
            <p>Copyright © Bruna Gil 2018</p>
            </div>
        </footer>
)

export default Footer