import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {

    const userId = 'willian';

  return (
    <div>
        <h1>Home Aplicacion</h1>
        <Link to='/users'>
            Usuario
        </Link>
        <p></p>
        <Link to={`/user/${userId}`}>
            Usuario Param
        </Link>

        <p></p>
        <Link to='/about'>
            About
        </Link>
    </div>
  )
}

export default Home