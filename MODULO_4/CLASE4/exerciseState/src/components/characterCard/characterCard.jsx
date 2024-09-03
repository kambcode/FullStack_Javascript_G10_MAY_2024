import React from 'react'

const CharacterCard = (props) => {
    console.log(props,'propss');
    
  return (
    <div>
        <img src={props.img} alt="" />
        <h1>{props.name}</h1>
    </div>
  )
}

export default CharacterCard