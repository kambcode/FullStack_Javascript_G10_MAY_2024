import React from 'react'

const CharacterCard = (props) => {
  return (
    <div>
        <h1>{props.nombre}</h1>
        <img src={props.imagen} alt="" />
    </div>
  )
}

export default CharacterCard