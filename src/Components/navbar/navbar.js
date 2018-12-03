import React from 'react' 
import Menu from './menu'
import logo from './img-navbar/logo-revella.png'
import './navbar.css'

const Navbar = (props) => (
    <nav className = "navbar">
        <img
            className = 'navbar__logo'
            src = {logo}
            alt = 'logo do projeto RevElla, de fundo de cor azul e letras brancas'
        />
        <Menu {...props} />
    
    </nav>
)

export default Navbar


