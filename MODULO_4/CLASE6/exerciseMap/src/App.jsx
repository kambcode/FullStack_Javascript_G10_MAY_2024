import React, { useEffect, useState } from 'react'
import './App.css'
import CharacterCard from './characterCard/characterCard';

function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const fetchPersonajes = async () =>{
      const url = 'https://rickandmortyapi.com/api/character';

      try{
        const res = await fetch(url)
        const data = await res.json();
        const dataApi = data.results;

        setPersonajes(dataApi)

        console.log(data.results,'data <----');  
      }catch(error){
        console.error(error, 'Error en el fetch');
      }
    }

    fetchPersonajes();
  },[])

  return (
    <div>
      {
        personajes.map((item) => {
          console.log(item.name);
          return <CharacterCard nombre={item.name} imagen={item.image}/>
        })
      }
      
    </div>
  )
}

export default App
