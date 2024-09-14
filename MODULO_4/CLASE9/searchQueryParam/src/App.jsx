import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SearchComponent from './search/searchComponent'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SearchComponent />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
