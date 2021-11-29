import React from 'react'
import user1 from '../../assets/user1.jpg'
import icon from '../../assets/icon.jpg'
import './Widget.css'
import { Link } from 'react-router-dom'

function Widgetfeed() {
  return (
    <div className='widget'>
      <div className='widget_container'>
        <div className='widget_img'>
          <img src={user1} alt='' />
          <h4>Fonsus Ali</h4>
          <Link to='/adminregister'>
            <div className='widgetadmin'>
              <button className='widget_btn'>Admin</button>
            </div>
          </Link>
        </div>

        <div className='widget_post'>
          <div className='widget_title'>
            <h4>Most Recent Test</h4>
          </div>

          <div className='post_card'>
            <div className='user1_img'>
              <img src={icon} alt='' />
            </div>
            <div className='user1_id'>
              <h4>Osuji Ali</h4>
              <h6>Non-Technical</h6>
            </div>
            <div className='user1_score'>60%</div>
          </div>

          <div className='post_card'>
            <div className='user2_img'>
              <img src={icon} alt='' />
            </div>
            <div className='user2_id'>
              <h4>Frank Lampard</h4>
              <h6>Technical</h6>
            </div>
            <div className='user2_score'>60%</div>
          </div>

          <div className='post_card'>
            <div className='user3_img'>
              <img src={icon} alt='' />
            </div>
            <div className='user3_id'>
              <h4>John Doe</h4>
              <h6>Technical</h6>
            </div>
            <div className='user3_score'>90%</div>
          </div>

          <div className='post_card'>
            <div className='user4_img'>
              <img src={icon} alt='' />
            </div>
            <div className='user4_id'>
              <h4>Nwaeze Uche</h4>
              <h6>Technical</h6>
            </div>
            <div className='user4_score'>83%</div>
          </div>

          <div className='post_card'>
            <div className='user7_img'>
              <img src={icon} alt='' />
            </div>
            <div className='user7_id'>
              <h4>Jude Akinwale</h4>
              <h6>Technical</h6>
            </div>
            <div className='user7_score'>61%</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Widgetfeed
