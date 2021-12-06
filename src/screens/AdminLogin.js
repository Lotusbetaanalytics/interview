import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import image from '../assets/img-login.svg'
import { useSelector, useDispatch } from 'react-redux'
import './AdminLogin.css'
import { loginAdmin } from '../redux/actions/userActions'

function AdminLogin({ history }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const sumbitHandler = (e) => {
    e.preventDefault()
    dispatch(loginAdmin(email, password))
  }

  const adminLogin = useSelector((state) => state.adminLogin)
  const { loading, error, userInfo } = adminLogin

  useEffect(() => {
    if (userInfo) {
      history.push('/dashboard')
    }
  }, [userInfo, history])

  return (
    <div>
      <Header />

      <div className='login-page'>
        <form onSubmit={sumbitHandler} className='login'>
          <div className='image-container'>
            <img src={image} alt='admin' />
          </div>
          <h2>Welcome to e-Interview!</h2>
          <h3>Admin Portal</h3>
          <div className='login-form-inputs'>
            <input
              type='email'
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
              placeholder='Email Address'
            />
            <input
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className='forgot-password'>Forgot password?</div>

          <button type='submit' value='Login' className='submit-btn'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
