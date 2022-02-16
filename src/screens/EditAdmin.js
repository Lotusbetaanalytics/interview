import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./EditAdmin.css";
import { editQuestionId } from "../redux/actions/questionAction";

function EditAdmin() {
  const [editQuestion, setEditQuestion] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(editQuestionId(id));
  }, [id, dispatch]);

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
            value={editQuestion}
            className="test_input"
            placeholder="Question"
          />

          <button className="btn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditAdmin;
