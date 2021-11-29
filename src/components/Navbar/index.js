import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import user1 from '../../assets/user1.jpg'
import './Navbar.css'

function Navbar({ title, name }) {
  const adminRegister = useSelector((state) => state.adminRegister)
  const { userInfo } = adminRegister

  return (
    <div className='navbar'>
      <h5>{title}</h5>
      <div className='navbar_img'>
        <img src={user1} alt='user' />
      </div>
      <div className='navbar_username'>
        {userInfo ? (
          <Link to='#'>{userInfo.firstName}</Link>
        ) : (
          <Link to='/adminLogin'></Link>
        )}
        <h4>{name}</h4>
      </div>
    </div>
  )
}

export default Navbar
