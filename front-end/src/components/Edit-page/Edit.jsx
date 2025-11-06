import React from 'react'
import { Link } from 'react-router'

function Edit() {
  return (
    <>
    
        <div className='text-center my-50 text-2xl'>

          <h1 className='text-4xl '>Edit page</h1>
          <p>What do you want to edit?</p>
          
          <div className='flex flex-col gap-4'>

            <Link to={'/abt_edit'} className='my-3 hover:text-blue-300'>- About me</Link>
            <Link to={'/proj_edit'} className='hover:text-blue-300'>- Project</Link>
            <Link to={'/acti_edit'} className='my-3 hover:text-blue-300'>- Activities</Link>

          </div>

          <Link to={'/'} className='bg-gray-200 hover:bg-gray-300'>Go back to Menu</Link>
        </div>
        
    
    </>
  )
}

export default Edit