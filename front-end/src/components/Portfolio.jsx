import React from 'react'

function Portfolio() {
    return (
        <>
            <nav className='shadow-lg'>
                <div className='container mx-auto h-20 items-center flex justify-between'>

                    <h1 className='text-3xl'><b>Portfolio</b></h1>

                    <div className='flex justify-end gap-6'>

                        <a href="#" className='hover:text-red-500' >About me</a>
                        <a href="#" className='hover:text-red-500' >Project</a>
                        <a href="#" className='hover:text-red-500' >Activities</a>
                        <a href="#" className='hover:text-red-500' >Contact</a>

                    </div>

                </div>
            </nav>

            <main>

                <article className='my-4 bg-gray-100'>

                    <div className='container mx-auto w-300'>
                        <h1 className='text-2xl p-4'><b>About Me</b></h1>
                        <div className='flex gap-10 items-center'>
                            <img className="w-90 " src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/358443385_820188826141721_5999428843989950380_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GLqH7mMGMnoQ7kNvwGEHBnS&_nc_oc=Adlfslga-QR9TXNUcF5yMZRQJEh79DarkGl9bXx1sp-ZfPiHIpPGGjjN_76BWDKQkOVObC_e6WnpcPYviYpM3KiR&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&_nc_gid=itzHdmP4QPgtT19eMSa6_g&oh=00_Afh3MjiJn2A0-9mCOrTdGMYt-qwjoKm_iqEugAIzNVzrlw&oe=6910EA0C" alt="" />
                            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate ex commodi repudiandae, reiciendis beatae eum fugiat impedit laudantium quas magni autem quae quaerat velit itaque vero nesciunt nam fuga?</p>
                        </div>
                    </div>

                </article>

                <article>

                    <div>

                        <h1>Project</h1>

                    </div>

                </article>

            </main>

        </>
    )
}

export default Portfolio