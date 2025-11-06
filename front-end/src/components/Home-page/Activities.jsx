import React from 'react'
import { useState } from 'react'

function Activities() {

    // Activities

    const [info_activities, setInfo_Activities] = useState([
        {

            img: 'https://hackster.imgix.net/uploads/attachments/1462125/_nZSrwM084x.blob?auto=compress&w=1600&h=1200&fit=min&fm=jpg',
            text_header: 'Lecturer in FROM CODE TO CIRCUIT CAMP',
            text_info: 'You wake up in your home—disoriented, alone, and with no memory of who you are. Before you can gather your thoughts, a call comes in: your agency needs you to investigate a mysterious murder case that no one has been able to crack.',
            github_url: 'https://github.com/AnMayVaa/The_Mystery'

        }
    ])
    return (
        <>

            {/* Activities */}
            <article className='bg-slate-200' id='acti'>

                <div className='p-10'>

                    <h1 className='text-4xl text-center text-slate-400'><b>Activities</b></h1>

                    <div className='grid lg:grid-cols-2 gap-20 my-10'>

                        {info_activities.map((n, i) => (

                            <>
                                <div className='grid grid-cols-2 border-2 border-slate-300 p-5 gap-5 items-center'>

                                    <img key={i} src={n.img} className="w-90" alt="" />

                                    <div>

                                        <p className='text-2xl'>{n.text_header}</p><br />
                                        <p className=''>{n.text_info}</p><br />
                                        <a className='hover:text-blue-500' href={n.github_url}>View on github</a>

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