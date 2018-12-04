import React from 'react'
import './menu.css'
// import { slide as Menu } from 'react-burger-menu'

// class Example extends React.Component {
//   showSettings (event) {
//     event.preventDefault();
//   }

//   render () {
//     return (
//       <Menu>
//         <a id="howItWorks" className="menu__list-item" href="/">Como funciona</a>
//         <a id="data" className="menu__list-item" href="/about">Dados</a>
//         <a id="contributions" className="menu__list-item" href="/contact">Depoimentos</a>
//         <a id="contributions" className="menu__list-item" href="/contact">Denuncie</a>
//         <a onClick={ this.showSettings } className="menu__list-item" href="">Menu</a>
//       </Menu>
//     );
//   }
// }

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