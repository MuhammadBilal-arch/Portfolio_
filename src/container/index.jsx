import React from 'react'
import { About } from './about'
import { Contact } from './contact'
import { Home } from './Home'
import { Projects } from './projects'
import Services from './services'

export const Main = () => {
    return (
        <React.Fragment>
            <Home />
            <About />
            <Projects />
            <Services />
            <Contact/>
        </React.Fragment>
    )
}
