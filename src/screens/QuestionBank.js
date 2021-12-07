import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./QuestionBank.css";
import {useSelector, useDispatch} from "react-redux";
import {postQuestion} from '../redux/actions/questionAction'

function QuestionBank() {
    const dispatch = useDispatch()
    const [question, setQuestion] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [options, setOptions] = useState([])
    const [section, setSection] = useState("");
    const [exam, setExam] = useState("");
    
    const handleChange = e => {
      setQuestion(e.target.value)
     
    }
    const submitHandler = (e) => {
        e.preventDefault();
    };


const adminQuestions = useSelector((state) => state.adminQuestions)
const {questions} = adminQuestions


    useEffect(() => {
        dispatch(postQuestion())
    }, [dispatch, questions])


    return (
        <div className="questionbank">
            <div>
                <Sidebar />
            </div>{" "}
            <div className="admin_container">
                <form onSubmit={submitHandler}>
                    <Navbar title="Question Bank" />
                    <div
                        type="submit"
                        className="questionbank_btn"
                    >
                        <Link to="/viewquestion">
                            <button className="btn">
                                View All Question{" "}
                            </button>{" "}
                        </Link>{" "}
                    </div>

                    <label className='name'>
                        Name:
                        <input type="text" placeholder="Test" name="Name" className='testname'/>
                            </label>
                        <input type="submit" value="Submit" className='btn'/>

                    <div className="question_section">
                        <div className="sections">
                            <div className="section_dropdown">
                                <select
                                    onChange={(e) =>
                                        setSection(
                                            e.target.value
                                        )
                                    }
                                >
                                    <option className="select">
                                        Test Name....{" "}
                                    </option>{" "}
                                    <option value="testName1">
                                        AZ - 900{" "}
                                    </option>{" "}
                                    <option value="testName2">
                                        AZ - 200{" "}
                                    </option>{" "}
                                    <option value="testName3">
                                        AZ - 100{" "}
                                    </option>{" "}
                                    <option value="testName4">
                                        PL - 100{" "}
                                    </option>{" "}
                                    <option value="testName5">
                                        PL - 200{" "}
                                    </option>{" "}
                                </select>{" "}
                            </div>
                            <div className="exam_dropdown">
                                <select
                                    onChange={(e) =>
                                        setExam(
                                            e.target.value
                                        )
                                    }
                                >
                                    <option>
                                        Choose Exam.....{" "}
                                    </option>{" "}
                                    <option value="AZ-900">
                                        Cloud Database{" "}
                                    </option>{" "}
                                    <option value="AZ-200">
                                        Cloud Structure
                                        Algorithms{" "}
                                    </option>{" "}
                                    <option value="AZ-100">
                                        Microsoft Azure
                                        Infrastructure and
                                        Development{" "}
                                    </option>{" "}
                                    <option value="PL-100">
                                        Power Platform App
                                        Maker Associate{" "}
                                    </option>{" "}
                                    <option value="PL-200">
                                        Microsoft Power
                                        Platform Functional
                                        Consultant{" "}
                                    </option>{" "}
                                </select>{" "}
                            </div>{" "}
                        </div>
                        <div className="questionbank_space">
                            <input
                                type="text"
                                onChange={handleChange}
                                value={question}
                                placeholder="Question"
                                name="text"
                                className="question_space"
                            />
                        </div>
                        <div className="option_space">
                            <input
                                type="text"
                                onChange={(e) => {
                                    setOptions(e.target.value)
                                }}
                                vaule={options}
                                placeholder="Options"
                                name="text"
                                className="option"
                            />
                            <button className="btn">
                                Add Option{" "}
                            </button>{" "}
                        </div>{" "}
                    </div>
                    <div className="remove_option">
                        Local Area Network{" "}
                        <button className="remove_btn">
                            Remove Option{" "}
                        </button>{" "}
                    </div>{" "}
                    <div className="remove_option2">
                        Last Air Network{" "}
                        <button className="remove_btn2">
                            Remove Option{" "}
                        </button>{" "}
                    </div>
                    <div className="correct_answer">
                        <input
                            type="text"
                            placeholder="Correct answer"
                            vaule={correctAnswer}
                            onChange={(e) => {
                                setCorrectAnswer(e.target.value)
                            }}
                            className="correct"
                        />
                    </div>{" "}
                    <div className="add_question">
                        <button
                            type="submit"
                            className="btn"
                        >
                            Add Question{" "}
                        </button>{" "}
                    </div>{" "}
                </form>{" "}
            </div>{" "}
        </div>
    );
}

export default QuestionBank;
