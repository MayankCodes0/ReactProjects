import React from 'react'
import { useParams } from 'react-router'

//to visit this User page on actual app, go via URL 

function User() {
    const {userId} = useParams([]); //why array taken as initial value is explained on page[XII] front.
    return (
        <div className='text-center bg-gray-600 text-white text-3xl p-4'>User: {userId}</div>
    )
}

export default User