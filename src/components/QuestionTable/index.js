import React from 'react'
import { Link } from 'react-router-dom'
import QuestionNavbar from '../QuestionNavbar'
import './QuestionTab.css'

const QustionTable = () => {
  return (
    <div className='question'>
      <QuestionNavbar />
      <Link to='/questionbank'>
        <div className='goBack_btn'>
          <button type='submit' className='btn'>
            Go Back
          </button>
        </div>
      </Link>

      <div className='question_table'>
        <table>
          <tr>
            <th>S/N</th>
            <th>Question</th>
            <th>Section</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
          <tbody>
            <tr>
              <td>1</td>
              <td>What is your Computer</td>
              <td>General IT</td>
              <td>Technical</td>
              <td>
                <button className='table_btn'>Edit</button>
                <button className='table_btn2'>Delete</button>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>1</td>
              <td>What is your Computer</td>
              <td>General IT</td>
              <td>Technical</td>
              <td>
                <button className='table_btn'>Edit</button>
                <button className='table_btn2'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default QustionTable
