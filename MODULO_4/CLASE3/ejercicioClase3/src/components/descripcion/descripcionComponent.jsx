import React from 'react'

export const Descripcion = (props) => {
    console.log(props,'descripcion');
  return (
    <div className='text'>
        <h2>{props.descripcion}</h2>
    </div>
    
  )
}
