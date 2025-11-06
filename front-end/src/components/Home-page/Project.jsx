import React from 'react'
import { useState } from 'react'

function Project() {

    // project
    const [info_project, setInfo_project] = useState([{

        img: 'https://img.itch.zone/aW1hZ2UvMzc3NzM2OC8yMjQ3ODYwMC5qcGc=/347x500/yrEN1e.jpg',
        text_header: 'Unity 2D game',
        text_info: 'You wake up in your home—disoriented, alone, and with no memory of who you are. Before you can gather your thoughts, a call comes in: your agency needs you to investigate a mysterious murder case that no one has been able to crack.',
        github_url: 'https://github.com/AnMayVaa/The_Mystery'

    }, {

        img: 'https://img.itch.zone/aW1hZ2UvMzc3NzM2OC8yMjQ3ODYwMC5qcGc=/347x500/yrEN1e.jpg',
        text_header: 'Unity 2D game',
        text_info: 'You wake up in your home—disoriented, alone, and with no memory of who you are. Before you can gather your thoughts, a call comes in: your agency needs you to investigate a mysterious murder case that no one has been able to crack.',
        github_url: 'https://github.com/AnMayVaa/The_Mystery'

    }])
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

export default Project