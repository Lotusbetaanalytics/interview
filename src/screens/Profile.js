import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import {
    getAllCandidatesdetails,
    myDetails,
} from "../redux/actions/userActions";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Profile() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCandidatesdetails());
    }, [dispatch]);

    useEffect(() => {
        dispatch(myDetails());
    }, [dispatch]);

    const adminDetails = useSelector(
        (state) => state.adminDetails
    );
    const { user } = adminDetails;

    const getCandidate = useSelector(
        (state) => state.getCandidate
    );
    const { candidates } = getCandidate;

    const arr = candidates.map((item) => {
        return (
            <tbody>
                <tr>
                    <td>{item.candidate.firstName}</td>
                    <td>{item.test.title}</td>
                    <td>{item.score}</td>
                </tr>
            </tbody>
        );
    });

    return (
        <div>
            <div className="view_question">
                <div className="sidebar_view">
                    <Sidebar />
                </div>
                <div className="admin_container">
                    <div className="question">
                        <Navbar
                            title="Candidate Profile"
                            name={`${
                                user && user.firstName
                            }`}
                        />
                        <div className="goBack_btn">
                            <Link to="/dashboard">
                                <button
                                    type="submit"
                                    className="btn"
                                >
                                    Go Back
                                </button>
                            </Link>
                        </div>
                        <div className="question_table">
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Test</th>
                                    <th>Score</th>
                                </tr>
                                {arr}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
