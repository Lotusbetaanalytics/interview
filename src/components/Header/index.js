import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='nav'>
        <Link>
          <div className='header'>e-INTERVIEW</div>
        </Link>
      </div>
    </div>
  )
}

export default Header
