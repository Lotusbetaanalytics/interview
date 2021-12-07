import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import './Test.css'

function Test() {
    return (
        <div className='admin_container'>
            <Sidebar />
            <Navbar title='Test'/>
        <form>
            <div className='test_page'>
                <input type='text' placeholder='Test' className='test_input'/>
                <div className='test_btn'>
                <button type='submit' className='btn'>Add Test</button>
                </div>
            </div>
            </form> 
        </div>
    )
}

export default Test
