import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router'
import { useEffect } from 'react'

function AboutmeEdit() {

    const [img, setImg] = useState('')
    const [info, setInfo] = useState('')
    const [text, setText] = useState('')

    useEffect(() => {

        fetchAPI()

    },[])

    useEffect(() => {

        console.log(img)

    },[img])

    const setImageHandle = (e) => {

        setImg(e.target.files[0].name)

    }

    // fetch data

    const fetchAPI = async() => {

        try{

            const response = await axios.get('http://localhost:8000/aboutme')

            setInfo(response.data.info[0].info)


        }catch(error) {

            console.log('Something went wrong.' + error.message)

        }

    }

    const updateAboutme = async () => {
        let response = null;

        try {
            
            response = await axios.put('http://localhost:8000/aboutme/put', { img: img, info: info })

            console.log('Update complete!', response.data)
            setText('Update complete!')

        } catch (error) {

            console.log('Something went wrong', error.message)
            setText(error.message)

        }

    }

    return (
        <>
            <div className='container p-20 text-2xl w-130 '>



                <h1 className='text-4xl my-3'>About Me Edit</h1>

                <div className='grid grid-rows-3 '>

                    <form  
                    className='row-span-2' 
                    onSubmit={updateAboutme}>

                        <p>Image :
                            
                            <input type="file" 
                            onChange={setImageHandle} 
                            accept='image/*'
                            className='border'
                            /></p>

                        <p>Info :
                            <textarea

                                value={info}
                                onChange={e => setInfo(e.target.value)}
                                className='border h-50 w-full resize-none text-lg'
                                placeholder='Enter information'>

                            </textarea></p>
                        <input type="submit" className='p-2 bg-gray-100 my-3 hover:bg-gray-200 text-lg' value={'Update'}/>

                    </form>

                    <Link to={'/edit'} className='bg-gray-200 hover:bg-gray-300 p-1 w-50 text-lg h-10'>Go back to edit page</Link>
                    <p className='text-red-600'>{text}</p>

                </div>
            </div>
        </>
    )
}

export default AboutmeEdit