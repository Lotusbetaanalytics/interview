import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./QuestionBank.css";
import { useSelector, useDispatch } from "react-redux";
import { postQuestion } from "../redux/actions/questionAction";
import { getTest } from "../redux/actions/testActions";
import { getExamSection } from "../redux/actions/sectionActions";

function QuestionBank() {
    const dispatch = useDispatch();
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const [section, setSection] = useState("");
    const [exam, setExam] = useState("");
    const [option, setOption] = useState("");

    const addOption = () => {
        setAnswers([...answers, option]);
        console.log(answers);
    };

    const removeOption = () => {};

    const handleChange = (e) => {
        setQuestion(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            postQuestion(
                question,
                answers,
                correctAnswer,
                section
            )
        );
    };
    const adminQuestions = useSelector(
        (state) => state.adminQuestions
    );
    const { questions } = adminQuestions;

    const allTest = useSelector((state) => state.allTest);
    const { test: tests } = allTest;

    const examSection = useSelector(
        (state) => state.examSection
    );
    const { sections } = examSection;

    useEffect(() => {
        dispatch(getTest());
    }, [dispatch]);

    const getOptions = (event) => {
        const id = event.target.value;
        dispatch(getExamSection(id));
    };

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
                    <div className="question_section">
                        <div className="sections">
                            <div className="section_dropdown">
                                <label>Test Name</label>
                                <select
                                    onChange={getOptions}
                                >
                                    <option>
                                        Select Test
                                    </option>
                                    {tests &&
                                        tests.map(
                                            (item, i) => (
                                                <option
                                                    key={i}
                                                    value={
                                                        item._id
                                                    }
                                                >
                                                    {
                                                        item.title
                                                    }
                                                </option>
                                            )
                                        )}
                                </select>{" "}
                            </div>
                            <div className="exam_dropdown">
                                <label>Test Section</label>
                                <select
                                    onChange={(e) =>
                                        setSection(
                                            e.target.value
                                        )
                                    }
                                >
                                    <option>
                                        Select Section
                                    </option>
                                    {sections &&
                                        sections.map(
                                            (item, i) => (
                                                <option
                                                    key={i}
                                                    value={
                                                        item._id
                                                    }
                                                >
                                                    {
                                                        item.title
                                                    }
                                                </option>
                                            )
                                        )}
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
                                    setOption(
                                        e.target.value
                                    );
                                }}
                                value={option}
                                placeholder="Answers"
                                name="text"
                                className="option"
                            />
                            <button
                                className="btn"
                                onClick={addOption}
                                type="button"
                            >
                                Add Option{" "}
                            </button>{" "}
                        </div>{" "}
                    </div>
                    {answers.map((item, i) => (
                        <div
                            className="remove_option2"
                            key={i}
                        >
                            {item}
                            <button
                                onClick={removeOption}
                                className="remove_btn2"
                            >
                                Remove Option{" "}
                            </button>
                        </div>
                    ))}
                    <div className="correct_answer">
                        <input
                            type="text"
                            placeholder="Correct answer"
                            vaule={correctAnswer}
                            onChange={(e) => {
                                setCorrectAnswer(
                                    e.target.value
                                );
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
