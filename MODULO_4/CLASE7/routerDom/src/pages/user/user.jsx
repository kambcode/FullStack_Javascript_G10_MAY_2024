import React from 'react'
import { useParams } from 'react-router-dom';


const User = () => {

    const param = useParams();

    console.log(param,'param');
    
  return (
    <div>{param.id}</div>
  )
}

export default User