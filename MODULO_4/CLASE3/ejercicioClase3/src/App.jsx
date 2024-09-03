import './App.css'
import CharacterCard from './components/characterCard/characterCard'

function App() {

  return (
    <div>
      <CharacterCard img='descarga.jpeg' name='Heroe de marvel' genre='spider' description='arana'/>
      <CharacterCard  img='descarga.jpeg' name='peter packer' genre='masculino' description='estudiante'/>
      <CharacterCard  img='descarga.jpeg' name='martha' genre='femenino' description='profesora'/>
      <CharacterCard  img='descarga.jpeg' name='jhonny' genre='estudiante' description='estudiante'/>
    </div>
  )
}

export default App
