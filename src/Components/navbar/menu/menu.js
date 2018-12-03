import React from 'react'
import './menu.css'
import { slide as Menu } from 'react-burger-menu'

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }


  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}


const Menu = (props) => (
    <div>
        <ul className = "menu__list">
            <li className = "menu__list-item">
                Como funciona
            </li>

            <li className = "menu__list-item">
                Dados
            </li>

            <li className = "menu__list-item">
                Depoimentos
            </li>

            <li className = "menu__list-item">
                Denuncie
            </li>
        </ul>
    </div>
)

export default Menu