import React from 'react'
import './Page.sass'

export default ({ name, children})  => {
    return <section className={`page page--${name}`}>
    <div className="page__container">
        {children}
    </div>
</section>
}