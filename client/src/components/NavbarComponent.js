
import React from 'react';
import { Link } from 'react-router-dom';
export function Navbar() {
  return (
    <nav className="navbar  navbar-expand-lg  shadow-lg">
      <div className="navbar-collapse" id="navbarsExampleDefault">
        <nav className="nav nav-underline">
          <span className="nav-link">
            <Link to="/home"><img src={'https://image.flaticon.com/icons/svg/25/25231.svg'} alt={'go to home'} height='24' /></Link>
          </span>
          <span className="nav-link">
            <Link to="/About">About</Link>
          </span>

        </nav>
      </div>
    </nav>
  )
}


