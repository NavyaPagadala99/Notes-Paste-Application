//Navbar file handling the routes
import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (

    <div className="navbar-container">
     <NavLink to='/' className='link1'>
        Home
     </NavLink>
     <br />
     <NavLink to='/pastes' className='link2'>
       Paste
     </NavLink>
     </div>


  )
}

export default Navbar
