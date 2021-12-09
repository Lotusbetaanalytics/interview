import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import "./Test.css";
import { createTest } from "../redux/actions/testActions";
import {
    useToast,
    CircularProgress,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import { CREATE_TEST_RESET } from "../redux/constants/testConstants";

function Test({ history }) {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createTest(title));
    };

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
                <Navbar title="Test" />
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
                        <div className="test_page">
                            <input
                                type="text"
                                placeholder="Test"
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                                value={title}
                                className="test_input"
                            />
                            <div className="test_btn">
                                <button
                                    type="submit"
                                    className="btn"
                                >
                                    Add Test
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Test;
