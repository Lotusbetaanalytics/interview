import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { viewAllAdmindetails } from "../redux/actions/userActions";

function ViewAdmin() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(viewAllAdmindetails());
    }, [dispatch]);

    const getViewAdmins = useSelector(
        (state) => state.getViewAdmins
    );
    const { getadmin } = getViewAdmins;
    console.log(getadmin);

    const arr = getadmin.map((item) => {
        return (
            <tbody>
                <tr>
                    <td>{item.firstName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            </tbody>
        );
    });

    return (
        <div>
            <div className="sidebar_view">
                <Sidebar />
            </div>
            <div className="admin_container">
                <Navbar />
                <Link to="/adminregister">
                    <div className="goBack_btn">
                        <buuton
                            type="button"
                            className="btn"
                        >
                            Go Back
                        </buuton>
                    </div>
                </Link>
                <div className="question_table">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                        {arr}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ViewAdmin;
