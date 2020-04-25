import React from 'react'
import './Footer.sass'
import foterLogo1 from '../img/logo.png'
import foterLogo2 from '../img/logo.png'
import foterLogo3 from '../img/logo.png'

export default () => {

    return <div className='footer'>
        <div className='footer__logos'>
            <img alt='logo' src={foterLogo1}/>
            <img alt='logo' src={foterLogo2}/>
            <img alt='logo' src={foterLogo3}/>
        </div>
        <div className='footer__contact'>
            <p>carrer i direccio</p>
            <p>Número de telefon</p>
        </div>
    </div>
}