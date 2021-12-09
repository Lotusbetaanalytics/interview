import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import "./Test.css";

import {
    useToast,
    CircularProgress,
    Alert,
    AlertIcon,
} from "@chakra-ui/react";
import { CREATE_SECTION_RESET } from "../redux/constants/sectionConstants";
import { createSection } from "../redux/actions/sectionActions";
import { getTest } from "../redux/actions/testActions";

function Section({ history }) {
    const [title, setTitle] = useState("");
    const [instruction, setInstruction] = useState("");
    const [timer, setTimer] = useState("");
    const [test, setTest] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            createSection(title, timer, instruction, test)
        );
    };

    const allTest = useSelector((state) => state.allTest);
    const { test: tests } = allTest;

    const newSection = useSelector(
        (state) => state.newSection
    );
    const { loading, error, success } = newSection;

    const toast = useToast();

    if (success) {
        toast({
            title: "Notification",
            description: "Section created Successfully",
            status: "success",
            duration: 6000,
            isClosable: true,
        });
        dispatch({ type: CREATE_SECTION_RESET });
    }

    useEffect(() => {
        dispatch(getTest());
    }, [dispatch]);

    return (
        <div className="admin_container">
            <Sidebar />
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
                        <div>
                            <label>Test</label>
                            <select
                                onChange={(e) =>
                                    setTest(e.target.value)
                                }
                            >
                                <option>Select Test</option>
                                {tests &&
                                    tests.map((item, i) => (
                                        <option
                                            key={i}
                                            value={item._id}
                                        >
                                            {item.title}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div>
                            <label>Section Name</label>
                            <input
                                type="text"
                                placeholder="Test"
                                onChange={(e) =>
                                    setTitle(e.target.value)
                                }
                                value={title}
                                className="test_input"
                            />
                        </div>
                        <div>
                            <label>
                                Section Instruction
                            </label>
                            <input
                                type="text"
                                onChange={(e) =>
                                    setInstruction(
                                        e.target.value
                                    )
                                }
                                value={instruction}
                                className="test_input"
                            />
                        </div>
                        <div>
                            <label>Time</label>
                            <input
                                type="number"
                                onChange={(e) =>
                                    setTimer(e.target.value)
                                }
                                value={timer}
                                className="test_input"
                            />
                        </div>

                        <div className="test_btn">
                            <button
                                type="submit"
                                className="btn"
                            >
                                Add Section
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

export default Section;
