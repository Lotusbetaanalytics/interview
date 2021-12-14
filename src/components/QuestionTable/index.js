import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionNavbar from "../QuestionNavbar";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionsId } from "../../redux/actions/questionAction";
import "./QuestionTab.css";
// import { deleteQuestionId } from "../redux/actions/questionAction";

const QustionTable = () => {
    const [data, setData] = useState([]);
    const [clear, setClear] = useState("");
    const dispatch = useDispatch();

    const deletequestion = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        dispatch(getQuestionsId());
    }, [dispatch]);

    const getQuestion = useSelector(
        (state) => state.getQuestion
    );

    const { questions } = getQuestion;

    // const getquestionid = (event) => {
    //     const id = event.target.value;
    //     dispatch(deleteQuestionId(id));
    // };

    const arr = questions.map((item) => {
        return (
            <tbody>
                <tr>
                    <td>{item.question}</td>
                    <td>{item.section.title}</td>
                    <td></td>
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
                        <th>Question</th>
                        <th>Section</th>
                    </tr>
                    {arr}
                </table>
            </div>
        </div>
    );
};

export default QustionTable;
