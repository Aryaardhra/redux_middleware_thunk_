import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <>
    <nav className="navbar  col-md-12">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="./images/logo.jpg" 
      alt="Logo" 
      width="30" 
      height="28"
       className="d-inline-block align-text-top "/>
      Products
    </a>
  </div>
</nav>
    </>
  )
}
