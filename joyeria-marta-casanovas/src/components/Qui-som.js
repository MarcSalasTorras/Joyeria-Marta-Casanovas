import React from 'react'
import './Qui-som.sass'
import slider1 from '../img/slider1.jpg'
import slider2 from '../img/slider2.jpg'
import slider3 from '../img/slider3.jpg'
import { Slide } from 'react-slideshow-image';

export default () => {

    const slideImages = [
        slider1,
        slider2,
        slider3
    ]

    const properties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }

    return < div className='quisom'>
        <div className='quisom__header'>
            <div className='quisom__header--filtro'>
                <h1>TALLER DE JOYERIA MARTA CASANOVAS</h1>
            </div>
        </div>
        <h3 className='quisom__definicio'>TOT Producte Artesanal</h3>
        <div className='quisom__body'>
            <ul className='quisom__llista'>
                <li>Disseny 3D</li>
                <li>Peces per encàrrec, dissenys personalitzats</li>
                <li>Col.lecions propies</li>
                <li>Compostures (arrenjaments)</li>
                <li>Valoracions de joies</li>
            </ul>
            <Slide className='quisom__slide' {...properties}>
                <div className="quisom__slide--1" style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                    <div className='img' style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                    </div>
                </div>
                <div className="quisom__slide--2">
                    <div className='img' style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                    </div>
                </div>
                <div className="quisom__slide--3">
                    <div className='img' style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                    </div>
                </div>
            </Slide>
        </div>
    </div>
}