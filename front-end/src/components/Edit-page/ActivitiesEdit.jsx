import React from 'react'
import { Link } from 'react-router'
import FormTemp from './FormTemp'
import axios from 'axios'
import { useState, useEffect } from 'react'

function ActivitiesEdit() {
  const [data, setData] = useState([])
  const [editDisplay, setEditDisplay] = useState(null)
  const [addDisplay, setAddDisplay] = useState(false)

  // for file

  const [img, setImg] = useState('')
  const [textH, setTextH] = useState('')
  const [textInf, setTextInf] = useState('')
  const [link, setLink] = useState('')

  // message

  const [massege, setMassege] = useState('')


  // function file image handle

  const setImgHandle = (e) => {

    setImg(e.target.files[0].name)

  }

  useEffect(() => {

    fetchAPI()

  }, [])


  // call api method




  // Fetch API
  const fetchAPI = async () => {

    try {

      const response = await axios.get('http://localhost:8000/activ/get')
      setData(response.data.info)

    } catch (error) {

      console.log('Something went wrong.', error.message)

    }

  }

  // Call post API
  const postData = async (e) => {

    e.preventDefault()

    if (!img ||!textH || !textInf || !link) {

      setMassege(<>

        <ul className='text-red-600 w-100 text-2xl'>

          {img ? null : <li>- Please enter "Image"</li>}
          {textH ? null : <li>- Please enter "Topic"</li>}
          {textInf ? null : <li>- Please enter "Information"</li>}
          {link ? null : <li>- Please enter "Link"</li>}

        </ul>

      </>)
    } else {

      try {

        const response = await axios.post('http://localhost:8000/activ/post',

          {
            img: img,
            text_head: textH,
            text_info: textInf,
            text_link: link
          })

        window.location.reload()
        console.log('Post new information complete!', response.data)

      } catch (error) {

        console.log('Something went wrong.', error.message)

      }
    }

  }

  // Call put API

  const editData = async (id) => {

    let data = {

      ...(img && { img }),
      ...(textH && { text_head: textH }),
      ...(textInf && { text_info: textInf }),
      ...(link && { text_link: link })

    }

    try {

      const response = await axios.put(`http://localhost:8000/activ/put/${id}`, data)

      console.log('Edit complete', id)


    } catch (error) {

      console.log('Something went wrong.', error.message)

    }

  }


  // Call delete API
  const deleteData = async (id) => {

    try {

      const response = await axios.delete('http://localhost:8000/activ/delete', { data: { id: id } })

      console.log('Delete complete!', response.data)

      window.location.reload()

    } catch (error) {

      console.log('Something went wrong.', error.message)

    }

  }

  return (
    <>
      <div className='container grid grid-cols-1 w-50 gap-5 m-10 text-xl'>

        <Link to={'/edit'} className='bg-gray-200 hover:bg-gray-300 p-2 w-50 text-lg'>Go back to edit page</Link>
        <h1 className='text-5xl font-bold w-100'>Activities List</h1>

        <table >
          <thead>
            <tr className='grid grid-cols-3 w-200 justify-items-center'>

              <th>ID</th>
              <th>Header</th>
              <th className='w-40'>Process</th>

            </tr>
          </thead>
          <tbody >
            {data.map((n, i) => (

              <>

                <tr key={i} className='grid grid-cols-3 justify-items-center w-200 py-3 '>

                  <td>{n.id}</td>
                  <td key={i} >{n.text_head}</td>
                  <td className='grid grid-cols-2 gap-0.5 w-40'>

                    <button

                      className='bg-gray-200 p-2 hover:bg-gray-300 rounded-4xl'
                      onClick={() => editDisplay === n.id ? setEditDisplay('') : setEditDisplay(n.id)}

                    >Edit</button>

                    <button

                      className='bg-red-300 p-2 hover:bg-red-400 rounded-4xl'
                      onClick={() => deleteData(n.id)}

                    >Delete</button>

                    {editDisplay === n.id ?

                      <FormTemp textH={textH} setTextH={setTextH} textInf={textInf} setTextInf={setTextInf} link={link} setLink={setLink} setImgHandle={setImgHandle}

                        doProcess={editData} status={'edit'} id={n.id} />

                      : null}

                  </td>

                </tr>

              </>

            ))}
          </tbody>
        </table>

        <button

          className='bg-green-300 hover:bg-green-400 w-20 p-2 font-bold'
          onClick={() => addDisplay ? setAddDisplay(!addDisplay) : setAddDisplay(!addDisplay)}

        >+</button>
        {addDisplay ?

          <FormTemp textH={textH} setTextH={setTextH} textInf={textInf} setTextInf={setTextInf} link={link} setLink={setLink} setImgHandle={setImgHandle}

            doProcess={postData} status={'post'} id={''} />



          : null}
        {massege}
        
      </div>

    </>
  )
}

export default ActivitiesEdit