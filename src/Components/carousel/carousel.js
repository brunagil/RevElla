import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import background_img_carousel from '../../Images/banner-carousel.png'
import './carousel.css'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel 
                showThumbs={false} 
                showStatus={false} 
                autoPlay={true} 
                width={'700px'}>
                
                <div className="carousel">
                    <img src={background_img_carousel} />
                    <p className="legend">"Ele continuou insistindo mesmo eu deixando claro que não tinha interesse. Ele me chamava, e eu não tinha como negar, porque poderia ser sobre trabalho. Mas, quando eu chegava, ele fechava a porta e falava que queria me comprar uma joia, me levar para almoçar. Chorava muito de raiva. Fui para a terapia, fazia massagem, tomava floral, tudo para me acalmar. Chegou a um ponto em que me via fugindo dele. Só acabou quando ele se aposentou." - Empresa LalaLand</p>
                </div>
                <div>
                    <img src={background_img_carousel} />
                    <p className="legend">"Começou a me chamar com frequência na sua sala para explicar pequenos atrasos e horas extras, algo que nunca tinha feito. Como todos os funcionários trabalhavam numa mesma sala, as pessoas começaram me perguntar o que estava acontecendo. Algumas até se afastaram de mim para não virarem um alvo também." - Empresa Ciclani</p>
                </div>
                <div>
                    <img src={background_img_carousel} />
                    <p className="legend">"Ela me tratava muito mal durante toda a semana e, na sexta-feira, me dava um presente para compensar." - Empresa Fulany</p>
                </div>
            </Carousel>
        )
    }
}

export default DemoCarousel
