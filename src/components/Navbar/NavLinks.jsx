import React from 'react'
import './NavLinks.css'

const NavLinks = () => {
 
  return (
    <>
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                <span>#</span>Home</a>
             </li>
             <li className="nav-item">
                <a className="nav-link" href="/"> <span>#</span>Link</a>
            </li>
             <li className="nav-item">
                <a className="nav-link" href="/"> <span>#</span>About Me</a>
             </li>
             <li className="nav-item">
                <a className="nav-link" href="/"> <span>#</span>Contact</a>
             </li>
     </ul>

    </>
  )
}

export default NavLinks