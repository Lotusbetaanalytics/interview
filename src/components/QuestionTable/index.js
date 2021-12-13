import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionNavbar from "../QuestionNavbar";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionsId } from "../../redux/actions/questionAction";
import "./QuestionTab.css";

const QustionTable = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuestionsId());
    }, [dispatch]);

    const getQuestion = useSelector(
        (state) => state.getQuestion
    );

    const { questions } = getQuestion;

    console.log(questions);

    const arr = questions.map((item) => {
        return (
            <tbody>
                <tr>
                    <td>{item._id}</td>
                    <td>{item.question}</td>
                    <td>{item.section.title}</td>
                    <td>
                        <button className="table_btn">
                            Edit
                        </button>
                        <button className="table_btn2">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        );
    });
    console.log(questions);
    return (
        <div className="question">
            <QuestionNavbar />
            <div className="goBack_btn">
                <Link to="/questionbank">
                    <button type="submit" className="btn">
                        Go Back
                    </button>
                </Link>
            </div>

            <div className="question_table">
                <table>
                    <tr>
                        <th>S/N</th>
                        <th>Question</th>
                        <th>Section</th>
                        <th>Action</th>
                    </tr>
                    {arr}
                </table>
            </div>
        </div>
    );
};

export default QustionTable;
