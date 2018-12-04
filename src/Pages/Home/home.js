import React from 'react'
import Navbar from '../../Components/navbar'
import Container from '../../Components/container'
import Footer from '../../Components/footer'
// import print_1 from '../../Images'
// import print_2 from '../../Images'
import './home.css'

const Home = (props) => (
    <React.Fragment>
    <Navbar />
        <header className = "header">
            <div className = "header__banner">
                <h1 className = "header__banner-title"> 
                    Você se sente segura no seu ambiente de trabalho?
                </h1>
                <h2 className = "header__banner-subtitle">
                    Exponha anonimamente situações de assédios, machismo e insegurança no seu ambiente de trabalho            
                </h2>
            <div className = "header__button">
                <a 
                    className = "header__button-cta btn"
                    href=""
                > Faça uma denúncia</a>
            </div>
            </div>
        </header>

    <Container>
        <section className = "about-the-project">
            <div className = "section-box__title">
                <h2 className = "section__title">Como isso funciona?</h2>
            </div>
            <div className = "about__info">
                <div className="info__img">
                    <img 
                        // src={print_1} 
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
                        // src={print_2} 
                        alt="Foto de outro print do form que eu ainda não fiz AAAAAAAAAAAA" 
                        class="info__img-print" 
                        />
                </div>

            </div>
        </section>

        <section className = "about-data">
            <div className = "section-box__title">
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
    </Container>

    <Footer />
</React.Fragment>

)

export default Home