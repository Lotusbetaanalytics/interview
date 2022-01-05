import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { myDetails } from "../../redux/actions/userActions";
import {
    deleteFromItem,
    deleteQuestionId,
    getQuestionsId,
} from "../../redux/actions/questionAction";
import Navbar from "../../components/Navbar";
import "./QuestionTab.css";
const QuestionTable = () => {
    const dispatch = useDispatch();

    const adminDetails = useSelector(
        (state) => state.adminDetails
    );
    const { user } = adminDetails;

    const getQuestion = useSelector(
        (state) => state.getQuestion
    );
    const { questions: question } = getQuestion;

    const deleteQuestion = useSelector(
        (state) => state.deleteQuestion
    );
    const { success } = deleteQuestion;

    useEffect(() => {
        dispatch(getQuestionsId());
    }, [dispatch]);

    useEffect(() => {
        dispatch(myDetails());
    }, [dispatch]);

    const handlerDelete = (_id) => {
        if (
            window.confirm(
                "Are you sure you want to delete this ?"
            )
        ) {
            dispatch(deleteQuestionId(_id));
            if (success) {
                dispatch(getQuestionsId());
            }
        }
        console.log(_id);
    };

    return (
        <div className="question">
            <Navbar
                title="Questions"
                name={`${user && user.firstName}`}
            />
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
                        <th>Instructions</th>
                        <th>Timer (Mins)</th>
                    </tr>
                    {question &&
                        question.map((item) => (
                            <tbody>
                                <tr key={item._id}>
                                    <td>{item.question}</td>
                                    <td>
                                        {item.section.title}
                                    </td>
                                    <td>
                                        {
                                            item.section
                                                .instruction
                                        }
                                    </td>
                                    <td>
                                        {item.section.timer}
                                    </td>
                                    <td>
                                        <button
                                            className="table_btn"
                                            key={item._id}
                                            onClick={() =>
                                                handlerDelete(
                                                    item._id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                </table>
            </div>
        </div>
    );
};

export default QuestionTable;
