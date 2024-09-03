import React from 'react'

export const Descripcion = (props) => {
    console.log(props,'descripcion');
  return (
    <div className='text'>
        <h2>{props.description}</h2>
        <h2>{props.genre}</h2>
    </div>
    
  )
}
