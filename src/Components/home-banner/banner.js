import React from 'react'
import Container from '../container'
import './banner.css'

const Banner = (props) => (
    <header>
        <Container>
            <div className = "header__banner">
                <h1 className = "header__banner-title">
                    {props.title}
                
                </h1>

        </div>


        </Container>



    </header>

)

export default Banner