import React from 'react'
import { Link } from 'react-router'

function AboutmeEdit() {
    return (
        <>
            <div className='container p-20 text-2xl w-130 '>

                <h1 className='text-4xl my-3'>About Me Edit</h1>

                <div className='grid grid-rows-3 '>

                    <form className='row-span-2'>

                        <p>Image : <input type="file" accept="image/*" className='bg-gray-200 hover:bg-gray-300' /> </p>
                        <p>Info : <textarea className='border h-50 w-full resize-none text-lg'placeholder='Enter text'></textarea></p>
                        <input type="submit" className='p-2 bg-gray-100 my-3 hover:bg-gray-200 text-lg'/>

                    </form>

                    <Link to={'/edit'} className='bg-gray-200 hover:bg-gray-300 p-1 w-50 text-lg h-10'>Go back to edit page</Link>

                </div>
            </div>
        </>
    )
}

export default AboutmeEdit