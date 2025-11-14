import React from 'react'

function FormTemp() {
    return (
        <>

            <form className='grid gap-5 text-3xl my-5'>

                {/* image */}
                <p>Picture : <input type="file"
                    className='border text-lg '
                    accept='image/*' 
                    /></p>

                {/* head text */}
                <p>Topic : <input
                    type="text"
                    className='border text-lg p-1 w-80'
                    placeholder='Enter topic' /></p>

                {/* information */}
                <p>Information : <textarea
                    className='border w-100 resize-none text-lg p-1 h-50 '
                    placeholder='Enter information'
                /></p>

                {/* link */}
                <p>Link : <input
                    type="text"
                    className='border text-lg p-1 '
                    placeholder='Enter link' /></p>

                {/* submit */}
                <input
                    type="submit" value={'Confirm'}
                    className='bg-blue-100 px-4 py-2 hover:bg-blue-200 font-bold text-blue-900' />

            </form>

        </>
    )
}

export default FormTemp