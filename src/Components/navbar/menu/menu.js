import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './menu.css'

const Menu = () => (
    <div>
      <navbar>
        <ul className = "menu__list">
          <li>
            <Link smooth to="#howItWorks"
                className = "menu__list-item" >Como funciona</Link>
          </li>
          <li>
            <Link smooth to="#dataAbout"
                className = "menu__list-item" >Dados</Link>
          </li>
          <li>
            <Link smooth to="#testemonies"
                className = "menu__list-item" >Testemunhas</Link>
          </li>
          <li>
            <Link smooth to='/denuncia'
                className = "menu__list-item" >Denuncie</Link>
          </li>
        </ul>
      </navbar>
    </div>
);

export default Menu;



