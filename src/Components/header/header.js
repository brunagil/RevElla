import React, { Component } from 'react';
import Link from '../../Components/form/link'
import './header.css';

class Animation extends Component {
  render() {
    return(
        <header>
        <div className="header-text">
          <div className= "header-text" {...this.props.className}>
            <h1 className="header__banner-title">{this.props.title}></h1>
            <h2 className = "header__banner-subtitle"></h2>
          <div className = "header__button">
            <Link smooth to='/form'
                    className = "btn btn__home_cta"> Faça uma denúncia 
            </Link>
          </div>
         </div>
      </div>
    </header>
     )
   }
}
export default Animation

/* <header className = "header">
<div className = "header__banner">
    <h1 className = "header__banner-title"> 
        Você se sente segura no seu ambiente de trabalho?
    </h1>
    <h2 className = "header__banner-subtitle">
        Exponha anonimamente situações de assédios, machismo e insegurança no seu ambiente de trabalho            
    </h2>
    <div className = "header__button">
    <Link smooth to='/form'
        className = "btn btn__home_cta"> Faça uma denúncia 
    </Link>
    </div>
</div>
</header> */