import React from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import { useState, useEffect } from 'react'

function ProjectEdit() {

  const [data, setData] = useState([])
  let count = 0

  useEffect(() => {

    fetchAPI()

  }, [])

  const fetchAPI = async () => {

    try {

      const response = await axios.get('http://localhost:8000/project/get')
      setData(response.data.info)

    } catch (error) {

      console.log('Something went wrong.', error.massege)

    }

  }


  return (
    <>
      <div className='container grid grid-cols-1 w-50 gap-5 m-10 text-xl'>

        <h1 className='text-5xl font-bold'>List</h1>

        <table>
          <thead>
            <tr className='grid grid-cols-2'>

              <th>ID</th>
              <th>Header</th>

            </tr>
          </thead>
          <tbody>
            {data.map((n, i) => (

              <>

                <tr key={i} className='grid grid-cols-2 justify-items-center w-100 py-3'>

                  <td>{n.id}</td>
                  <td key={i}>{n.text_head}</td>

                </tr>



              </>

            ))}
          </tbody>
        </table>


        <Link to={'/edit'} className='bg-gray-200 hover:bg-gray-300 p-2 w-50 text-lg'>Go back to edit page</Link>
      </div>

    </>
  )
}

export default ProjectEdit