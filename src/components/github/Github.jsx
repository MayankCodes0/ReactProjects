import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {

  const data = useLoaderData();
  
  // const [data, setData] = useState(69);

  // useEffect(() =>async () => {

  //   await fetch("https://api.github.com/users/MayankCodes0")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data.followers);        
  //     })
  // }, [<Github />])


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  
  return (await fetch("https://api.github.com/users/MayankCodes0").then((response) => response.json()))
}