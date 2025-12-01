import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function AboutMe() {

    const fetchAPI = async () => {

        try {

            const response = await axios.get('http://localhost:8000/aboutme')
            
            console.log('ABOUTME,fetch api complete!')

            setImg_aboutme(response.data.info[0].img)
            setText_aboutme(response.data.info[0].info)
            

        } catch (error) {

            console.log('Some thing went wrong' + error.message)

        }

    }

    //Api request 
    useEffect(() => {

        fetchAPI()

    },[])


    // aboutme
    const [img_aboutme, setImg_aboutme] = useState(null)
    const [text_aboutme, setText_aboutme] = useState(null)

    return (
        <>

            {/* About me */}
            <article className='h-130 py-10' >

                <div className='container mx-auto w-290'>
                    
                    <div className='flex gap-10 items-center'>
                        <img className="lg:w-100 p-7 md:w-90" src={`http://localhost:8000/uploads/${img_aboutme}`} alt="my_picture" />
                        <p className='text-2xl text-slate-500'>{text_aboutme}</p>
                    </div>
                </div>

            </article>

        </>
    )
}

export default AboutMe