import React from 'react'

export const Imagen = (props) => {
  console.log(props,'props');
  
  return (
    <div>
        <img className='img' src={props.img} alt='imagen' />
    </div>
  )
}
