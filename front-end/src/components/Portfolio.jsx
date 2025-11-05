import React, { useState } from 'react'

function Portfolio() {

    // aboutme
    const [img_aboutme, setImg_aboutme] = useState('https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/358443385_820188826141721_5999428843989950380_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GLqH7mMGMnoQ7kNvwGEHBnS&_nc_oc=Adlfslga-QR9TXNUcF5yMZRQJEh79DarkGl9bXx1sp-ZfPiHIpPGGjjN_76BWDKQkOVObC_e6WnpcPYviYpM3KiR&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&_nc_gid=itzHdmP4QPgtT19eMSa6_g&oh=00_Afh3MjiJn2A0-9mCOrTdGMYt-qwjoKm_iqEugAIzNVzrlw&oe=6910EA0C')
    const [text_aboutme, setText_aboutme] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate ex commodi repudiandae, reiciendis beatae eum fugiat impedit laudantium quas magni autem quae quaerat velit itaque vero nesciunt nam fuga?')

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

    // Activities

    const [info_activities, setInfo_Activities] = useState([
        {

            img: 'https://hackster.imgix.net/uploads/attachments/1462125/_nZSrwM084x.blob?auto=compress&w=1600&h=1200&fit=min&fm=jpg',
            text_header: 'Lecturer in FROM CODE TO CIRCUIT CAMP',
            text_info: 'You wake up in your home—disoriented, alone, and with no memory of who you are. Before you can gather your thoughts, a call comes in: your agency needs you to investigate a mysterious murder case that no one has been able to crack.',
            github_url: 'https://github.com/AnMayVaa/The_Mystery'

        }
    ])

    //contact
    const [email , setEmail] = useState('idontknow@emmmm.com')

    return (
        <>  
            {/* nav bar */}
            <nav className='shadow-lg'>
                <div className='container mx-auto h-25 items-center flex lg:justify-between md:justify-center md:gap-30'>

                    <h1 className='text-5xl '><b>Portfolio</b></h1>

                    <div className='flex justify-end gap-6 text-lg'>

                        <a href="#" className='hover:text-red-500' >About me</a>
                        <a href="#proj" className='hover:text-red-500' >Project</a>
                        <a href="#acti" className='hover:text-red-500' >Activities</a>
                        <a href="#" className='hover:text-red-500' >Contact</a>

                    </div>

                </div>
            </nav>

            {/* main */}
            <main>

                {/* About me */}
                <article className='mt-4 bg-gray-100 h-130'>

                    <div className='container mx-auto w-290'>
                        <h1 className='text-3xl p-4 pt-10'><b>About Me</b></h1>
                        <div className='flex gap-10 items-center'>
                            <img className="w-90 " src={img_aboutme} alt="my_picture" />
                            <p className='text-lg'>{text_aboutme}</p>
                        </div>
                    </div>

                </article>

                {/* Project */}
                <article className='bg-slate-300 ' id='proj'>

                    <div className='p-10'>

                        <h1 className='text-3xl text-center'><b>Project</b></h1>

                        <div className='grid grid-cols-2 gap-20 my-10'>

                            {info_project.map((n, i) => (

                                <>
                                    <div className='grid grid-cols-2 border-2 border-gray-400 p-5'>

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

                {/* Activities */}
                <article className='bg-slate-200' id='acti'>

                    <div className='p-10'>

                        <h1 className='text-3xl text-center'><b>Activities</b></h1>

                        <div className='grid grid-cols-2 gap-20 my-10'>

                            {info_activities.map((n, i) => (

                                <>
                                    <div className='grid grid-cols-2 border-2 border-gray-400 p-5'>

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

            </main>

            <footer className='flex items-center h-20'>

                <div className='flex gap-10 text-lg mx-auto'>

                    <h1 className=''>Email: {email}</h1>
                    <p className=''>Create by SK1NPALL</p>
                    <a href="#">for admin</a>

                </div>

            </footer>

        </>
    )
}

export default Portfolio