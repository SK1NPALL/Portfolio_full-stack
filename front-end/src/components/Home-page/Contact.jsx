import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'

function Contact() {

    //contact
    const [email, setEmail] = useState('idontknow@emmmm.com')
    return (
        <>

            {/* contact */}
            <footer className='flex items-center h-20' id='cont'>

                <div className='flex gap-10 text-lg mx-auto'>

                    <h1 className=''>Email: {email}</h1>
                    <p className=''>Create by : SK1NPALL</p>
                    <Link to="edit" className='hover:text-blue-300' target='_blank'>admin</Link>

                </div>

            </footer>

        </>
    )
}

export default Contact