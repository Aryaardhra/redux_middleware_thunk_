import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
    <div className="nav col-md-12">
    <ul className="nav justify-content-center">
  <li className="nav-item nav-link">
    <NavLink to="/home">Home</NavLink>
  </li>
  <li className="nav-item nav-link">
   <NavLink to="/about">About</NavLink>
  </li>
  <li className="nav-item nav-link">
    <NavLink to="/product"> Products</NavLink>
  </li>
  <li className="nav-item nav-link">
    <NavLink to="/contact">Contact</NavLink>
  </li>
</ul>
    </div>
    </>
  )
}
