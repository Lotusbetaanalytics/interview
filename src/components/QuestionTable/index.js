import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QuestionNavbar from "../QuestionNavbar";
import Axios from "axios";
import "./QuestionTab.css";

const QustionTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get("/api/v1/question")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const arr = [data].map((item) => {
        return (
            <tbody>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.question}</td>
                    <td>{item.section}</td>
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
    console.log(data);
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
