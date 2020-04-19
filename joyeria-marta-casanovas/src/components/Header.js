import React from 'react'
import './Header.sass'

export default ({goHome, goQuiSom, goColeccio, goDiseny, goContacte}) => {

    const handleHome  = (event) => {
        event.preventDefault()

        goHome()
    }
    
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

    return <div className='header'>
        <nav className='header__nav'>
            <button onClick={handleHome} >HOME</button>
            <button onClick={handleQuiSom} >QUI SOM?</button>
            <button onClick={handleColeccio} >CO·LECCIÓ PRÒPIA</button>
            <button onClick={handleDiseny} >DISSENYS PER ENCARREC</button>
            <button onClick={handleContacte} >CONTACTE</button>
        </nav>
    </div>
}