import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./EditAdmin.css";

function EditAdmin() {
    const [editQuestion, setEditQuestion] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <Navbar title="Edit Question" />
            <div>
                <Sidebar />
            </div>

            <div className="admin_container">
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        className="test_input"
                        placeholder="Question"
                    />

                    <button
                        className="btn"
                        onClick={submitHandler}
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditAdmin;
