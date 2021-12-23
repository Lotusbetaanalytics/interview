import React from "react";
import { useDispatch } from "react-redux";
import { MdSpaceDashboard } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { FaFolderPlus, FaPiggyBank } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { adminLogout } from "../../redux/actions/userActions";

function Sidebar() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(adminLogout());
    };

    return (
        <div className="sidebar">
            <div className="sidebar_container">
                <h4 className="sidebar_title">
                    <Link to="/">
                        <strong>E-INTERVIEW</strong>
                    </Link>
                </h4>

                <div className="sidebar_icons">
                    <ul>
                        <li>
                            <Link to="/dashboard">
                                <MdSpaceDashboard />
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <MdPerson />
                                <p>Candidates</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/adminTest">
                                <FaFolderPlus />
                                <p>Add Test</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/questionbank">
                                <FaPiggyBank />
                                <p>Question Bank</p>
                            </Link>
                        </li>

                        <li>
                            <Link to="/adminregister">
                                <MdAdminPanelSettings />
                                <p>Admin</p>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/adminlogin"
                                onClick={logoutHandler}
                            >
                                <MdOutlineLogout />
                                <p>Logout</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
