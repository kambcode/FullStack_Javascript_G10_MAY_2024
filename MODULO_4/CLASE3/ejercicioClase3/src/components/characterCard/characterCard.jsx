import React from 'react'
import { Imagen } from '../imagen/imagenComponent'
import { Nombre } from '../nombre/nombreComponents'
import { Descripcion } from '../descripcion/descripcionComponent'

const CharacterCard = (props) => {
    console.log(props,'deatil');
    
  return (
    <div className='card'>
      <Imagen img={props.img}/>
      <Nombre name={props.name}/>
      <Descripcion description={props.description} genre={props.genre}/>
    </div>
  )
}

export default CharacterCard