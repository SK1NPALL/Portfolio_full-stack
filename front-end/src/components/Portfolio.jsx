import React, { useState } from 'react'
import AboutMe from './Home-page/AboutMe'
import Project from './Home-page/Project'
import Activities from './Home-page/Activities'
import NavBar from './Home-page/NavBar'
import Contact from './Home-page/Contact'

function Portfolio() {

    return (
        <>  

            {/* main */}
            <main className='bg-[url(C:\Users\max09\Desktop\coding\web\github\Portfolio_full-stack\front-end\src\components\image\bg-image-2.png)] bg-fixed bg-top bg-cover bg-opacity-30 '>
                <NavBar/>
                <AboutMe />
                <Project />
                <Activities/>

            </main>

            <Contact/>
        </>
    )
}

export default Portfolio