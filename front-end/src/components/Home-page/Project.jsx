import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function Project() {

    // project
    const [info_project, setInfo_project] = useState([])

    // Fetch api

    const fetchAPI = async () => {

        try {

            const response = await axios.get('http://localhost:8000/project/get')

            console.log("PROJECT,fetch api complete!")

            setInfo_project(response.data.info)

        } catch (error) {

            console.log('Something went wrong.' + error.massege)

        }

    }

    //Do when ride
    useEffect(() => {

        fetchAPI()

    },[])

    return (
        <>
            {/* Project */}
            <article className='bg-slate-300 ' id='proj'>

                <div className='p-10'>

                    <h1 className='text-4xl text-center text-slate-500'><b>Project</b></h1>

                    <div className='grid lg:grid-cols-2 gap-20 my-10'>

                        {info_project.map((n, i) => (

                            <>
                                <div className='grid grid-cols-2 border-2 border-slate-400 p-5 gap-5 items-center'>

                                    <img key={i} src={n.img} className="w-90" alt="" />

                                    <div>

                                        <p className='text-2xl'>{n.text_head}</p><br />
                                        <p className=''>{n.text_info}</p><br />
                                        <a className='hover:text-blue-500' href={n.text_link} target='_blank'>View on github</a>

                                    </div>

                                </div>

                            </>
                        ))}

                    </div>

                </div>

            </article>

        </>
    )
}

export default Project