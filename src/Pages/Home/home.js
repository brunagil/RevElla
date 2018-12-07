import React from 'react'
import Navbar from '../../Components/navbar'
import Container from '../../Components/container'
import Footer from '../../Components/footer'
import Button from '../../Components/button'
import DemoCarousel from '../../Components/carousel'
import about_img from '../../Images/form-about.jpg'
import feedback_img from  '../../Images/feedback.png'
import './home.css'

const Home = () => (
    <React.Fragment>
    <Navbar />
        <header>
            <div className = "header__banner">
                <div className = "header__banner-text">
                    <h1 className = "header__banner-title"> 
                        Sua voz rompendo qualquer silêncio  
                    </h1>
                    <h2 className = "header__banner-subtitle">
                        Exponha anonimamente situações de assédios, machismo e abusos no seu ambiente de trabalho            
                    </h2>
                </div>
            </div>
                <div className = "header__button">
                <a href='/form'
                    className = "btn btn__home_cta"> Faça uma denúncia 
                </a>
                </div>
        </header>

        <section className = "how-It-Works">

            <div className = "about__box-title">
                <h2 className = "about__title" id="howItWorks">Como o RevElla funciona?</h2>
            </div>

            <div className = "about__box-infos1">

                <div className="info__img">
                    <img src={about_img}
                        alt="Foto de uma tela do formulário, onde as mulheres podem expor questões de assédio e machismo no trabalho" 
                        className="info__img-print" 
                        />
                </div>

                <div className="info__step-1">
                    <h4 className="info__step-title">Sua história está segura com a gente</h4>
                    <p className="info__step-text">A RevElla nasceu como um canal para relatar situações de assédio, machismo e situações de abuso no mercado de trabalho.</p>

                </div>
            </div>
            <div className="about__box-infos2">

                <div className="info__step-1">
                    <h4 className="info__step-title">Conhecendo a cultura organizacional de verdade</h4>
                    <p className="info__step-text">Com essas informações, criamos e analisamos os dados, expondo empresas com um ambiente inseguro. Cobrar soluções é nosso próximo passo</p>
                </div>

                <div className="info__img">
                    <img 
                        src={feedback_img}
                        alt="Ilustração de uma planilha de feedback em uma prancheta, próximo a uma xícara de café, de um celular apoiado em papéis e de um notebook, todos vistos de cima" 
                        class="info__img-print" 
                    />
                </div>
            </div>

        </section>

        <section className = "about-data">
            <div className = "data-box__title" id="dataAbout">
                <h2 className = "data__title">Por que precisamos expor essa realidade?</h2>
            </div>
            <div className = "about__data-boxes">
                <div>
                    <h2 className="data__title__highlight">52%</h2>
                    <p className="data__text__imp">das mulheres já sofreram algum tipo de assédio sexual no ambiente de trabalho.</p>
                </div>

                <div>
                    <h2 className="data__title__highlight">87,5 %</h2>
                    <p className="data__text__imp">das mulheres que sofrem assédio não denunciam o seu agressor.</p>
                </div>

                <div>
                    <h2 className="data__title__highlight">4,6 segundos</h2>
                    <p className="data__text__imp">é o tempo de 1 mulher se tornar uma nova vítima de assédio no trabalho, no Brasil.</p>
                </div>
            </div>
        </section>
    
    <section className = "carousel-testemonies">
        <div className = "section-box__title" id="testemonies">
            <h2 className = "depo__title">Vozes que não se calaram</h2>
        </div>
    <DemoCarousel/>
    </section>
    <Footer />
</React.Fragment>

)

export default Home
