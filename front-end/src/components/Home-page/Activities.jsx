import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function Activities() {

    // fetch API

    const fetchAPI = async() => {

        try{
            
            const response = await axios.get('http://localhost:8000/activ/get')



            setInfo_Activities(response.data.info)


        }catch(error) {

            console.log('Activities, Something went wrong' , error.message)

        }

    }

    useEffect(() => {

        fetchAPI()

    },[])

    // Activities

    const [info_activities, setInfo_Activities] = useState([
        {

        }
    ])
    return (
        <>

            {/* Activities */}
            <article className='' id='acti'>

                <div className='p-10'>

                    <h1 className='text-4xl text-center text-slate-400'><b>Activities</b></h1>

                    <div className='grid lg:grid-cols-2 gap-20 my-10'>

                        {info_activities.map((n, i) => (

                            <>
                                <div className='grid grid-cols-2 border-2 border-slate-300 p-5 gap-5 items-center'>

                                    <img key={i} src={`http://localhost:8000/uploads/${n.img}`} className="w-90" alt="" />

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

export default Activities