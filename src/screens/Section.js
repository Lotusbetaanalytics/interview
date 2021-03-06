import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import "./Section.css";

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
                        <div className="section_page">
                            <div className="sec_top">
                                <label>Test</label>
                            </div>
                            <select
                                className="test_input2"
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
                            <div className="sec_top">
                                <label>Section Name</label>
                                <input
                                    type="text"
                                    placeholder="Test"
                                    onChange={(e) =>
                                        setTitle(
                                            e.target.value
                                        )
                                    }
                                    value={title}
                                    className="test_input3"
                                />
                            </div>
                            <div className="sec_top">
                                <label>
                                    Section Instruction
                                </label>
                                <input
                                    type="text"
                                    placeholder="Instruction"
                                    onChange={(e) =>
                                        setInstruction(
                                            e.target.value
                                        )
                                    }
                                    value={instruction}
                                    className="test_input4"
                                />
                            </div>
                            <div className="sec_top">
                                <label>Time</label>
                                <input
                                    type="number"
                                    placeholder="Timer"
                                    onChange={(e) =>
                                        setTimer(
                                            e.target.value
                                        )
                                    }
                                    value={timer}
                                    className="test_input5"
                                />
                            </div>

                            <div className="test_btn">
                                <button
                                    type="submit"
                                    className="section_btn"
                                >
                                    Add Section
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Section;
