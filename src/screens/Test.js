import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import jobexam from "../assets/jobexam.jpg";
import "./Test.css";
import { createTest } from "../redux/actions/testActions";
import {
    useToast,
    CircularProgress,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import { CREATE_TEST_RESET } from "../redux/constants/testConstants";
import { Link } from "react-router-dom";
import { myDetails } from "../redux/actions/userActions";

function Test({ history }) {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (success) {
            setTimeout(
                () => history.push("/section"),
                [5000]
            );
        }
        dispatch(createTest(title));
    };

    const adminDetails = useSelector(
        (state) => state.adminDetails
    );
    const { user } = adminDetails;

    useEffect(() => {
        dispatch(myDetails());
    }, [dispatch]);

    const newTest = useSelector((state) => state.newTest);
    const { loading, success, error } = newTest;

    const toast = useToast();

    if (success) {
        toast({
            title: "Notification",
            description: "Test created Successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
        });
        dispatch({ type: CREATE_TEST_RESET });
    }

    return (
        <div>
            <Sidebar />
            <div className="admin_container">
                <Navbar
                    title="Test"
                    name={`${user && user.firstName}`}
                />
                {error && (
                    <Alert>
                        <AlertIcon />
                        {error}
                    </Alert>
                )}
                {loading ? (
                    <CircularProgress
                        isIndeterminate
                        color="green.300"
                    />
                ) : (
                    <form onSubmit={submitHandler}>
                        <div className="test_image">
                            <img src={jobexam} alt="" />
                        </div>
                        <div className="test_page">
                            <input
                                type="text"
                                placeholder="Test"
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                                value={title}
                                className="test_inputs"
                            />
                        </div>

                        <div className="test_btn">
                            <button
                                type="submit"
                                className="btn2"
                            >
                                Add Test
                            </button>
                            <Link to="/section">
                                <button
                                    type="submit"
                                    className="btn5"
                                >
                                    Add Section
                                </button>
                            </Link>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Test;
