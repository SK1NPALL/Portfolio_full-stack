import React from 'react'

function FormTemp({ textH, setTextH, textInf, setTextInf, link, setLink, setImgHandle, doProcess, status, id }) {
    return (
        <>

            <form className='grid gap-5 text-3xl my-5'
                action="http://localhost:8000/uploads"
                method="post"
                encType="multipart/form-data"
                onSubmit={status === 'edit' ? () => doProcess(id) : doProcess}
            >

                {/* image */}
                <p>Picture : <input type="file"
                    className='border text-lg '
                    onChange={setImgHandle}
                    accept='image/*'
                    name='avatar'
                /></p>

                {/* head text */}
                <p>Topic : <input
                    type="text"
                    className='border text-lg p-1 w-80'
                    value={textH}
                    onChange={(e) => setTextH(e.target.value)}
                    placeholder='Enter topic' /></p>

                {/* information */}
                <p>Information : <textarea
                    className='border w-100 resize-none text-lg p-1 h-50 '
                    value={textInf}
                    onChange={(e) => setTextInf(e.target.value)}
                    placeholder='Enter information'
                /></p>

                {/* link */}
                <p>Link : <input
                    type="text"
                    className='border text-lg p-1 '
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder='Enter link' /></p>

                {/* submit */}
                <input
                    type="submit" value={'Confirm'}
                    className='bg-green-100 px-4 py-2 hover:bg-green-200 font-bold text-green-500' />

            </form>

        </>
    )
}

export default FormTemp