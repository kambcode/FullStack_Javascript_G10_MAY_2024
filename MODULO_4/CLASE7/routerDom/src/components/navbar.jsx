import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  return (
    <div>
        <ul>
            <li>
                <NavLink to='/' className={({isActive}) => (isActive ? 'active' : '')}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/about' className={({isActive}) => (isActive ? 'active' : '')}>
                    About
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar