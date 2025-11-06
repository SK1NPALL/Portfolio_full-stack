import React from 'react'
import { useState } from 'react'

function AboutMe() {

    // aboutme
    const [img_aboutme, setImg_aboutme] = useState('https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/358443385_820188826141721_5999428843989950380_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GLqH7mMGMnoQ7kNvwGEHBnS&_nc_oc=Adlfslga-QR9TXNUcF5yMZRQJEh79DarkGl9bXx1sp-ZfPiHIpPGGjjN_76BWDKQkOVObC_e6WnpcPYviYpM3KiR&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&_nc_gid=itzHdmP4QPgtT19eMSa6_g&oh=00_Afh3MjiJn2A0-9mCOrTdGMYt-qwjoKm_iqEugAIzNVzrlw&oe=6910EA0C')
    const [text_aboutme, setText_aboutme] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate ex commodi repudiandae, reiciendis beatae eum fugiat impedit laudantium quas magni autem quae quaerat velit itaque vero nesciunt nam fuga?')


    return (
        <>
            {/* About me */}
            <article className='bg-slate-200 h-130' >

                <div className='container mx-auto w-290'>
                    <h1 className='text-4xl p-4 pt-10 text-slate-500'><b>About Me</b></h1>
                    <div className='flex gap-10 items-center'>
                        <img className="lg:w-100 p-7 md:w-90" src={img_aboutme} alt="my_picture" />
                        <p className='text-2xl text-slate-500'>{text_aboutme}</p>
                    </div>
                </div>

            </article>

        </>
    )
}

export default AboutMe