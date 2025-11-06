import React, { useState } from 'react'
import AboutMe from './Home-page/AboutMe'
import Project from './Home-page/Project'
import Activities from './Home-page/Activities'
import NavBar from './Home-page/NavBar'
import Contact from './Home-page/Contact'

function Portfolio() {

    return (
        <>
            
            <NavBar/>

            {/* main */}
            <main>

                <AboutMe />
                <Project />
                <Activities/>

            </main>

            <Contact/>
        </>
    )
}

export default Portfolio