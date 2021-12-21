import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { myDetails } from "../../redux/actions/userActions";
import { getQuestionsId } from "../../redux/actions/questionAction";
import Navbar from "../../components/Navbar";
import "./QuestionTab.css";
const QuestionTable = () => {
    const dispatch = useDispatch();

    const deletequestion = (e) => {
        e.preventDefault();
    };

    const adminDetails = useSelector(
        (state) => state.adminDetails
    );
    const { user } = adminDetails;

    const getQuestion = useSelector(
        (state) => state.getQuestion
    );
    const { questions } = getQuestion;

    // const handledelete = (item) => {
    //     const index = questions.indexOf(item);
    //     if (index > -1) {
    //         questions.splice(index, 1);
    //     }
    //     console.log(item);
    // };

    useEffect(() => {
        dispatch(getQuestionsId());
    }, [dispatch]);

    useEffect(() => {
        dispatch(myDetails());
    }, [dispatch]);

    const arr = questions.map((item, i) => {
        return (
            <tbody>
                <tr key={i}>
                    <td>{item.question}</td>
                    <td>{item.section.title}</td>
                    <td>{item.section.instruction}</td>
                    <td>{item.section.timer}</td>
                    {/* <td>
                        <button
                            className="table_btn"
                            onClick={() =>
                                handledelete(item)
                            }
                        >
                            Delete
                        </button>
                    </td> */}
                </tr>
            </tbody>
        );
    });

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
                    {arr}
                </table>
            </div>
        </div>
    );
};

export default QuestionTable;
