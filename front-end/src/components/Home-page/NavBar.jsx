import React from 'react'

function NavBar() {
    
    return (
        <>

            {/* nav bar */}
            <nav className='sticky top-0 shadow-lg bg-gray-50'>
                <div className='container mx-auto h-25 items-center flex lg:justify-between md:justify-center md:gap-30'>

                    <h1 className='text-5xl italic text-slate-700'><b>Portfolio</b></h1>

                    <div className='flex justify-end gap-6 text-lg'>

                        <a href="#" className='hover:text-gray-300' >About me</a>
                        <a href="#proj" className='hover:text-gray-300' >Project</a>
                        <a href="#acti" className='hover:text-gray-300' >Activities</a>
                        <a href="#cont" className='hover:text-gray-300' >Contact</a>

                    </div>

                </div>
            </nav>

        </>
    )
}

export default NavBar