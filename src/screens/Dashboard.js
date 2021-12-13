import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import user12 from "../assets/user12.png";
import Infobox from "../components/Userfeed/Infobox";
import Widgetfeed from "../components/Widgetfeed";
import { AiOutlineBars } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { myDetails } from "../redux/actions/userActions";
import { getAllAdmin } from "../redux/actions/userActions";
import { getQuestionsId } from "../redux/actions/questionAction";

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(myDetails());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getQuestionsId());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllAdmin());
    }, [dispatch]);

    const adminDetails = useSelector(
        (state) => state.adminDetails
    );
    const { user } = adminDetails;

    const getQuestion = useSelector(
        (state) => state.getQuestion
    );
    const { questions } = getQuestion;
    console.log(questions);

    const GetAllAdmin = useSelector(
        (state) => state.GetAllAdmin
    );
    const { allAdmin } = GetAllAdmin;
    console.log(allAdmin);

    return (
        <>
            <Sidebar />
            <Navbar
                title="Dashboard"
                name={`Hello ${user && user.firstName}`}
            />

            <div className="container">
                <div className="feed">
                    <div className="feed_user">
                        <h2 className="feed_title">
                            {`Hello ${
                                user && user.firstName
                            }`}{" "}
                            👍👍🥇
                        </h2>
                        <br></br>
                        <br></br>
                        <span className="feed_subtitle">
                            <p>Good to see you again!</p>
                        </span>
                        <Link to="/questionbank">
                            <div className="feed_btn">
                                <button className="btn">
                                    Get Started
                                </button>
                            </div>
                        </Link>
                    </div>
                    <div className="feed_img">
                        <img
                            src={user12}
                            alt="User Detail"
                        />
                    </div>
                </div>

                <div className="cardGrid">
                    <Infobox
                        title="Questions"
                        count={
                            questions && questions.length
                        }
                        Icon={AiOutlineBars}
                        color="Green"
                    />

                    <Infobox
                        title="Admin"
                        //count={admins}
                        Icon={RiAdminFill}
                        color="#7070db"
                    />
                    <Infobox
                        title="Total Candidates"
                        count="20"
                        Icon={FaUserGraduate}
                        color="cyan"
                    />
                    <Infobox
                        title="Candidates that Passed"
                        count="8"
                        Icon={BsCheckCircleFill}
                        color="#40ff00"
                    />
                    <Infobox
                        title="Candidates that Failed"
                        count="12"
                        Icon={MdCancel}
                        color="#d92626"
                    />
                </div>
            </div>
            <Widgetfeed />
        </>
    );
};

export default Dashboard;
