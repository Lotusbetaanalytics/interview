import React, { useEffect } from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { getAllCandidatesdetails } from "../redux/actions/userActions";
import { Link } from "react-router-dom";

function Profile() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCandidatesdetails());
    }, [dispatch]);

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
                        <ProfileNavbar />
                        <Link to="/dashboard">
                            <div className="goBack_btn">
                                <button
                                    type="submit"
                                    className="btn"
                                >
                                    Go Back
                                </button>
                            </div>
                        </Link>
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
