import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import './QuestionBank.css'

function QuestionBank() {
  const [question, setQuestion] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <div className='questionbank'>
      <div>
        <Sidebar />
      </div>
      <div className='admin_container'>
        <Navbar title='Question Bank' />
        <Link to='/viewquestion'>
          <div type='submit' className='questionbank_btn'>
            <button className='btn'>View All Question</button>
          </div>
        </Link>

        <form onSubmit={submitHandler}>
          <section>
            <div className='question_section'>
              <input type='text' placeholder='Section' className='section' />

              <input type='text' placeholder='Position' className='position' />

              <div className='questionbank_space'>
                <input
                  type='text'
                  onChange={(e) => setQuestion(e.target.value)}
                  value={question}
                  placeholder='Question'
                  className='question_space'
                />
              </div>

              <div className='option_space'>
                <input type='text' placeholder='Option' className='option' />

                <button className='btn'>Add Option</button>
              </div>
            </div>

            <div className='remove_option'>
              Local Area Network{' '}
              <button className='remove_btn'>Remove Option</button>
            </div>
            <div className='remove_option2'>
              Last Air Network
              <button className='remove_btn2'>Remove Option</button>
            </div>
          </section>

          <div className='correct_answer'>
            <input
              type='text'
              placeholder='Correct answer'
              className='correct'
            />
          </div>
          <div className='add_question'>
            <button type='submit' className='btn'>
              Add Question
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default QuestionBank
