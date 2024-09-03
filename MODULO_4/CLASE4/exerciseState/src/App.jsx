import { useEffect, useState } from 'react'
import './App.css'
import CharacterCard from './components/characterCard/characterCard'


function App() {
  
  const [imagen, setImagen] = useState('');
  const [name, setName] = useState('');
  
  useEffect(() => {
    const url = 'https://rickandmortyapi.com/api/character/1';
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data,'dataaaa');      
      setName(data.name)
      setImagen(data.image)
    }).catch((error) => {
      console.log(error,'error');
    })

  },[])
  

  return (
    <div>
      <CharacterCard name={name} img={imagen}/>
    </div>
  )
}

export default App
