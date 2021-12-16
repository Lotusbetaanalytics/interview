import React from "react";
import { useDispatch } from "react-redux";
import { MdSpaceDashboard } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import {
    FaFolderPlus,
    FaPiggyBank,
    FaWpforms,
} from "react-icons/fa";
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
                <Link>
                    <h4 className="sidebar_title">
                        e-<strong>INTERVIEW</strong>
                    </h4>
                </Link>

                <div className="sidebar_icons">
                    <ul>
                        <li>
                            <Link to="/dashboard">
                                <MdSpaceDashboard />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <MdPerson />
                                Candidates
                            </Link>
                        </li>

                        <li>
                            <Link to="/test">
                                <FaFolderPlus />
                                Add Test
                            </Link>
                        </li>

                        <li>
                            <Link to="/questionbank">
                                <FaPiggyBank />
                                Question Bank
                            </Link>
                        </li>

                        <li>
                            <Link to="/adminregister">
                                <MdAdminPanelSettings />
                                Admin
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/adminlogin"
                                onClick={logoutHandler}
                            >
                                <MdOutlineLogout />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
