import React from 'react'
import './Paje.sass'
export default ({ name, children})  => {
    return <section className={`page page--${name}`}>
    <div className="page__container">
        {children}
    </div>
</section>
}