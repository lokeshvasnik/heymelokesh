import React from 'react'
import { Link } from 'react-router-dom'
import './NavLinks.css'

const NavLinks = () => {
 
  return (
    <>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                <span>#</span>Home</Link>
             </li>
             <li className="nav-item">
                <Link className="nav-link" to="/about"> <span>#</span>About Me</Link>
            </li>
             <li className="nav-item">
                <Link className="nav-link" to="/projects"> <span>#</span>Projects</Link>
             </li>
             <li className="nav-item">
                <Link className="nav-link" to="/contact"> <span>#</span>Contact</Link>
             </li> 
            
     </ul>

    </>
  )
}

export default NavLinks