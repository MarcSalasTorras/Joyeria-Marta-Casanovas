import React from 'react'
import './Home.sass'
import logo from '../img/logo.png'

export default ({goQuiSom, goColeccio, goDiseny, goContacte}) => {

    const handleQuiSom  = (event) => {
        event.preventDefault()

        goQuiSom()
    }

    const handleColeccio  = (event) => {
        event.preventDefault()

        goColeccio()
    }

    const handleDiseny  = (event) => {
        event.preventDefault()

        goDiseny()
    }

    const handleContacte  = (event) => {
        event.preventDefault()

        goContacte()
    }

    return <div className='home'>
        <nav className='home__nav'>
            <button onClick={handleQuiSom} >QUI SOM?</button>
            <button onClick={handleColeccio} >CO·LECCIÓ PRÒPIA</button>
            <button onClick={handleDiseny} >DISSENYS PER ENCARREC</button>
            <button onClick={handleContacte} >CONTACTE</button>
        </nav>
        <div className='home__logo'>
            <img alt='logo' src={logo}/>
        </div>
    </div>
}