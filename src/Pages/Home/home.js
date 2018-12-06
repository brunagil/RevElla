import React from 'react'
import Navbar from '../../Components/navbar'
import Container from '../../Components/container'
import Footer from '../../Components/footer'
import Button from '../../Components/button'
import DemoCarousel from '../../Components/carousel'
import './home.css'

const Home = () => (
    <React.Fragment>
    <Navbar />
        <header>
            <div className = "header__banner">
                <div className = "header__banner-text">
                    <h1 className = "header__banner-title"> 
                        Você se sente respeitada no seu trabalho?
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

        <section className = "about-the-project">
            <div className = "section-box__title">
                <h2 className = "section__title" id="howItWorks">Como isso funciona?</h2>
            </div>

            <div className = "about__info">
                <div className="info__img">
                    <img 
                        alt="Foto de uma tela do formulário, onde as mulheres podem expor questões de assédio e machismo no trabalho" 
                        className="info__img-print" 
                        />
                </div>

                <div className="info__step-1">
                    <h4 className="info__step-title">É MUITO FACIL</h4>
                    <p className="info__step-text">aisdhsuihdiosahdoisaiho</p>
                </div>
            </div>

                <div class="about__info">

                <div class="info__step-1">
                    <h4 class="info__step-title">É MAIS DO QUE FÁCIL</h4>
                    <p class="info__step-text">ASPODJAPOSDJPOSAJOPD</p>
                </div>

                <div class="info__img">
                    <img 
                        alt="Foto de outro print do form que eu ainda não fiz AAAAAAAAAAAA" 
                        class="info__img-print" 
                        />
                </div>
            </div>
        </section>

        <section className = "about-data">
            <div className = "section-box__title" id="dataAbout">
                <h2 className = "section__title">Por que precisamos expor essa realidade?</h2>
            </div>
            <div className = "about__data-boxes">
                <div>
                    <h2>90%</h2>
                    <p>das mulheres aiosdhoaisdhisoahidoasohidhosia</p>
                </div>

                <div>
                    <h2>90%</h2>
                    <p>das mulheres aiosdhoaisdhisoahidoasohidhosia</p>
                </div>

                <div>
                    <h2>90%</h2>
                    <p>das mulheres aiosdhoaisdhisoahidoasohidhosia</p>
                </div>
            </div>
        </section>
    
    <section className = "carousel-testemonies">
        <div className = "section-box__title" id="testemonies">
            <h2 className = "section__title">Vozes que não se calaram</h2>
        </div>
    <DemoCarousel/>
    </section>
    <Footer />
</React.Fragment>

)

export default Home
