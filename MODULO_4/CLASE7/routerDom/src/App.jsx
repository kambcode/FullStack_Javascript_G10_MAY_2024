import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import About from './pages/about/about'
import User from './pages/user/user'
import NotFound from './pages/notFound/notFound'
import Navbar from './components/navbar'
import Users from './pages/usuarios/users'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/' element={<About />}/>
          <Route path='/user/:id' element={<User />}/>
          <Route path='/users/' element={<Users />}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
