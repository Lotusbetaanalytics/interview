import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./QuestionBank.css";
import { myDetails } from "../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { postQuestion } from "../redux/actions/questionAction";
import { getTest } from "../redux/actions/testActions";
import { getExamSection } from "../redux/actions/sectionActions";
import {
    Alert,
    AlertIcon,
    Center,
    CircularProgress,
    useToast,
} from "@chakra-ui/react";
import { QUESTION_RESET } from "../redux/constants/questionConstants";

function QuestionBank() {
    const dispatch = useDispatch();
    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState([]);
    const [correct_answers, setCorrectAnswer] = useState(
        []
    );
    const [section, setSection] = useState("");
    const [option, setOption] = useState("");

    const addOption = () => {
        setAnswers([...answers, option]);
    };

    const removeOption = (i) => {
        const index = answers.indexOf(i);
        if (index > -1) {
            answers.splice(index, 1);
        }
    };

    const handleChange = (e) => {
        setQuestion(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            postQuestion(
                question,
                answers,
                correct_answers,
                section
            )
        );
    };
    const adminQuestions = useSelector(
        (state) => state.adminQuestions
    );
    const { questions, success, error, loading } =
        adminQuestions;

    const allTest = useSelector((state) => state.allTest);
    const { test: tests } = allTest;

    const examSection = useSelector(
        (state) => state.examSection
    );
    const { sections } = examSection;

    const adminDetails = useSelector(
        (state) => state.adminDetails
    );
    const { user } = adminDetails;

    useEffect(() => {
        dispatch(getTest());
    }, [dispatch]);

    useEffect(() => {
        dispatch(myDetails());
    }, [dispatch]);

    const getOptions = (event) => {
        const id = event.target.value;
        dispatch(getExamSection(id));
    };

    const toast = useToast();

    if (success) {
        toast({
            title: "Notification",
            description: "Question created Successfully",
            status: "success",
            duration: 1000,
            isClosable: true,
        });
        dispatch({ type: QUESTION_RESET });
    }

    return (
        <div className="questionbank">
            <div>
                <Sidebar />
            </div>
            <div className="admin_container">
                {error && (
                    <Alert status="error">
                        <AlertIcon />
                        {error}
                    </Alert>
                )}
                {success && (
                    <Alert status="success">
                        <AlertIcon />
                        Question Submitted Successfully
                    </Alert>
                )}

                {loading ? (
                    <Center>
                        <CircularProgress
                            isIndeterminate
                            color="purple.300"
                        />
                    </Center>
                ) : (
                    <form onSubmit={submitHandler}>
                        <Navbar
                            title="Question Bank"
                            name={` ${
                                user && user.firstName
                            }`}
                        />
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
                                        onChange={
                                            getOptions
                                        }
                                    >
                                        <option>
                                            Select Test
                                        </option>
                                        {tests &&
                                            tests.map(
                                                (
                                                    item,
                                                    i
                                                ) => (
                                                    <option
                                                        key={
                                                            i
                                                        }
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
                                    </select>
                                </div>
                                <div className="exam_dropdown">
                                    <label>
                                        Test Section
                                    </label>
                                    <select
                                        onChange={(e) =>
                                            setSection(
                                                e.target
                                                    .value
                                            )
                                        }
                                    >
                                        <option>
                                            Select Section
                                        </option>
                                        {sections &&
                                            sections.map(
                                                (
                                                    item,
                                                    i
                                                ) => (
                                                    <option
                                                        key={
                                                            i
                                                        }
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
                                    onClick={() =>
                                        removeOption(item)
                                    }
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
                                vaule={correct_answers}
                                onChange={(e) => {
                                    setCorrectAnswer(
                                        e.target.value
                                    );
                                }}
                                className="correct"
                            />
                        </div>
                        <div className="add_question">
                            <button
                                type="submit"
                                className="btn"
                            >
                                Add Question{" "}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default QuestionBank;
