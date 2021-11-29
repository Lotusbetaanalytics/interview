import React from 'react'
import ProfileNavbar from '../components/ProfileNavbar'
import Sidebar from '../components/Sidebar'

function Profile() {
  return (
    <div>
      <div className='view_question'>
        <div className='sidebar_view'>
          <Sidebar />
        </div>
        <div className='admin_container'>
          <div className='question'>
            <ProfileNavbar />
            <div className='goBack_btn'>
              <button type='submit' className='btn'>
                Go Back
              </button>
            </div>
            <div className='question_table'>
              <table>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Socre</th>
                  <th>Position</th>
                  <th>Action</th>
                </tr>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mikel</td>
                    <td>30%</td>
                    <td>Technical</td>
                    <td>
                      <button className='table_btn'>Edit</button>
                      <button className='table_btn2'>Delete</button>
                    </td>
                  </tr>
                </tbody>

                <tbody>
                  <tr>
                    <td>2</td>
                    <td>John Doe</td>
                    <td>70%</td>
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
        </div>
      </div>
    </div>
  )
}

export default Profile
