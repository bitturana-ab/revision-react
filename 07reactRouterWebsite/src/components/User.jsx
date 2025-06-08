import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams();
  return (
    <div className='text-3xl bg-gray-700 text-white px-4 py-2'>User: {userid}</div>
  )
}

export default User