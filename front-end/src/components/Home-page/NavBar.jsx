import React from 'react'

function NavBar() {
    
    return (
        <>

            {/* nav bar */}
            <nav className='sticky top-0 shadow-lg bg-gray-50 opacity-80'>
                <div className='container mx-auto h-35 items-center flex lg:justify-between md:justify-center md:gap-30'>

                    <h1 className='font-light bg-linear-to-b from-white to-gray-400 bg-clip-text text-8xl text-transparent mx-10 opacity-100'><b>SK1NPALL</b></h1>

                    <div className='flex justify-end gap-6 text-lg'>

                        <a href="#" className='hover:text-gray-300' >ABOUT ME</a>
                        <a href="#proj" className='hover:text-gray-300' >PROJECT</a>
                        <a href="#acti" className='hover:text-gray-300' >ACTIVITIES</a>
                        <a href="#cont" className='hover:text-gray-300' >CONTACT</a>

                    </div>

                </div>
            </nav>

        </>
    )
}

export default NavBar