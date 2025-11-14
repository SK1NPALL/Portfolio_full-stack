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

  const deleteData = async(id) => {

    try{
      
      const response = await axios.delete('http://localhost:8000/project/delete',{ data : {id : id} })

      console.log('Delete complete!',response.data)
      
      window.location.reload();

    }catch(error) {

      console.log('Something went wrong.' , error.message)

    }

  }

  return (
    <>
      <div className='container grid grid-cols-1 w-50 gap-5 m-10 text-xl'>

        <h1 className='text-5xl font-bold'>List</h1>

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

                    <button className='bg-gray-200 p-2 hover:bg-gray-300'>Edit</button>

                    <button 

                    className='bg-gray-200 p-2 hover:bg-gray-300'
                    onClick={() => deleteData(n.id)}
                    
                    >Delete</button>
                  </td>

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