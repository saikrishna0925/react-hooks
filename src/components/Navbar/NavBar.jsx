import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
  return (
    <nav className='navbar' >
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/todos'>Todos</NavLink>
        <NavLink to='/cart'>Cart</NavLink>



      </div>
    </nav>
  )
}

export default NavBar