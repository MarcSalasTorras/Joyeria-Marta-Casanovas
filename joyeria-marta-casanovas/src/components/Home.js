import React from 'react'
import './Home.sass'
import logo from '../img/logo.png'

export default () => {

    return <div className='home'>
        <div className='home__logo'>
            <img alt='logo' src={logo}/>
        </div>
    </div>
}